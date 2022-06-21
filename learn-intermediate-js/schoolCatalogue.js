// unit: classes
// objective: create a school superclass with child classes

class School {
    constructor (name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(num) {
      if (typeof num == 'Number') {
        numberOfStudents = num;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
      let rand = Math.floor(Math.random() * (substituteTeachers.length - 1));
      return substituteTeachers[rand];
    }
  }
  
  class PrimarySchool extends School {
    constructor (name, numberOfStudents, pickupPolicy) {
      super (name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class MiddleSchool extends School {
    constructor (name, numberOfStudents) {
      super(name, 'middle school', numberOfStudents);
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super (name, 'high school', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  lorraineHansbury.quickFacts();
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeams);