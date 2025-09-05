const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java'},
    //...More employees records can be added here 
]

//Function to display all employees, map command maps all elements of each individual employee
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeeDetails').innerHTML = totalEmployees;
    }

// In this function we are using the reduce command which accumalates all the same element in the array, in this case all the salaries made by each employee is added together    
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// In this function we are using the filter command which filters down the array to the exact element that you are looking for 
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department =='HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay;
}

// In this fucnction we are using the find command which looks for a value that matches the given value
function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee){
        document.getElementById('employeeDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this ID'
    }
}

function findbyspecialty(){
    const jsemployee = employees.filter(employee => employee.specialization == 'JavaScript');
    const showjs = jsemployee.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`);
    document.getElementById('employeeDetails').innerHTML = showjs;
}