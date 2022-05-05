const User = require('./../services/UserService')

class UserView {
    static createUser(payload){
        if(payload === null){
            console.log("Error es null")
            return {error: "payload no existe"}
        }
    }
}

module.exports = UserView 