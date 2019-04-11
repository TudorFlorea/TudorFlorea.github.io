function ConditionsAsserter() {
    this.generateConditions();
}



ConditionsAsserter.prototype.generateConditions = function() {
    this.color = COLORS[randIntBetween(0, COLORS.length)];
    if(Math.random() < 0.5) {
        this.colorCondition = COLOR_EQUAL_TO_CONDTION;
        this.colorMessage = "Color equal to ";
    } else {
        this.colorCondition = COLOR_NOT_EQUAL_TO_CONDTION;
        this.colorMessage = "Color not equal to ";
    }

    this.type = CARD_TYPES[randIntBetween(0, CARD_TYPES.length)];
    if(Math.random() < 0.5) {
        this.typeCondition = this.TYPE_EQUALS_TO;
        this.typeMessage = "Type equal to: ";
    } else {
        this.typeCondition = this.TYPE_NOT_EQUALS_TO;
        this.typeMessage = "Type not equal to ";
    }

    this.number = randIntBetween(6, 9);
    if(Math.random() < 0.5) {
        this.numberCondition = this.TYPE_NUMBER_LESS_THAN_OR_EQUALS;
        this.numberMessage = "Number less than or equal to: ";
    } else {
        this.numberCondition = this.TYPE_NUMBER_GREATHER_THAN;
        this.numberMessage = "Number greater than: ";
    }
};

ConditionsAsserter.prototype.assertColor = function(color) {
    if(this.colorCondition === COLOR_EQUAL_TO_CONDTION) {
        return color === this.color;
    } else {
        return color !== this.color;
    }
};

ConditionsAsserter.prototype.assertType = function(type) {
    console.log(this.typeCondition, this.TYPE_EQUALS_TO);
    if(this.typeCondition === this.TYPE_EQUALS_TO) {
        return type == this.type;
    } else {
        return type != this.type;
    }
};

ConditionsAsserter.prototype.assertNumber = function(number) {

    if(this.numberCondition === this.TYPE_NUMBER_LESS_THAN_OR_EQUALS) {
        return number <= this.number;
    } else {
        return number > this.number;
    }
};

ConditionsAsserter.prototype.getColor = function() {
    return this.color;
};

ConditionsAsserter.prototype.getColorMessage = function() {
    return this.colorMessage;
};

ConditionsAsserter.prototype.getType = function() {
    return this.type;
};

ConditionsAsserter.prototype.getTypeMessage = function() {
    return this.typeMessage;
};

ConditionsAsserter.prototype.getNumber = function() {
    return this.number;
};

ConditionsAsserter.prototype.getNumberMessage = function() {
    return this.numberMessage;
};

ConditionsAsserter.prototype.TYPE_SPADES = "SPADES";
ConditionsAsserter.prototype.TYPE_HEARTS = "HEARTS";
ConditionsAsserter.prototype.TYPE_DIAMONDS = "DIAMONDS";
ConditionsAsserter.prototype.TYPE_CLUBS = "CLUBS";
ConditionsAsserter.prototype.TYPE_EQUALS_TO = 1;
ConditionsAsserter.prototype.TYPE_NOT_EQUALS_TO = 2;
ConditionsAsserter.prototype.TYPE_NUMBER_LESS_THAN_OR_EQUALS = 3;
ConditionsAsserter.prototype.TYPE_NUMBER_GREATHER_THAN = 4;