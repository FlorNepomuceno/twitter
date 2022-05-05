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

})