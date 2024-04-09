const findTheOldest = function(people) {
    people.map(person => !person.yearOfDeath ? person.yearOfDeath = new Date().getFullYear() : person.yearOfDeath)
    return people.sort((personA, personB) => (personB.yearOfDeath - personB.yearOfBirth) - (personA.yearOfDeath - personA.yearOfBirth))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
