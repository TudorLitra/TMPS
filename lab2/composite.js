// Компоновщикц

class Parts {

    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}
// поможеть создавать обьекты с единым интерфейсом взаимодействия


// набор однотипных обьектов
class Engine extends Parts {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(1000);
    }
}

class Muffler extends Parts {
    constructor() {
        super();
        this.setName('Muffler');
        this.setPrice(400);
    }
}

class SteeringWheel extends Parts {
    constructor() {
        super();
        this.setName('SteeringWheel');
        this.setPrice(400);
    }
}

// прощитываем обую стоимость
class TotalCost extends Parts {
    constructor() {
        super();
        this.detail = [];
    }

    add(detail) {
        this.detail.push(detail);
    }

    getPrice() {
        return this.detail
            .map(details => details.getPrice())
            .reduce((a, b) => a + b);
    }
}

// тестируем
class Motorbike extends TotalCost {
    constructor() {
        super();
        this.setName('Suzuki');
    }
}

// компликтуем всем необходимым
const myMoto = new Motorbike()

myMoto.add(new Engine())
myMoto.add(new Muffler())
myMoto.add(new SteeringWheel())

console.log(`${myMoto.getName()} price is ${myMoto.getPrice()}$`)