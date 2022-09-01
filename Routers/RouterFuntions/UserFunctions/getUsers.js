
const { Users } = require('../../../Models/UserModel')

const getUsers = async (req, res) => {

    const user = await Users.find()
    res.send({ message: 'All users', error: false, value: user })

}

module.exports = getUsers