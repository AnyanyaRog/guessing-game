 
class GuessingGame {
    constructor(minimum,maximum, number, num) {    
        this.minimum = minimum
        this.maximum= maximum 
        this.number = number
        this.num = num
    }
    setRange(min, max) {
    this.minimum  = min;
     this.maximum  = max;
    } 

    guess() {

    return(this.num = Math.round((this.maximum + this.minimum) / 2));

    }

    lower() {
    this.maximum = this.num;
    }

    greater() {
        this.minimum = this.num;
    }
}

module.exports = GuessingGame;
