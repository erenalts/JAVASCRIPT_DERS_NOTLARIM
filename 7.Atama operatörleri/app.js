 /**
  *     Atama operatörleri
  * =   ----- eşitliğin sağını soluna atar
  * ==  ----- işaretin sağındaki ve solundaki değerlerin eşit olup olmadığını gösterir
  * === ----- Hem değerlerin hemde veri tiplerinin eşit olup olmadığını kontrol eder
  * +=  ----- Var olan sayıya sayıya ekleme operatörü
  * -= ----- Var olan sayıdan sayı çıkarma operatörü
  * *=
  * /=
  * %=
  * **=
  * =
  */

 // =
 let a = 5; 

 // ==
 console.log( 5 == 5 ) // Veri tiplerinin bir önemi yoktur
 console.log( 5 == "5" ) // iki satırda true döner

 // ===
 console.log( 5 === 5 ) // true döner
 console.log( 5 === "5" ) // false döner

 // +=
 let sayi = 4;
 sayi +=2; // sayı değişkenine yani 4'e 2 sayısını ekler

 // -=
 let sayi1 = 5;
 sayi1 -= 2; // sayi1 değişkeninden yani 5 den 2 çıkartır

 // *=
 let sayi2 = 5;
 sayi2 *= 4; // Sayi2 değerini 4 ile çarpar

 // =/
 let sayi3 = 6;
sayi3 /= 2; //Sayi3 değişkenini 3'e böler

// %=
let sayi4 = 5;
sayi4 %= 2; //Dersek sayı4 değişkeninin 2 ye göre modunu alır

// **=
let sayi5 = 5;
sayi5 **= 2; //Bu işelmede üs alma işlemidir