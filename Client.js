import Govee from "node-govee-led";

class Client {
    clinet = new Govee({
        apiKey: process.env.API,
        mac: process.env.MAC,
        model: process.env.MODEL
    })

    on = false;

    setColor(r, g, b) {
        if(!on) this.turnOn();
        const hexCode = "#" + r.toString(16) + g.toString(16) + b.toString(16);
        clinet.setColor(hexCode);
    }
    setBrightness(b) {
        if(!on) this.turnOn();
        clinet.setBrightness(b);
    }
    setTemperature(t) {
        if(!on) this.turnOn();
        clinet.setTemperature(t);
    }
    turnOn() {
        client.turnOn();
        on = true;
        setTimeout(() => {
            on = false;
        }, 30 * 1000);
    }
    turnOff() {
        client.turnOff();
        on = false;
    }
}

const client = new Client({});
export default client;