const { ENUMBODY_TYPES } = require("@babel/types");
const { default: test } = require("node:test");
const { describe } = require("yargs");
// DID NOT ADD THE TWO LINES ABOVE 
const Engineer = require("../lib/Engineer"); 

const newEngineer = new Engineer ("Jay", 0903, "jay@gmail.com", "jay001", "engineer")

describe("Engineer", () => { 
    test("test engineer name", () => { 
        expect(newEngineer.getName()).toEqual("Jay"); 
    })
    test("test engineer ID"), () => { 
        expect(newEngineer).getId().toEqual(0903);
    }
    test("test engineer email"), () => { 
        expect(newEngineer).getEmail.toEqual("jay@gmail.com")
    }
    test("test engineer gitHub"), () => { 
        expect(newEngineer).getHub.toEqual("jay001")
    }
    test("test engineer role"), () => { 
        expect(newEngineer).getRole.toEqual("engineer")
    }
})