class Blog {
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(unsubscriber) {
        this.subscribers = this.subscribers.filter(s => s.name !== unsubscriber.name);
        console.log("New subs list: ", ...this.subscribers);
    }

    publish(news) {
        this.subscribers.forEach(subscriber => {
            subscriber.notify(news);
        })
    }
}

class Subscriber {
    constructor(name) {
        this.name = name;
    }

    notify(news) {
        console.log(`Dear ${this.name}, you must see it : `,news + "!!!");
    }
}

const blog = new Blog();

blog.subscribe(new Subscriber("John"));
const mike =  new Subscriber("Mike");
blog.subscribe(mike);
blog.unsubscribe(mike)
blog.subscribe(new Subscriber("Bob"));

console.log('[blog]', blog);
blog.publish("New news about a person which is observable!");

