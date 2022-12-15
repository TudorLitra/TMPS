// МОСТ

// корневые классы
class MainModel {
    constructor(color) {
        this.color = color;
    }
}

class MainColor {
    constructor(typeColor) {
        this.typeColor = typeColor;
    }
    getColor() {
        return this.typeColor;
    }
}

// два под-класса , унаследовались
class WhiteColor extends MainColor {
    constructor() {
        super("white-black");
    }
}

class RedColor extends MainColor {
    constructor() {
        super("Red-blue");
    }
}

// два класса независимы друг от друга
class Pencil extends MainModel {
    constructor(color) {
        super(color);
    }

    connection() {
        return `Subject: Pencil, color: ${this.color.getColor()}`; // вызов
    }
}

class Pen extends MainModel {
    constructor(color) {
        super(color);
    }
    // связь
    connection() {
        return `Subject: Pen, color: ${this.color.getColor()}`;
    }
}

const whitePencil = new Pencil(new RedColor())
console.log(whitePencil.connection())