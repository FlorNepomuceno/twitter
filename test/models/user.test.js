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

    test("Requerimiento 3: Agregando getters", () => {
        const user = new User(1, "FlorNepomuceno", "Flor", "Bio")
        expect(user.getUsername).toBe("FlorNepomuceno")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test("Requerimiento 4: Agregando setters", () => {
        const user = new User(1, "FlorNepomuceno", "Flor", "Bio")
        user.setUsername = "FlorNepomuceno"
        expect(user.username).toBe("FlorNepomuceno")
    })
})