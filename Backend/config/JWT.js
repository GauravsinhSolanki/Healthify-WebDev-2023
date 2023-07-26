const jwt = require('jsonwebtoken');
const secretKey = "bqD4GYj6K8#$wLmP9Tc7RzXu2@#FQnWl";


async function generateToken (uid, email) {
    return jwt.sign({
        uid: uid,
        email: email
    }, secretKey, {expiresIn: '1h'});
}

async function verifyToken (req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if(!token) {
        return res.status(401).json({error: "Unauthorized"});
    } else {
        jwt.verify(token, secretKey, (err, decoded) => {
            if(err) {
                return res.status(401).json({error: "Unauthorized"});
            } else {
                req.uid = decoded.uid;
                next();
            }
        });
    }
}

module.exports = {generateToken, verifyToken};