import client from "../Client";
import { brightnessValidation, colorValidation, temperatureValidation } from "../validation";
import router from "./auth";
const verify = require('./verifyToken');

router.post('/color', verify, async (req, res) => {
    const { error } = colorValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const {r, g, b} = req.body;
    client.setColor(r, g, b);
    return res.status(200).json({r, g, b});
});

router.post('/temperature', verify, async (req, res) => {
    const { error } = temperatureValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const {t} = req.body;
    client.setTemperature(t);
    return res.status(200).json({t});
});

router.post('/brightness', verify, async (req, res) => {
    const { error } = brightnessValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const {b} = req.body;
    client.setTemperature(b);
    return res.status(200).json({b});
});

module.exports = router;