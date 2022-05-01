const User = require('./../../app/models/user')

describe("Tests para User", () =>{
    test("Requerimiento 1: Creación de User", () =>{
        const user = new User(1, "FlorNepomuceno", "Flor", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("FlorNepomuceno")
        expect(user.name).toBe("Flor")
        expect(user.bio).toBe("Bio")
    })

    test("Requerimento 2: Fechas en atributos de User",() => {
        const user = new User(1, "FlorNepomuceno", "Flor", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})