
// const router = require('express').Router()
const { Users } = require('../../../Models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const _ = require('lodash')



const signin = async (req, res) => {

    const user = await Users.findOne({ email: req.body.email })
    if (user) {
        const checked = await bcrypt.compare(req.body.password, user.password)
        console.log(checked);
        if (checked) {
            const token = await jwt.sign(_.pick(user, ['_id', 'name', 'email', 'role']), process.env.SECRET_KEY, {expiresIn: '1h'})
            res.send({ message: 'Login successful', error: false, value: token });
        }
        else {
            res.send({ message: 'Password not matched', error: true });
        }
    }
    else {
        res.send({ message: 'User not found', error: true });
    }

}


// router.post('/', signin)

// module.exports = router

module.exports = signin