const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const addManager = ()=> {
     return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's emaill address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office numer?"
        }
    ]).then(managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role in the company?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub username?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
            when: (input) => input.role === "Intern"
        }
    ]).then(employeeInfo => {
        let {name, id, email, role, github, school} = employeeInfo;
        let employee;
        if(role ==="Engineer") {
            employee = new Engineer (name, id, email, github);
        }else if(role ==="Intern") {
            employee = new Intern (name, id, email, school);
        }
        teamArray.push(employee);
        return teamArray;
    })
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }else {
            console.log('Your team profile has been successfully created!')
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHtml => {
        return writeFile(pageHtml);
    })
    .catch(err => {
        console.log(err);
    });