/**
 * vize1 %30
 * vize2 %30
 * final %40
 *  
 *  Kullanıcın girdiği notlardan kullanıcının ne 
 *  
 */

let vize1 = Number(prompt("1.vize notunuzu girin")); // kullanıcının not girmesini sağladım
let vize2 = Number(prompt("2.vize notunuzu girin"));
let final = Number(prompt("final notunuzu girin"));

let sonuc = (vize1 * 0.3) + (vize2 * 0.3) * (final * 0.4); //kullanıcının girdiği notların hesaplamasını yaptırdım

if(sonuc >= 60){ // hesaplanan notun sonucuna göre ekrana yazı yazdırttım 
    alert("Dersten geçtiniz ortalamanız", sonuc);
} else {
    alert("Dersten kaldınız ortalamanız", sonuc);
}