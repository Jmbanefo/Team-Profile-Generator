const Employee = require("../lib/Employee"); 


const employee = new Employee ("Justin", "0306", "mbanefojustin@gmail.com")

describe("Employee", () => { 
    test("test employee name ", () => { 
        expect(employee.getName()).toEqual("Justin"); 
    })
    test("test employee ID", () => { 
        expect(employee.getId()).toEqual("0306")
    })
    test("test employee email", () => { 
        expect(employee.getEmail()).toEqual("mbanefojustin@gmail.com")
    })
    test("test employee role", () => { 
        expect(employee.getRole()).toEqual("Employee")
    })
})

