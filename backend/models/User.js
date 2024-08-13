const mongoose = require('mongoose');


// User Schema
const UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    required: true 
},
date: {
    type: Date,
    default: Date.now,
}, 
},
//{ collection: 'users' }
); // Explicitly name the collection



module.exports = mongoose.model('User', UserSchema);
