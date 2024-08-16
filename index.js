// Write your solution in this file!
const employee = {
    name: "Susan",
    streetAddress: "123 Easy Street"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    let clonedEmployee = { ...employee };
    delete clonedEmployee[key];
    return clonedEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let newEmployee = {};
    for (let prop in employee) {
      if (prop !== key) {
        newEmployee[prop] = employee[prop];
      }
      delete employee[key];
      return employee;
    }
    return newEmployee;}
