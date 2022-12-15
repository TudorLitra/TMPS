// Заместитель

class smartHouse {
    openDoor() {
        console.log('Opening home door')
    }

    closeDoor() {
        console.log('Closing the home door')
    }
};

// proxy обьект безопастность открытие дверей
class SafetySystem {
    constructor(door) {
        this.door = door;
    }

    openDoor(password) {
        if (this.authenticate(password)) {
            this.door.openDoor();
        } else {
            console.log('Refusal!');
        }
    }

    authenticate(password) {
        return password === 'Ivan';
    }

// собсвтеный обьект, заместитель с тем же интерфесом что и оргин.
    closeDoor() {
        this.door.closeDoor()
    }
};

const door = new SafetySystem(new smartHouse())

door.openDoor('Bob')
door.openDoor('Ivan')
door.closeDoor()