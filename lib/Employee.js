class Employee {
    constructor(email, id, name) {
        this.email = email;
        this.id = id;
        this.name = name;

    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getDescripition(){
        return 'Employee';
    }
    getGithub(){
        return this.GitHub;
    }
}
module.exports = Employee;