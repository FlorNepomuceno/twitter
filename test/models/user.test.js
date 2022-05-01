const User = require('./../../app/models/user')

describe("Tests para User", () =>{
    test("Creación de User", () =>{
        const user = new User(1, "FlorNepomuceno", "Flor", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1)
        expect(user.username).toBe("FlorNepomuceno")
    })
})