let mongoose = require('mongoose')
let db = require('../config/db')
let UserSchema = new mongoose.Schema({
    name: { type: String },
    password: { type: String },
    email: { type: String }
})

module.exports = db.model('user', UserSchema)