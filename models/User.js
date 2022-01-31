import { Schema, model } from 'mongoose';

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    admin: {
        type: Boolean,
        default: false
    }
    
});

export default model('User', userSchema);