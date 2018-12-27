const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
app.use(express.static('server/public'));
app.listen(PORT, () => {
    console.log('listening on: ', PORT);   
});
let employeeArray = [];
let totalArray = [];

app.get('/employee-list', (req,res) =>{
    res.send(employeeArray);
});

app.post('/employee-list', (req,res) =>{
    employee = req.body;
    employee.employeeID = parseFloat(employee.employeeID);
    employee.annualSalary = parseFloat(employee.annualSalary);
    totalArray.push(employee.annualSalary); 
    let monthlyTotal = 0;
    for (salary of totalArray) {
        monthlyTotal += (salary / 12)
    }
    employee.monthlyTotal = monthlyTotal;
    employee.monthlyTotal = parseFloat(employee.monthlyTotal)
    employeeArray.push(employee);
    res.sendStatus(201);
});