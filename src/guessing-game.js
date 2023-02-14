class GuessingGame {
    constructor() {}

    setRange(min, max) {
       this.min = min;
       this.max = max;      
    }

    guess() {
       return this.middle = Math.round((this.min + this.max) / 2);
    }

    lower() {  
       return this.max = this.middle;
    }

    greater() {
       return this.min = this.middle;
    }
}

module.exports = GuessingGame;
