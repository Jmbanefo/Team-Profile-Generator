const Employee = require("../lib/Employee");

// let managers = []; 
// let engineers = []; 
// let interns = [];

function newManager (manager){ 
    return `<div class="cards"> 
    <h2 class="card-title">${manager.name}</h2>
    <h3>${manager.getRole()}</h3>
    <ul class="list-group">
        <li class="item">ID: ${manager.id}</li>
        <li class="item">Email: ${manager.email}</li>
        <li class="item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>`
}

function newEngineer (engineer){ 
    return `<div class="cards"> 
    <h2 class="card-title">${engineer.name}</h2>
    <h3>${engineer.getRole()}</h3>
    <ul class="list-group">
        <li class="item">ID: ${engineer.id}</li>
        <li class="item">Email: ${engineer.email}</li>
        <li class="item">Office number: ${engineer.getGitHub()}</li>
    </ul>
</div>`
}
function newIntern (intern){ 
    return `<div class="cards"> 
    <h2 class="card-title">${intern.name}</h2>
    <h3>${intern.getRole()}</h3>
    <ul class="list-group">
        <li class="item">ID: ${intern.id}</li>
        <li class="item">Email: ${intern.email}</li>
        <li class="item">Office number: ${intern.getSchool()}</li>
    </ul>
</div>`
}

function cardsData (data) { 
    let totalEmployees = []; 

    for (let i = 0; i < data.length; i++) {
        
        let thisEmployee = data[i]
        let thisRole = thisEmployee.getRole(); 

        if(thisRole == "Manager")
        { 
            let managers = newManager(thisEmployee); 
            totalEmployees.push(managers)
        }
        if(thisRole == "Engineer")
        { 
            let engineers = newEngineer(thisEmployee); 
            totalEmployees.push(engineers)
        }
        if(thisRole == "Intern")
        { 
            let interns = newIntern(thisEmployee); 
            totalEmployees.push(interns)
        }
    }
    const team = totalEmployees.join(""); 
    const generateTeampage = generateTeam(team); 

    return generateTeampage; 

}
//Final Additions go send to HTML 
function generateTeam(team) { 

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Profile</title>
</head>

<body> 
<h1>Welcome to my team!</h1>
</body>

<main>
${team}
</main>

</html>`

}











module.exports = cardsData; 