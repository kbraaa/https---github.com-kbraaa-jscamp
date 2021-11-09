let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:3, unitPrice:150}
]

//--------------MAP----------
//map() => arrayi tek tek dolaşmayı sağlıyor.
//cart.map(product => console.log(product.productName) ) //sepetimizi tek tek dolaşmaya yarıyor 
//product =>  == herbir product için

/*
//birden fazla satır kullanırsak //ürünlerin fiyatını adetiyle çarpma
console.log("<ul>")
cart.map(product => {
    console.log( "<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")
*/




//------------FILTER-------------
//filterı genelllikle array oluşturmak için kullanırız
//sepette 2den fazla aldığımız ürünler
/*
let quantitiyOver2 = cart.filter(product => product.quantity>2)
console.log(quantitiyOver2)
*/





//------------REDUCE-------------
let total = cart.reduce((acc,product) => acc + product.unitPrice * product.quantity,0)

console.log(total)  // *12820
//0 : acc'yi bağlattığımız değer




//referans tipte belleğin adresi 
/*
//sepete ürün ekleme  //101'e ilere
function addToCart(sepet) {
       sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)
console.log(cart)


// +1 consola eklemez //değer tip bu

let sayi = 10
sdd

function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)
console.log(sayi)
*/


//
//Not: SPA (tek sayfa uygulamalar)=> Angular, react vue ile geliştirilen uygulamalara denir.
