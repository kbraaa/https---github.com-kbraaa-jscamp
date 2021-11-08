 //Klasik Function
function addToCard(productName,quantity = 0) {
    console.log("Sepete eklendi " ,  "ürün:" + productName  + "adet" + quantity)
 }

 addToCard("armut");

//Arrow Function
 let sayHello = () => {
     console.log("hello word")
 }

 sayHello()

 function addToCart2(product, quantity, uniyPrice) { }

 addToCart2("elma",5,10)
 addToCart2("armut",3,15)


//OBJE MANTIĞI 
 let product1 = {productName : "Elma", uniyPrice:10, quantity:5}

 function addToCart3(product) {
     console.log("Ürün : " + product.productName)
     console.log("Adet : " + product.quantity)
     console.log("Fiyat : " + product.uniyPrice)
 }

 addToCart3(product1)

 let product2 = {productName : "Elma", uniyPrice:10, quantity:5}  //OBJE
 let product3 = {productName : "Elma", uniyPrice:10, quantity:5}  //OBJE

 product2 = product3
 product2.productName = "KARPUZ"

 console.log(product3.productName) ////KARPUZ ÇIKAR

 let sayi1 = 10
 let sayi2 = 20
 sayi1 = sayi2
 sayi2 = 100
 console.log(sayi1)  //20 çıkar



 function addToCart4(x) {
     console.log(produ)
 }


 let products = [
     {productName : "Elma", uniyPrice:10, quantity:5},
     {productName : "Armut", uniyPrice:10, quantity:5},
     {productName : "Karpuz", uniyPrice:10, quantity:5}
 ]

 addToCart4(products)



// ------- REST OPERATÖRÜ ---------
//dizide verilen sayıların toplamı 
function add(...numbers) {  //rest 
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}


add(20,30,40)

let numbers = [30,10,500,600,120]
//console.log(..numbers)  -- {30 10 500 600 120} sonucunu verir
console.log(Math.max(...numbers))


//-------DESTRUCTİNG
let [icanadolu,marmara,karadeniz,[icAnadoluSehirleri] ]= [
    {name: "iç Anadolu" , population: "20M"},
    {name: "marmara" , population: "15M"},
    {name: "karadebiz" , population: "30M"},
    [
        ["ankara","konya"],
        ["istanbul","burda"],
        ["sinop","trabzon"]
    ]

]
 
console.log(icanadolu.population)
console.log(icAnadoluSehirleri)


let newProductName, newUniyPrice, newQuantity
({productName:newProductName, uniyPrice:newUniyPrice, quantity:newQuantity} 
= {productName:"Karpuz", uniyPrice:10, quantity:5})

console.log(newProductName)
