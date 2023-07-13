const inquirer = require("inquirer")
const db = require("../config/connection")
const {GET_ALL_DEPARTMENTS, GET_ALL_ROLES, GET_ALL_EMPLOYEES, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, GET_ALL_MANAGERS} = require("../queries")

// view Departments, 
const handleViewDepartments = async () => {
   const data = await db.promise().query(GET_ALL_DEPARTMENTS)
   const [result] = data
   return result
}
// view Roles,
const handleViewRoles = async () => {
    const data = await db.promise().query(GET_ALL_ROLES)
    const [result] = data
    return result
}
// view Employees,
const handleViewEmployees = async () => {
    const data = await db.promise().query(GET_ALL_EMPLOYEES)
    const [result] = data
    return result
}

// add Departments
const handleAddDepartment = async () => {
    const {department} = await inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "What is the department name?"
        }
    ])
    const departmentTableObj = { name: department}

    await db.promise().query(ADD_DEPARTMENT, departmentTableObj)
    return department
}
// add Roles,
const handleAddRole = async () => {
    const departments = await db.promise().query(GET_ALL_DEPARTMENTS)
    const departmentArray = departments[0].map(department => ({ name: department.name, value: department.id }))
    const { title, salary, department_id } = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of this role?"
        },
        {
            type: "number",
            name: "salary",
            message: "What is the salary for this role?"
        },
        {
            type: "list",
            name: "department_id",
            message: "Which department does this role belong to?",
            choices: departmentArray
        }
    ]);
    const [result] = await db.promise().query(ADD_ROLE, [title, salary, department_id]);
    return result
}
// add Employees
const handleAddEmployee = async () => {
    const roles = await db.promise().query(GET_ALL_ROLES);
    const roleArray = roles[0].map(role => ({ name: role.job_title, value: role.role_id }));
    const managers = await db.promise().query(GET_ALL_MANAGERS);
    const managerArray = managers[0].map(manager => ({ 
        name: `${manager.first_name} ${manager.last_name}`,
        value: manager.id 
        }));
  
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "role_id",
        message: "What is this employee's title?",
        choices: roleArray,
      },
      {
        type: "list",
        name: "manager_id",
        message: "Who does this employee report to?",
        choices: managerArray,
      },
    ]);
  
    const [result] = await db.promise().query(ADD_EMPLOYEE, [first_name, last_name, role_id, manager_id]);
    return result
  };

module.exports = {handleViewDepartments, handleViewRoles, handleViewEmployees, handleAddDepartment, handleAddRole, handleAddEmployee}