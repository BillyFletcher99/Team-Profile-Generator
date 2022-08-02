// Employee Constructor 
const Employee = require("./Employee");

//Class Engineer extends Employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
// Super for parent Object
        super (name, id, email);

        this.github = github; 
    }
    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}
module.exports = Engineer;