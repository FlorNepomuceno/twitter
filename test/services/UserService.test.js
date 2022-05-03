const UserService = require('./../../app/services/UserService')

describe("Test de UserService", () => {
    test("1. Creación de un nuevo User usando UserService", () => {
        const user = UserService.create(1, "FlorNepomuceno", "Flor")
        expect(user.username).toBe("FlorNepomuceno")
        expect(user.name).toBe("Flor")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})