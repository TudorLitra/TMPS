// Адаптер

class Engine2 {
    simpleInterface() { console.log('Engine 2.0 - tr tr tr') }
}

class EngineV8 {
    finalInterface() { console.log('Engine V8! - wroom wroom!') }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }
// т.о получается адаптер
    simpleInterface() {
        this.engine.finalInterface();
    }
}

// запуск двигателя

class Auto {
    startEngine(engine) {
        engine.simpleInterface()
    }
}

// Engine 2.0

const myCar = new Auto()
const oldEngine = new Engine2()

myCar.startEngine(oldEngine)

// Engine V8 with adapter

const myCarr = new Auto()
const engineAdpter = new EngineV8Adapter(new EngineV8())

myCarr.startEngine(engineAdpter)

// Engine V8 without adapter

const myCarrr = new Auto()
const engineAdapterr = new EngineV8()

myCarrr.startEngine(engineAdapterr)




