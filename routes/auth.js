import { Router } from 'express';
const router = Router();
import User from '../models/User.js';
import { registerValidation, loginValidation } from '../validation.js';
import { genSalt, hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';


router.post('/register', async (req, res) => {

    const { error } = registerValidation(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already exists!');

    const salt = await genSalt(10);
    const hashPassword = await hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    });

    user.save().then((savedUser) => {
        res.status(200).send(savedUser);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Account does not exist!');

    const validPass = await compare(req.body.password, user.password);

    if(!validPass) return res.status(400).send('Invlid password!');
    
    // Create and assign a token
    const token = sign({_id: user._id}, process.env.TOKEN_SECRET);

    res.header('auth-token', token).send(token);

});

export default router;