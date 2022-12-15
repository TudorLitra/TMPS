// наблюдатель механизм подписки

class MotoNews {

    constructor() {
        this.news = ''; // новости
        this.subscriber = []; // подписчики
    }

    setNews(text) {
        this.news = text;
        this.notifyAll(); // оповещение
    }

    notifyAll() {
        return this.subscriber.forEach(subs => subs.inform(this));
    }                           // нужен для того чтобы был доступ к news

    register(observer) {
        this.subscriber.push(observer);
    }

};

// классы с подписчиками
class Roman1 {
    inform(message) {
        console.log(`Roman1 has been informed about: ${message.news}`);
    }
};

class Roman2 {
    inform(message) {
        console.log(`Roman2 has been informed about: ${message.news}`);
    }
};

const motoNews = new MotoNews()

motoNews.register(new Roman1())
motoNews.register(new Roman2())

motoNews.setNews('New moto prive is 41350')