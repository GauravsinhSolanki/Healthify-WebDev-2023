const authServices = require('./auth.services');
class AuthController {
    constructor() {

    }

    async createUser(req, res) {
        try{
            const userId = await authServices.signup(req.body);
            res.status(201).json({userId: userId});
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async login(req, res) {
        try{
            const data = await authServices.login(req.body);
            console.log(data);
            res.status(200).json({data});
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async resetPassword(req, res) {
        try {
            await authServices.resetPassword(req.body.email);
            res.status(200).json({result: "Password reset email sent!"});
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async changePassword(req, res) {
        try {
            await authServices.changePassword(req.body);
            res.status(200).json({result: "Password changed!"});
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async deleteUser(req, res) {
        try {
            await authServices.deleteUser(req.body);
            res.status(200).json({result: "User deleted!"});
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = new AuthController();