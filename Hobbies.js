function findAllHobbyists(hobby, hobbies) {
  var result = [];
  for (var person in hobbies) {
    if (hobbies[person].includes(hobby)) {
      result.push(person);
    }
  }
  return result;
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};

console.log(findAllHobbyists("Yoga", hobbies));
