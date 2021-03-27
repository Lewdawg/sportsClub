const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const member = new Schema({

    sex: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    }
});

const NewMember = mongoose.model('members', member);
// .connection

module.exports = NewMember;