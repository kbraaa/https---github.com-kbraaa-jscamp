import UserService from "../services/userServices.js"

console.log("User component yüklendi")


let userService = new UserService


userService.add()
userService.getById(1)

////////burda kaldık 