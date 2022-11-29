// Write your solution in this file!
//created an employee named Albert
const employee = {
    name: "Albert",
    streetAddress: "Arusha",
  };

//created best employee
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const bestEmployee = { ...employee };
    bestEmployee[key] = value;
    return bestEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }