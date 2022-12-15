// const readlineSync = require('readline-sync');
// const chalk = require('chalk');
// const inquirer = require('inquirer');

import readlineSync from 'readline-sync';
import chalk from 'chalk';
import inquirer from 'inquirer';

console.log('       ====================================================================')
console.log(chalk.magenta(' -- Hello user, are you ready to get started -- '))
console.log('       ====================================================================')


class Bot {
    constructor(name, wallet, password) {
        this.name = name
        this.wallet = wallet
        this.password = password
    }
}

if (readlineSync.keyInYN(chalk.green(' Try to Register? '))) {

    class BotFactory {
        create(type) {
            if (type === 'personOne')
                console.log('Person 1:')
                return new Bot(
                    readlineSync.question(chalk.gray.underline(' What is your name ')),
                    readlineSync.question(chalk.gray.underline(' Account balance: ')),
                    readlineSync.question(chalk.gray.underline(' Your password?: ')))

            if (type === 'personTwo')
                return new Bot(
                    readlineSync.question(chalk.gray.underline(' What is your name ')),
                    readlineSync.question(chalk.gray.underline(' Account balance: ')),
                    readlineSync.question(chalk.gray.underline(' Your password?: ')))
        }

    }
    const factory = new BotFactory()

    var personOne = factory.create('personOne')
    console.log(personOne)


    console.log('Person 2:')
    var personTwo = factory.create('personTwo')
    console.log(personTwo)

}  else {
    console.log(chalk.red('Error: Fill in all empty fields!'));
}

console.log('\n')


if (readlineSync.keyInYN(chalk.green(' Do you want to choose yor person? '))) {

    var chose = {
        name: ''
    };

    chose.name = readlineSync.question(chalk.gray.underline(`Your chose: `))

    //

    function person (car) {
        return car.name === personOne.name ? personOneFactory : personTwoFactory
    }

    function personOneFactory() {
        return new one()
    }

    function personTwoFactory() {
        return new two()
    }

    class one {
        info() {
            return chalk.black.bold.bgYellow(`You chose: name:${personOne.name} wallet:${personOne.wallet} password:${personOne.password} `)
        }
    }

    class two {
        info() {
            return chalk.black.bold.bgYellow(`You chose: name:${personTwo.name} wallet:${personTwo.wallet} password:${personTwo.password} `)
        }
    }

    const produce = person(chose)
    const myPerson = new produce()
    console.log(myPerson.info())

} else {
    console.log(chalk.red('Error: Fill in all empty fields!'));
}

console.log('\n')

if (readlineSync.keyInYN(chalk.green(`${chose.name} ready to buy a car? `))) {

}

    let choseNewCar = [chalk.gray('Tesla'), chalk.green('Audi'), chalk.red('BMW'),]
    let index = readlineSync.keyInSelect(choseNewCar, 'Choose the number of the car to buy: ');

    if (readlineSync.keyInYN(chalk.green('Buy',choseNewCar[index],'?'))) {

    }

    if (readlineSync.keyInYN(chalk.green('Would you like to buy additional parts?'))) {

    }


if ( index === 1) {
    class Car {
        constructor() {
            this.price = 0;
            this.model = ''
        }

        getPrice() {
            return this.price;
        }

        getModel() {
            return this.model
        }
    }


    class Audi extends Car {

        constructor() {
            super();
            this.price = 15000;
            this.model = 'Audi';
        }
    }


    class Spoiler {
        constructor(car) {
            this.car = car;
        }

        getPrice() {
            return this.car.getPrice() + 1222;
        }

        getModel() {
            return `${this.car.getModel()} with Spoiler`;
        }
    }

    class Conditioner {
        constructor(car) {
            this.car = car;
        }

        getPrice() {
            return this.car.getPrice() + 999;
        }

        getModel() {
            return `${this.car.getModel()} with Conditioner`;
        }
    }



    let choseCar = {
        car: ''
    }
    choseCar.car = readlineSync.question(chalk.gray.underline(`Your chose: `))

    let audi = new Audi()

    if ( choseCar.car === 'spoiler') {
        audi = new Spoiler(audi)
    }
    if( choseCar.car === 'conditioner') {
        audi = new Conditioner(audi)
    }
    if( choseCar.car === 'conditioner and spoiler' ) {
        audi = new Conditioner(audi)
        audi = new Spoiler(audi)
    }

    console.log('Price',audi.getPrice(), audi.getModel())
    var num = audi.getPrice()
} else {
    console.log(' Insufficient funds ')
}


console.log('\n')
console.log('After buying a car, we will definitely install security!')
console.log('prove that you are the owner of the car!')

let savedName = {
    ownerName: ''
}
savedName.ownerName = readlineSync.question(chalk.gray.underline(`Your name: `))



class CarSafety {
    openDoor() {
        console.log(chalk.green(`open the door for ${savedName.ownerName}`))
    }

    closeDoor() {
        console.log('Closing  door')
    }
};


class SafetySystem {
    constructor(door) {
        this.door = door;
    }

    openDoor(password) {
        if (this.authenticate(password)) {
            this.door.openDoor();
        } else {
            console.log(chalk.red('closed door for others!'));
        }
    }

    authenticate(password) {
        return password === 'Roman';
    }


    closeDoor() {
        this.door.closeDoor()
    }
};

const door = new SafetySystem(new CarSafety())


door.openDoor(savedName.ownerName)
door.openDoor('Bob')





console.log('\n')
console.log('Well, what are you ready to check if the car starts?')


if (readlineSync.keyInYN(chalk.green('Start the car??'))) {

}


class CarDriver {
    constructor(action) {
        this.action = action;
    }

    execute() {
        this.action.execute();
    }
};


class Engine {
    constructor() {
        this.state = false;
    }

    engineOn() {
        this.state = true;
    }

    engineOff() {
        this.state = false;
    }
};


class OnStart {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.engineOn();
    }
};

class onSwitchOff {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.engineOff();
    }
};


const engine = new Engine()
console.log(engine,chalk.red('machine off'))

const onStartCommand = new OnStart(engine)
const drive = new CarDriver(onStartCommand)
drive.execute()
console.log(engine,chalk.green('car started successfully'))


console.log('\n')
console.log("It's time to pay for the car")
console.log(`Total car purchase: ${chalk.red.underline(num)} `)
console.log(`At the moment you have:
 ${chalk.gray(`MasterCard = ${chalk.red.underline('4999')}`)}
 ${chalk.gray(`PayPal = ${chalk.red.underline('11344')}`)}
 ${chalk.gray(`Qiwi = ${chalk.red.underline('19999')}`)}`)

if (readlineSync.keyInYN(chalk.green('Ready to pay?'))) {

}

class Account {
    payment(orderPrice) {
        if (this.Pay(orderPrice)) {
            console.log(chalk.green(`Paid ${orderPrice} using ${this.name}`));
        } else if (this.incomer) {
            console.log(chalk.red(`Cannot pay using ${this.name}`));
            this.incomer.payment(orderPrice)
        } else {
            console.log('Unfortunately, not enough money');
        }
    }

    Pay(amount) {
        return this.check >= amount;
    }

    Next(account) {
        this.incomer = account;
    }
};

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

const mater = new MasterCard(4999)
const paypal = new Paypal(11344)
const qiwi = new Qiwi(19999)

mater.Next(paypal)
paypal.Next(qiwi)
mater.payment(num)

console.log('\n')
console.log(chalk.magenta('Congratulations you have completed the entire purchase action!!!'))
