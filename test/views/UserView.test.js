const UserView = require('./../../app/views/UserView')

describe("Tests de UserViews", () => {

    test("Devolver un error cuando se intenta crear un nuevo usuario con un payload null", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

})