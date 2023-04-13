const Intern = require("../lib/Intern"); 


const newIntern = new Intern ("Jason", "0423", "jason@gmail.com", "UofM", "intern")

describe("Inter", () => { 
    test("test intern name", () => { 
        expect(newIntern.getName()).toEqual("Jason"); 
    })
    test("test intern ID", () => { 
        expect(newIntern.getId()).toEqual("0423"); 
    })
    test("test intern email", () => { 
        expect(newIntern.getEmail()).toEqual("jason@gmail.com"); 
    })
    test("test intern school", () => { 
        expect(newIntern.getSchool()).toEqual("UofM"); 
    })
    test("test intern role", () => { 
        expect(newIntern.getRole()).toEqual("Intern"); 
    })
})
