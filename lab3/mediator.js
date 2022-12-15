// посредник

class Salesman {
    constructor() {
        this.person = [];
    }

    orderMoto(person, moto, info) {
        const name = person.getName();

        console.log(` name: ${name}. Order moto is ${moto}`);
        console.log(`Additional info: ${info}`);
        this.addPersonList(name);
    }
// принимаем имя
    addPersonList(name) {
        this.person.push(name);
    }
// выводим имя
    getPersonList() {
        return this.person;
    }
};


// связь медиаторов // класс посрединк
class Customer {
    constructor(name, person) {
        this.name = name;
        this.dealerMediator = person;
    }

    getName() {
        return this.name;
    }

    makeOrder(moto, info) {
        this.dealerMediator.orderMoto(this, moto, info)
    }
};
// не нужно описывать само создание заказа и делать связь с другим классом
// класс получился автономным

const mediator = new Salesman()

const roman = new Customer('Roman', mediator)
const namor = new Customer('Namor', mediator)

roman.makeOrder('Moto1', 'Mecanic!')
namor.makeOrder('Moto1', 'Auto')

console.log(mediator.getPersonList())
// уменьшает связаность множ класс между. собой.