// команда превращает запросы в обекты

class CarDriver {
    constructor(action) {
        this.action = action;
    }
// вызов
    execute() {
        this.action.execute();
    }
};

// нет прямого взаимодействия
class Engine {
    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
};

// ключ зажигания для запуска
class OnStart {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.on();
    }
};

class onSwitchOff {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.off();
    }
};

// убедимся что двиг. выкл
const engine = new Engine()
console.log(engine)

// запуск
const onStartCommand = new OnStart(engine) // передаём двигатель
const drive = new CarDriver(onStartCommand) // вручаем ключ зажишагтя
drive.execute()

console.log(engine)

