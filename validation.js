import { object, string } from '@hapi/joi';
import { number } from 'joi';

const registerValidation = (data) => {    
    const schema = object({
        name: string().min(6).max(20).required(),
        email: string().min(6).required().email(),
        password: string().min(6).max(1024).required(),
    });
    return schema.validate(data);
}

const loginValidation = (data) => {    
    const schema = object({
        email: string().min(6).required().email(),
        password: string().min(6).max(1024).required(),
    });
    return schema.validate(data);
}

const colorValidation = (data) => {
    const schema = object({
        r: number(),
        g: number(),
        b: number()
    })
}

const temperatureValidation = (data) => {
    const schema = object({
        t: number()
    })
}
const brightnessValidation = (data) => {
    const schema = object({
        b: number()
    })
}


const _registerValidation = registerValidation;
export { _registerValidation as registerValidation };
const _loginValidation = loginValidation;
export { _loginValidation as loginValidation };
const _colorValidation = colorValidation;
export { _colorValidation as colorValidation };
const _brightnessValidation = brightnessValidation;
export { _brightnessValidation as brightnessValidation };
const _temperatureValidation = temperatureValidation;
export { _temperatureValidation as temperatureValidation };