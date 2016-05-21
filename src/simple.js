let animal = {
    animalType: 'animal',

    describe () {
        return `An ${this.animalType} with ${this.color} color, ${this.legs} legs, and a ${this.tail} tail.`;
    }
};

let mouseFactory = {
    create () {
        let secret = 'secret agent';
        return Object.assign(Object.create(animal), {
            animalType: 'mouse',
            color: 'brown',
            legs: 4,
            tail: 'long, skinny',
            profession () {
                return secret;
            }
        });
    }
};

export default mouseFactory;
