// import inquirer
const inquirer = require('inquirer')
// import options that the user can choose from 
const options = require("../constants");
// import functions from handlers
const {handleViewDepartments, handleViewRoles, handleViewEmployees, handleAddDepartment, handleAddRole, handleAddEmployee} = require("../handlers")

const prompt = async() => {
    const {input} = await inquirer.prompt([
        {
            type: "list",
            name: "input",
            message: "What would you like to do?",
            choices: options
        }
    ]); 
    switch(input) {
        case "View all departments": {
            const result = await handleViewDepartments()
            console.table(result)
            return prompt()
        }
        case "View all roles": {
            const result = await handleViewRoles()
            console.table(result)
            return prompt()
        }
        case "View all employees": {
            const result = await handleViewEmployees()
            console.table(result)
            return prompt()
        }
        case "Add a department": {
            try {
                await handleAddDepartment()
                console.log(`Successfully added a Department.`)
            } catch (error){
                console.error(`There was an error adding a Department, please try again.`)
            }
            finally {
                return prompt()
            }
        }
        case "Add a role": {
            try {
                await handleAddRole()
                console.log(`Successfully added a new Role.`)
            } catch (error){
                console.error(`There was an error adding a new Role, please try again.`)
            }
            finally {
                return prompt()
            }
        }
        case "Add an employee": {
            try {
                await handleAddEmployee()
                console.log(`Successfully added a new Employee.`)
            } catch (error){
                console.error(`There was an error adding a new Employee, please try again.`)
            }
            finally {
                return prompt()
            }
        }
        case "Exit": {
            process.exit()
        }
    }
}

module.exports = prompt