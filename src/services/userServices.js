//export = dışarıdan export edilebileceği anlamına gelir.
//default = UserServicei import ettiğimde default olarak bu classı import et demek 
export default class UserService{
    constructor(loggerService){
        this.users = []
        this.loggerService = loggerService
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u=>u.id ===id)
    }
}



