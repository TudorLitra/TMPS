// цепочка обязаности .. запросы

// имплепентация цепочки ответсветночти
class Account {
    payment(orderPrice) {
        if (this.Pay(orderPrice)) {
            console.log(`Paid ${orderPrice} using ${this.name}`);
        } else if (this.incomer) {
            console.log(`Cannot pay using ${this.name}`);
            this.incomer.payment(orderPrice)
        } else {
            console.log('Unfortunately, not enough money');
        }
    }
//  сравниване
    Pay(amount) {
        return this.check >= amount;
    }
// устанавливаем приемника
    Next(account) {
        this.incomer = account;
    }
};

// однотипные обьекты платёжных систем
class MasterCard extends Account {
    constructor(check) {
        super();
        this.name = 'Master Card';
        this.check = check;
    }
};

class Paypal extends Account {
    constructor(check) {
        super();
        this.name = 'Paypal';
        this.check = check;
    }
};

class Qiwi extends Account {
    constructor(check) {
        super();
        this.name = 'Qiwi';
        this.check = check;
    }
};

const mater = new MasterCard(100)
const paypal = new Paypal(200)
const qiwi = new Qiwi(500)

mater.Next(paypal)
paypal.Next(qiwi)

mater.payment(201)