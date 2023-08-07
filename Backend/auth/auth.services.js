const {auth} = require('../config/Firebase');
const {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
	sendPasswordResetEmail,
    updatePassword,
    deleteUser
} = require('firebase/auth');
const {generateToken} = require('../config/JWT');
const {connect, close} = require('../config/Mongo');

// Generate random secret key


class AuthServices {

    async signup(user) {
        const {firstName, lastName, email, password, role} = user;
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, user.email, user.password);
            const uid = userCredentials.user.uid;
            const doc = {
                _id: uid,
                firstName: firstName,
                lastName: lastName,
                email: email,
                role: role
            }
            const db = await connect();
            const result = await db.collection('users').insertOne(doc);
            await close();
            return uid;
        } catch (error) {
            throw error;
        }
    }

    async login(user) {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, user.email, user.password);

            // Creating express jwt token
            const token = await generateToken(userCredentials.user.uid, user.email);
            const db = await connect();
            // Fetch the user information from MongoDB
            const result = await db.collection('users').findOne({_id: userCredentials.user.uid});
            return {
                token: token,
                user: result
            };
        } catch (error) {
            throw error;
        }
    }

    async resetPassword(email) {
        try {
            return await sendPasswordResetEmail(auth, email);
        } catch (error) {
            throw error;
        }
    }

    async changePassword(user) {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, user.email, user.password);
            await updatePassword(userCredentials.user, user.newPassword);
            return true;
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(user) {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, user.email, user.password);
            await deleteUser(userCredentials.user);

            // Delete user from MongoDB
            const db = await connect();
            await db.collection('users').deleteOne({_id: userCredentials.user.uid});
            await close();
            return true;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AuthServices();
