const inquirer = require("inquirer"); 
const Intern = require("./lib/intern");
const Engineer = require ("./lib/engineer"); 
const Manager = require ("./lib/manager");
const Employee = require ("./lib/Employee");
const fs = require ("fs"); 
const displayPage = require("./src/generateHTML"); 

const employees = [];

const managerQuestions = [
    {
        type: "input", 
        name: "name_manager", 
        message: "Please enter the team manager's name",         
    }, 
    {
        type: "input", 
        name: "id_manager", 
        message: "Please enter the team manager's ID",         
    }, 
    {
        type: "input", 
        name: "email_manager", 
        message: "Please enter the team manager's email address",         
    }, 
    {
        type: "input", 
        name: "number_manager", 
        message: " Please enter the team manager's office number.",         
    }, 

]

const menuQuestions = [
    { 
        type: "list", 
        menu: "team_member", 
        message: "Please select your additional team member.", 
        choices: ["Add an intern?", "Add an engineer?", "No additions"], 
    }
]

const internQuestions = [
    { 
        type: "input", 
        name: "name_intern", 
        message: "Please enter the intern's name.",
    },
    { 
        type: "input", 
        name: "id_intern", 
        message: "Please enter the intern's employee ID.",
    },
    { 
        type: "input", 
        name: "email_intern", 
        message: "Please enter the intern's email address.",
    }, 
    { 
        type: "input", 
        name: "school_intern", 
        message: "Please enter the intern's school name.",
    },

]

const engineerQuestions = [
    { 
        type: "input", 
        name: "name_engineer", 
        message: "Please enter the engineer's name.",
    },
    { 
        type: "input", 
        name: "id_engineer", 
        message: "Please enter the engineer's employee ID.",
    },
    { 
        type: "input", 
        name: "email_engineer", 
        message: "Please enter the engineer's email address.",
    }, 
    { 
        type: "input", 
        name: "gitHub_engineer", 
        message: "Please enter the engineer's Github username.",
    },

]

function init() { 
    inquirer.prompt(managerQuestions)
        .then((response) => { 
            const manager = new Manager( 
                response.name_manager, 
                response.id_manager, 
                response.email_manager, 
                response.number_manager,
                ); 
                employees.push(manager); 
                newMenu(); 
             }) 
}

init(); 

function newMenu() { 
    inquirer.prompt(menuQuestions)
        .then((response) => { 
            
        if(response.newMenu === "Add an engineer?"){ 
            inquirer.prompt(engineerQuestions)
            .then ((response) => { 
            const engineer = new Engineer( 
                response.name_engineer, 
                response.id_engineer, 
                response.email_engineer, 
                response.gitHub_engineer, 
            )
            employees.push(engineer); 
            newMenu(); 
        })  
     } 
        else if(response.newMenu === "Add an intern?"){
            inquirer.prompt(internQuestions)
            .then((response) => { 
                const inter = new Intern( 
                    response.name_intern, 
                    response.id_intern, 
                    response.email.intern, 
                    response.school.intern, 
                )
                employees.push(intern); 
                newMenu(); 
            })
    }
        else { 
            console.log(employees);
            fs.writeFile("./dist/index.html", employees, (err) => 
            err ? console.log(err) : console.log("Succesfully Added")); 

        }
    })
}
