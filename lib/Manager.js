// Employee Constructor 
const Employee = require("./Employee");

//Class Manager extends Employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
// Super for parent Object
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;