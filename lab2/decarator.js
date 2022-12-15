// Декортатор

class Moto {
    constructor() {
        this.price = 10000;
        this.model = 'Moto'
    }

    getPrice() {
        return this.price;
    }

    getModel() {
        return this.model
    }
}

// определённый автомобиль
class Suzuki extends Moto {

    constructor() {
        super();
        this.price = 15000;
        this.model = 'Suzuki';
    }
}

// декортаторы
class Mechanics {
    constructor(moto) {
        this.moto = moto;
    }
    // изменяем
    getPrice() {
        return this.moto.getPrice() + 1000;
    }

    getModel() {
        return `${this.moto.getModel()} with Mechanics`;
    }
}

class Machine {
    constructor(moto) {
        this.moto = moto;
    }

    getPrice() {
        return this.moto.getPrice() + 300;
    }

    getModel() {
        return `${this.moto.getModel()} with Machine`;
    }
}

// создание moto
let suzuki = new Suzuki()
suzuki = new Mechanics(suzuki)
suzuki = new Machine(suzuki)

console.log(suzuki.getPrice(), suzuki.getModel())
