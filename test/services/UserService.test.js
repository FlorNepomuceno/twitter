const User = require('../../app/models/user')
const UserService = require('./../../app/services/UserService')

describe("Test de UserService", () => {
    test("1. Creación de un nuevo User usando UserService", () => {
        const user = UserService.create(1, "FlorNepomuceno", "Flor")
        expect(user.username).toBe("FlorNepomuceno")
        expect(user.name).toBe("Flor")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Obtener todos los datos del usuario en una lista", () => {
        const user = UserService.create(1, "FlorNepomuceno", "Flor")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("FlorNepomuceno")
        expect(userInfoInList[2]).toBe("Flor")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
    test("3. Actualizar Username", () => {
        const user = UserService.create(1,"FlorNepomuceno", "Flor")
        UserService.updateUserUsername(user, "FleurNk")
        expect(user.username).toBe("FleurNk")
    })
    
    
})