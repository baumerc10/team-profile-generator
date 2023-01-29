
    const generateManager = (manager) => {
        return `
    <div class="card employee">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
                `;
    };

    const generateEngineer = (engineer) => {
        return `
    <div class="card employee">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
                `;
    };

    const generateIntern = (intern) => {
        return `
    <div class="card employee">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
                `;
    };

    generateHTML = (data) => {
        html = [];

        for (let i =0; i < data.length; i++) {
            const employee = data[i];
            const role = employee.getRole();

            if (role === 'Manager') {
                const managerSection = generateManager(employee);
                html.push(managerSection);
            }
            if (role === 'Engineer') {
                const engineerSection = generateEngineer(employee);
                html.push(engineerSection);
            }
            if (role === 'Intern') {
                const internSection = generateIntern(employee);
                html.push(internSection);
            }
        }

        const employeeSection = html.join('');
        const generateTeam = generateTeamPage(employeeSection);
        return generateTeam;
    }

    const generateTeamPage = (employeeSection) => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <header>
                <nav class = "navbar" id="navbar">
                    <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
                </nav>
            </header>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="team-section">
                    ${employeeSection}
                </div>
            </main>
        </body>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        </html>
        `;
    };

    module.exports = generateHTML;