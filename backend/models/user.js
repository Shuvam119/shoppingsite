const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    phoneNumber: {type: Number, required: true},
    email: {type: String, required: true, trim: true} 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
