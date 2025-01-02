

// 1 den 10 a kadar olan sayıların yazımı
for(let i=0; i<=10; i++){
    console.log(i);
}

//  1 den 10 a kadar olan çift sayıların yazımı
 for(let i=0; i<=10; i+=2){
    console.log(i);
 }

//  1 den 10 a kadar olan tek sayıların yazımı
 for(let i=0; i<=10; i+=3){
     console.log(i);
 }

let toplam = 0;
for(let i = 50; i>=1; i--){
    toplam += i;
    console.log(i);
}
console.log("Toplam :" + toplam);