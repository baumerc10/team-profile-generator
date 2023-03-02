
    const generateManager = (manager) => {
        return `
    <div class="card employee-card col-4 mt-4">
        <div class="card-header bg-primary text-white">
            <h2>${manager.getName()}</h2>
            <h3>Manager</h3>
        </div>
        <div class="card-body">
            <ul>
                <li class="id">ID: ${manager.getId()}</li>
                <li class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="office-number">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
                `;
    };

    const generateEngineer = (engineer) => {
        return `
    <div class="card employee-card col-4 mt-4">
        <div class="card-header bg-primary text-white">
            <h2>${engineer.getName()}</h2>
            <h3>Engineer</h3>
        </div>
        <div class="card-body">
            <ul>
                <li class="id">ID: ${engineer.getId()}</li>
                <li class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="github">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
                `;
    };

    const generateIntern = (intern) => {
        return `
    <div class="card employee-card col-4 mt-4">
        <div class="card-header bg-primary text-white">
            <h2>${intern.getName()}</h2>
            <h3>Intern</h3>
        </div>
        <div class="card-body">
            <ul>
                <li class="id">ID: ${intern.getId()}</li>
                <li class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="school">School: ${intern.getSchool()}</li>
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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        </html>
        `;
    };

    module.exports = generateHTML;