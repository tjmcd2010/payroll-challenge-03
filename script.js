// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data.  
// TODO: Get user input to create and return an array of employee objects
 //Uitilized details from this link for the isNAN function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 //Followed the stesp taken in the rock, paper, scissors exercise for to start the initial loop

let enterMoreData = true

const collectEmployees = function name() {
  let employees = []
  while (enterMoreData) {
    let firstName = prompt("Enter first name")
    let lastName = prompt("Enter last name")
    let salary = Number(prompt("Enter salary"))
    if (isNaN(salary)) {
      salary = Number(prompt("Salary must be a number. Please re-enter salary"))
      if (isNaN(salary)) {
        salary = Number(prompt("Enter salary"))
        if (isNaN(salary)) {
          salary = Number(prompt("Enter salary"))
        }
      }
    }
     
      
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }
    employees.push(employee)
    let moreData = confirm("You're finished! Do you want to add more employees?")
    if (!moreData) {
      enterMoreData = false
    }
  }
  return employees
  
  }


// Display the average salary.  // TODO: Calculate and display the average salary}
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary
  }
  let averageSalary = totalSalary / employeesArray.length
  
  //"The average employee salaray between our x employees is average"
console.log("The average employee salary between our " + employeesArray.length + " employees is " + averageSalary.toLocaleString("en-US", {
  style: "currency",
  currency: "USD"
})) }
  

// Select a random employee.  // TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
  let RandomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]
  console.log("Congratulations to " + RandomEmployee.firstName + " " + RandomEmployee.lastName + ", our lucky drawing winner!");
  //for (let i = 0; i < employeesArray.length; i++) {
   // console.log(employeesArray[i])}
  
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
