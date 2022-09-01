
const { Users } = require('../../../Models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const _ = require('lodash')


const signup = async (req, res) => {
    const user = await Users.findOne({ email: req.body.email })
    if (user) {
        res.send({ message: 'User already exist', error: true })
    }
    else {
        let data = new Users(_.pick(req.body, ['name', 'email', 'password']))
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        data.password = hashedPass
        data = await data.save()
        // console.log(data);

        const token = jwt.sign(_.pick(data, ['_id', 'name', 'email', 'role']), process.env.SECRET_KEY, { expiresIn: '1h' })

        res.send({ message: 'User created successfully', value: token, error: false })
    }
}



module.exports = signup