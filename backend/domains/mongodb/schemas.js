'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ACCOUNT = new Schema({
    email: { type: String, unique: true, required: true, trim: true },
    username: { type: String, required: true, trim: true, minlength: 2 },
    role: { type: String, enum: ['admin', 'customer'] },
    password: { type: String, required: true, trim: true, minlength: 6 },
    password_confirm: { type: String, required: true, trim: true, minlength: 6 },
}).pre('save', (next) => {
    console.log('SAVE ACCOUNT');
    next();
});


const PERSON = new Schema({
    fullname: String,
    address: String,
    age: Number
}).pre('save', (next) => {
    console.log('SAVE PERSON');
    next();
});

exports.SCHEMAS = {
    ACCOUNT: ACCOUNT,
    PERSON: PERSON
};
