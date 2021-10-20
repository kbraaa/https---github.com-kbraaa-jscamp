console.log("merhaba dünya")

let dolarBugun = 9.30
//JS type safe (tip güvenlikli) değildir. 
let dolarDun = 9.20
dolarDun
{
   let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11   //*Hatalı 

console.log(euroDun)

//array //camelCasing  //PascalCasing  
let konutKredileri =  [21, "Emlak Konut Kredisi", ["a","b", "c"],"özel konut"]

console.log("<ul>")
for (let i = 0; i<konutKredileri.length; i++) {
  console.log("<li>" +konutKredileri[i] + "</li>")  
}

console.log("</ul>")