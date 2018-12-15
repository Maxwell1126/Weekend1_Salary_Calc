$(document).ready(function () {
    $('#submit').on('click', addEmployee)
    $('#employeeList').on('click', '.delete', removeRow)
});
let monthlyTotal = 0;
function addEmployee(){
    $('#employeeList').append('<li>' + 
    $('#firstInput').val() + ' ' +$('#lastInput').val() + ' ' +
    $('#idInput').val() + ' ' + $('#titleInput').val() + ' ' +
    $('#salaryInput').val() + '<button class="delete">X</li>');

    $('#viewCosts').empty();
    $('#viewCosts').append('Total Monthly: ' + (monthlyTotal + 
    ($('#salaryInput').val()/12)).toFixed());
    addTotal();

    $('#firstInput').val('');
    $('#lastInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
}

function addTotal(){
    monthlyTotal = monthlyTotal + ($('#salaryInput').val() / 12);  
}

function removeRow(){
    $(this).parent().remove();
    monthlyTotal = monthlyTotal - (this.$('#salaryInput').val()/12);
    $('#viewCosts').append('Total Monthly: ' + monthlyTotal);
}