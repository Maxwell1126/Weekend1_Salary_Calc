$(document).ready(function () {
    $('#submit').on('click', addEmployee)
    $('#employeeList').on('click', '.delete', removeRow)
});

class Employee {
    constructor(firstName, lastName, employeeID, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeID = employeeID;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    } //end constructor
}

let employeeArray = [];
let monthlyCost = 0;

function addEmployee() {
    let firstInput = $('#firstInput').val();
    let lastInput = $('#lastInput').val();
    let idInput = $('#idInput').val();
    let titleInput = $('#titleInput').val();
    let salaryInput = $('#salaryInput').val();
    newEmployee(firstInput, lastInput, idInput, titleInput, salaryInput);
    $('#firstInput').val('');
    $('#lastInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
}

function newEmployee(firstName, lastName, employeeID, jobTitle, annualSalary) {
    employeeArray.push(new Employee(firstName, lastName, employeeID,
        jobTitle, annualSalary));
    addToList();
}

function addToList() {
    let employeeInfo = $('#employeeList');
    employeeInfo.empty();
    for (employee of employeeArray) {
        employeeInfo.append('<li>' + employee.firstName +
            ' ' + employee.lastName + ' ' + employee.employeeID +
            ' ' + employee.jobTitle + ' ' + employee.annualSalary
            + '<button class="delete">X</li>')
        monthlyCosts();
    }
}
function monthlyCosts() {
    for (employee of employeeArray) {    
        monthlyCost += monthlyCost + (employee.annualSalary / 12);
        console.log('Cost '+monthlyCost);
        console.log('year '+employee.annualSalary);
        console.log('Month '+employee.annualSalary/12);
        
        $('#viewCosts').empty();
        $('#viewCosts').append('Total Monthly: ' + (monthlyCost));
          //return monthlyCost;
    }  
}

function removeRow() {
    employeeArray.splice($(this).parent())
    $(this).parent().remove();
}

// function addTotal() {
//     $('#viewCosts').empty();
//     $('#viewCosts').append('Total Monthly: ' + (monthlyCost +
//         ($('#salaryInput').val() / 12)).toFixed());
// }