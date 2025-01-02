/*
1- Türkçe 40
2- Matematik 40
3- Sosyal bilimler
4- Matematik

100 puan ösym tarafınfan veriliyor
*/

let turkceDogru , turkceYanlis =0;
let matDogru    , mateYanlis =0;
let sosyalDogru , sosyalYanlis =0;
let fenDogru    , fenYanlis =0;

let ys = "\r\n";

let tercih = Number(prompt("Yapmak istediğinizi işlemi seçiniz" + ys + "1-TYT Puanı hesapla" + ys + "2-Sistemden çıkış yap"));
 switch(tercih){
    case 1:
        let okulPN= Number(prompt("Okul puanınızı giriniz"))
        let turkceDogru = Number(prompt("Türkçe doğru sayınız giriniz"));
        let turkceYanlis = Number(prompt("Türkçe yanlış sayınız giriniz"));
        (turkceDogru * 4) + (turkceYanlis * 4);
    
        let sosyalDogru = Number(prompt("sosyal doğru sayınız giriniz"));
        let sosyalYanlis = Number(prompt("sosyal yanlış sayınız giriniz"));
    
        let matDogru = Number(prompt("Matematik doğru sayınız giriniz"));
        let matYanlis = Number(prompt("Matematik yanlış sayınız giriniz"));
    
        let fenDogru = Number(prompt("fen doğru sayınız giriniz"));
        let fenYanlis = Number(prompt("fen yanlış sayınız giriniz"));

        let dogruSayisi = turkceDogru + sosyalDogru + matDogru + fenDogru;
        let yanlisSayisi = turkceYanlis + sosyalYanlis + matYanlis + fenYanlis;
        let kalanDS = dogruSayisi - (yanlisSayisi/4);
        puan = (kalanDS*4) + 100 + okulPN;
        alert("TYT puanınız " + puan);
        break;

    case 2:
        console.log("Sistemden çıkış yapılıyor");
        break;

        default:("Geçerli bir seçim yapınız");

        



 }
