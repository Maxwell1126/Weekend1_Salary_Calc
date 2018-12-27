$(document).ready(function () {
    $('#submit').on('click', addEmployee)
    $('body').on('click', '.delete', removeRow)
});

function getList() {
    $.ajax({
        method: 'GET',
        url: '/employee-list'
    }).then(function(response){
        let employees = response;
        let employeeInfo = $('#employeeList');
        employeeInfo.empty();
        for (employee of employees) {
            employeeInfo.append(`<li> ${employee.firstName} ${employee.lastName}
        ${employee.employeeID} ${employee.jobTitle} ${'$' + employee.annualSalary}
        <button class="delete">X</li>`)
            monthlyCosts();
        }
    }) 
}
// sends input info to newEmployee function. Validates that fields are filled.
//empties input fields once click happens.
function addEmployee() {
    let employee = {
        firstInput: $('#firstInput').val(),
        lastInput: $('#lastInput').val(),
        idInput: $('#idInput').val(),
        titleInput: $('#titleInput').val(),
        salaryInput: $('#salaryInput').val()
    }
    $.ajax({
        method: 'POST',
        url: '/employee-list',
        data: employee
    }).then(function(response){
        getList();
    })
    // let validationStatus = $('#validationDiv');
    // validationStatus.empty();
    // if ($('#firstInput').val() != '' && $('#lastInput').val() != '' &&
    //     $('#idInput').val() != '' && $('#titleInput').val() != '' &&
    //     $('#salaryInput').val() != '') {
    //     newEmployee(firstInput, lastInput, idInput, titleInput, salaryInput)
    // }
    // else {
    //     validationStatus.append('*All fields must be filled.*');
    // }
    // $('input').val('');
}
// creates new employee objects and pushes to array.
// calls addToList function.

//appends indexes of the array to an unordered list with a delete button.
//calls monthlyCost function.

//removes a line item from the DOM.
function removeRow() {
    console.log($(this).parent());
    
    $(this).parent().remove();
}