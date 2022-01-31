import Joi from '@hapi/joi';

const registerValidation = (data) => {    
    const schema = Joi.object({
        name: Joi.string().min(6).max(20).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).max(1024).required(),
    });
    return schema.validate(data);
}

const loginValidation = (data) => {    
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).max(1024).required(),
    });
    return schema.validate(data);
}

const colorValidation = (data) => {
    const schema = Joi.object({
        r: Joi.number().integer().required(),
        g: Joi.number().integer().required(),
        b: Joi.number().integer().required()
    })
    return schema.validate(data);
}

const temperatureValidation = (data) => {
    const schema = Joi.object({
        t: Joi.number().integer().required()
    })
    return schema.validate(data);
}
const brightnessValidation = (data) => {
    const schema = Joi.object({
        b: Joi.number().integer().required()
    })
    return schema.validate(data);
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