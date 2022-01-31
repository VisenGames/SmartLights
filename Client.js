import Govee from "node-govee-led";

class Client {
    govee = new Govee({
        apiKey: process.env.API,
        mac: process.env.MAC,
        model: process.env.MODEL
    })

    init() {
        this.govee = new Govee({
            apiKey: process.env.API,
            mac: process.env.MAC,
            model: process.env.MODEL
        });
        console.log(process.env.API);
        this.turnOn();
    }

    on = false;

    toHex(n) {
        const h = n.toString(16);
        if(h.length == 1) return "0" + h;
        return h;
    }

    setColor(r, g, b) {
        if(!this.on) this.turnOn();
        const hexCode = "#" + this.toHex(r) + this.toHex(g) + this.toHex(b);
        console.log("Setting color to: " + hexCode);
        this.govee.setColor(hexCode);
    }
    setBrightness(b) {
        if(!this.on) this.turnOn();
        this.govee.setBrightness(b);
    }
    setTemperature(t) {
        if(!this.on) this.turnOn();
        this.govee.setTemperature(t);
    }
    turnOn() {
        this.govee.turnOn();
        this.on = true;
        setTimeout(() => {
            this.on = false;
        }, 30 * 1000);
    }
    turnOff() {
        this.govee.turnOff();
        this.on = false;
    }
}

const client = new Client({});
export default client;