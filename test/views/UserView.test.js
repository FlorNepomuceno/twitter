const UserView = require('./../../app/views/UserView')

describe("Tests de UserViews", () => {

    test("Devolver un error cuando se intenta crear un nuevo usuario con un payload null", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })
    test("Validar si payload contenga (username, name, id) un valor null y si hay regrese Error: necesitan tener un valor válido", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })
    test("Regresar un error al objeto cuando intente crear un nuevo usuario con payload sin propiedades", () =>{
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })
    test("Create a user by a given valid payload", () =>{
        const payload = {username: "Username", name: "name", id: 1}
        const result = UserView.createUser(payload)
        expect(result.id).toBe(5)
        expect(result.name).toBe("name")
        expect(result.username).toBe("Username")
        
    })
})