import jwt from 'jsonwebtoken'
import pool from '../config/db_config.js'

const adminMw = async function (req, res, next) {
    if (req.headers.token) {
        await jwt.verify(req.headers.token, process.env.SECRET_KEY)
        next()
    } else {
        return res.send({
            msg: 'Token mavjud emas!'
        })
    }
}

export {
    adminMw
}