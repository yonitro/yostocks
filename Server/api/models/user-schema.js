const mongoose = require('mongoose')


const requiredString ={
    type: String,
    required: true
}

const userSchema = mongoose.Schema({
    email: requiredString,
    username: requiredString,
    password:requiredString,
    marketwatch:[],
    notes:[]
})

module.exports = mongoose.model('users', userSchema)