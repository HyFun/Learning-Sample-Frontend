"use strict";
(() => {
    class Animal {
        constructor() { }
    }
    class Cat extends Animal {
        constructor() {
            super(...arguments);
            this.name = `猪八戒`;
        }
        say() {
            console.log(this);
        }
    }
})();
