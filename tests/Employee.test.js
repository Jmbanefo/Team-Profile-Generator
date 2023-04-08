const { default: test } = require("node:test");
const { describe } = require("yargs");
// DID NOT ADD THE TWO LINES ABOVE 
const Employee = require("../lib/Employee"); 

//this is diff 
const employee = new Employee ("Justin", 0306, "mbanefojustin@gmail.com")

describe("Employee", () => { 
    test("new employee", () => { 
        expect(employee.getName().toEqual("Justin")); 
    })
    test("new employee id", () => { 
        expect(employee.getId().toEqual(0306))
    })
    test("new employee email", () => { 
        expect(employee.getEmail().toEqual("mbanefojustin@gmail.com"))
    })
    test("new employee role", () => { 
        expect(employee.getRole().toEqual("Employee"))
    })
})

