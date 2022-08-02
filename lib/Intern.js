// Employee Constructor 
const Employee = require('./Employee');

//Class Intern extends Employee constructor
class Intern extends Employee  {
    constructor (name, id, email, school) {
// Super for parent Object
        super (name, id, email); 

        this.school = school; 
    }
    getSchool () {
        return this.school;
    }
    getRole () {
        return "Intern";
    }
}
module.exports = Intern; 