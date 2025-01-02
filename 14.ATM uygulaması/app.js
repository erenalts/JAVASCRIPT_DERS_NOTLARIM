/*
 1- Bakiye görüntüleme
 2- Para çekme
 3- Para yatırma
 4- Sistemden çıkış işlemlerini gerçekleştiren atm uygulaması
*/ys = "\r\n";
let bakiye = null;


let metin = "1-Bakiye Görüntüleme" + ys
+ "2-Para çekme" + ys
+ "3-Para yatırma" + ys
+ "4-Çıkış yap" + ys
+ "Yapmak istediğiniz işlemi seçiniz";

//alert(metin);

let secim = Number(prompt(metin));


switch(secim){
    case  1:
        console.log("Bakiyeniz: " + bakiye);
        break;
    case 2:
        let CekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz: "));
        if(CekilecekTutar<bakiye){
            bakiye -= CekilecekTutar;
            console.log("Çekilen tutar " + CekilecekTutar);
            console.log("Kalan bakiyeniz " + bakiye);
        } else {
            console.log("İşleminiz başarısız " + bakiye);
        }
        break;
    case 3:
        let YatirilacakTutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz: "));
        bakiye += YatirilacakTutar;
        console.log("Hesabınıza yatırdığınız tutar " + YatirilacakTutar);
        console.log("Bakiyenizin son durumu " + bakiye);
        break;
    case 4:
        console.log("Sistemden çıkış yapılmıştır");
        break;

    default: console.log("Lütfen 1 ile 4 arasında bir sayı girinzi");
    break
    

}