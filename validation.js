import pkg from '@hapi/joi';
const { object, string} = pkg;

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
        r: Joi.number().integer().required(),
        g: Joi.number().integer().required(),
        b: Joi.number().integer().required()
    })
}

const temperatureValidation = (data) => {
    const schema = object({
        t: Joi.number().integer().required()
    })
}
const brightnessValidation = (data) => {
    const schema = object({
        b: Joi.number().integer().required()
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