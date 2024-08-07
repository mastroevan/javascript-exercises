// findTheOldest.js
const findTheOldest = (people) => {
    const currentYear = new Date().getFullYear();
  
    return people.reduce((oldest, person) => {
      const ageOfCurrentPerson = (person.yearOfDeath || currentYear) - person.yearOfBirth;
      const ageOfOldestPerson = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
  
      return ageOfCurrentPerson > ageOfOldestPerson ? person : oldest;
    });
  };
  
// Do not edit below this line
module.exports = findTheOldest;
