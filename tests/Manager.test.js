const Manager = require("../lib/Manager"); 


const newManager = new Manager ("Jackson", 1234, "jackson@gmail.com", 8675309, "manager")

describe("Manager", () => { 
    test("test manager name", () => { 
        expect(newManager.getName()).toEqual("Jackson"); 
    })
    test("test manager ID", () => { 
        expect(newManager.getId()).toEqual(1234); 
    })
    test("test manager email", () => { 
        expect(newManager.getEmail()).toEqual("jackson@gmail.com"); 
    })
    test("test manager office number", () => { 
        expect(newManager.getOfficeNumber()).toEqual(8675309); 
    })
    test("test manager role", () => { 
        expect(newManager.getRole()).toEqual("manager"); 
    })
    
})