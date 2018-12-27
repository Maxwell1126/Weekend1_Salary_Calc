const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('server/public'));
app.listen(PORT, () => {
    console.log('listening on: ', PORT);   
});
let employeeArray = [];

class Employee {
    constructor(firstName, lastName, employeeID, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeID = employeeID;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    } //end constructor
}

function newEmployee(firstName, lastName, employeeID, jobTitle, annualSalary) {
    employeeArray.push(new Employee(firstName, lastName, employeeID,
        jobTitle, annualSalary));
    addToList();
}

//calculates monthly total of all indexes in the array.
function monthlyCosts() {
    let monthlyTotal = 0;
    for (employee of employeeArray) {
        monthlyTotal += (employee.annualSalary / 12)
        $('#viewCosts').empty();
        $('#viewCosts').append('Monthly Total: $' + monthlyTotal.toFixed());
        if (monthlyTotal > 20000) {
            $('#viewCosts').css('background-color', 'red');
        }
    }
}