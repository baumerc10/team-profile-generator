class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // get employee name from input
    getName () {
        return this.name;
    }

    // get employee ID from input
    getId () {
        return this.id;
    }   

    // get employee email from input
    getEmail () {
        return this.email;
    }

    // get employee type 
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 