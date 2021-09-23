
const { verify } = require("jsonwebtoken")

async function isAuthenticated(req, res, next) {
    const token = req.session.jwt

    if (!token) {
        next()
    }

    try {
        const payload = verify(token, process.env.JWT_SECRET_KEY)

        req.currentUser = payload

    } catch (err) { }
    next()

}

module.exports = isAuthenticated