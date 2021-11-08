
/* 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)*/

/*
//1. sorunun cevabı - yapmaya çalıştığım tam yapamadım 
function add(...dizi) {   
    for (let i = 0; i < dizi.length; i++) { 
       for (let j=1; j< dizi[i]; j++){
           if (dizi[i] % j === 0){ console.log("sayınız asal değil") }
           else{console.log("sayınız asaldır")}
       }
    }
}

add(12)



// 1. sorunun doğru yapılışı 
function asalMi(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        let asal = true;

        if (number > 2) {  
           for (let x = 2; x <= Math.sqrt(number) + 1; x++) {  //sayıyı bölmeye 2 den başlayacak ve sayıyının karekökünden küçük eşit olduğu sürece devam edecek
            if (number % x == 0) {  // sayı tam bölünüyorsa asal değildir
               asal = false;
               break;
            }  
        } 
        }else if (number < 2) {  // 2 den küçük sayılar asal değildir, 2 asal bir sayıdır
            asal = false;
        }
        
        if (asal) {
            console.log(number + " asal bir sayıdır")
        }
        else{
            console.log(number + " asal bir  sayı değildir")
        }
        
    }
}

asalMi(9, 10, 25, 13, 1, 0, -89, 100, 97,2)

*/ 

/* Parametre olarak girilen iki sayının arkadaş sayılar
 olup olmadığını bulan programı yazınız. */
//1. sorunun cevabı - doğru yaptım
/*
 let toplam1 =0;
 let toplam2 = 0;
 
 function friends(sayi1,sayi2){
    for (let i=0; i<sayi1;  i++){
      if (sayi1 % i == 0){toplam1 = toplam1 + i}
     }
     console.log(sayi1 + " sayının ardışık toplamı " + toplam1)
   
     for (let j=0; j<sayi2;  j++){ //şu kısımda biraz yardım aldım
      if (sayi2 % j == 0){toplam2 = toplam2 + j}
     }
     console.log(sayi2 + " sayının ardışık toplamı " + toplam2)

     if(sayi1 == toplam2  && sayi2 == toplam1){
        console.log(sayi1 + " ve " + sayi2 + " sayıları arkadaş sayılardır.")
    }
        else{
            console.log(sayi1 + " ve " + sayi2 + " sayıları arkadaş sayı değillerdir.")
        }
 }
 friends(284,220)



 //3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
 //benim yaptığım 
 for (let i=1; i < 1001; i++){
    let toplam = 0;
         for(let j=1; j<i; j++){
             if(i % j == 0){toplam=toplam+j}
         }
         if(toplam == i){
            console.log([i] +  " Mükemmel Sayıdır.")
         }
     }
}

// 3 - Sorunun cevabı alternatif cevap 
 console.log("---- 1000'e Kadar ki Mükemmel Sayılar----")
function perfectNumber(limit){
    for(let i=1; i< limit; i++){
        let sum= 0;
        for(let j=1; j < i; j++){
            if(i % j == 0){
                sum += j;
            }
        }
        if(sum == i){
            console.log([i] + "-->" + " Mükemmel Sayıdır.")
        }
    }
}
perfectNumber(1000)

*/

/* 4-) 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.  
- Bunu pek yapamadım o yüzden doğrusunu direkt aldım - asal sayılarla ilgili algoritmalarda temel eksikliğim var*/

console.log("---- 1000'e Kadar Olan Tüm Asal Sayılar ----")
function primeNumbers(limit) {
    for (let i = 2; i<= limit; i++) {
        let isPrime = true;
        if (i == 2) {
            console.log(`${i} Asal Sayıdır.`)
            continue
        }
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            console.log(`${i} Asal Sayıdır.`)
        }
    }
}
primeNumbers(1000)