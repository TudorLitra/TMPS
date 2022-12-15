// состояние менят поведенеие обьк

class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }
// премещение на след.шаг
    next() {
        return new this.nextStatus();
    }
}

// шаги доставки

// ожидаение платежа
class Expectation extends OrderStatus {
    constructor() {
        super('waitingForPayment', Sending);
    }
}
// Доставка
class Sending extends OrderStatus {
    constructor() {
        super('shipping', Transformation);
    }
}

// Доставка заказч.
class Transformation extends OrderStatus {
    constructor() {
        super('delivered', Transformation);
    }
}

// обьект заказа
class Order {
    constructor() {
        this.state = new Expectation();
    }
// изменение состяния
    nextState() {
        this.state = this.state.next();
    };
}

const myOrder = new Order()

console.log(myOrder.state.name)

myOrder.nextState()
console.log(myOrder.state.name)

myOrder.nextState()
console.log(myOrder.state.name)