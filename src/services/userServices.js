//export = dışarıdan export edilebileceği anlamına gelir.
//default = UserServicei import ettiğimde default olarak bu classı import et demek 
export default class UserService{

    add(){
        console.log("kullanıcı eklendi")
    }

    list(){
        console.log("kullanıcı listelendi")
    }

    getById(){
        console.log("kullanıcı detayı getirildi")
    }
}



