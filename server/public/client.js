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
        }
        $('#viewCosts').empty();
        $('#viewCosts').append(`Monthly Total: 
        ${'$' + employees[employees.length - 1].monthlyTotal.toFixed()}`);
        if (employees[employees.length - 1].monthlyTotal > 20000) {
            $('#viewCosts').css('background-color', 'red');
        }
    }) 
}

function addEmployee() {
    let employee = {
        firstName: $('#firstInput').val(),
        lastName: $('#lastInput').val(),
        employeeID: $('#idInput').val(),
        jobTitle: $('#titleInput').val(),
        annualSalary: $('#salaryInput').val()
    }
    $.ajax({
        method: 'POST',
        url: '/employee-list',
        data: employee
    }).then(function(response){
        getList();
    })
}

//removes a line item from the DOM.
function removeRow() {
    console.log($(this).parent());
    
    $(this).parent().remove();
}