import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js"
import UserService from "../services/userServices.js"

console.log("User component yüklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1);

let user1 = new User(1,"engin","demiroğ","ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)


//console.log(userService.list())
//console.log(userService.getById(2))



let customer = {id:1, firstName:"engin"}
//prototyping

customer.lastName = "Demiroğ"

console.log(customer.lastName)

console.log("-------------------------")

userService.load()

let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","asdfghjkl")
customerToAdd 

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())