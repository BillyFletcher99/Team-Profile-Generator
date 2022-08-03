const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");


async function propmt(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?: "
       },
       {
            type: "input",
            name: "id",
            message: "Enter the employee's ID:"
       },
       {
            type: "input",
            name: "email",
            message: "Enter the employee's email address: "
       },
       {
            type: "list",
            name: "role",
            message: "What what is the employee's role:",
            choices: [
                 "Engineer",
                 "Intern",
                 "Manager"
            ]
       }
  ]);
}