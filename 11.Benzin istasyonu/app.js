/**
 * 
 *  dizel  : 24.53
 *  Benzin : 22.25
 *  Lpg    : 11.1
 * 
 * 
 */

let dizel = 24.53, 
benzin = 22.25,
lpg = 11.1;

const yeniSatir = "\r\n";
const yakitMetni = "1-Dizel" + yeniSatir
+"2-Benzin"+yeniSatir
+"3-Lpg"+yeniSatir
+"Yakıt türünüzü seçin";
         

let yakitTipi = prompt(yakitMetni);


if(yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3"){
let yakitLitresi = Number(prompt("Yakıt litresini giriniz"));
let bakiye = Number(prompt("Bakiyenizi giriniz"));
    if(yakitTipi = "1"){
        //Dizel
        let odenecekTutar = dizel*yakitLitresi;
            if(odenecekTutar<bakiye){
                alert
                    ("işleminiz başarıyla gerçekleştirilmiştir" + yeniSatir +
                    "Ödediğiniz tutar " + odenecekTutar + yeniSatir + 
                    "Kalan bakiyeniz " + (bakiye-odenecekTutar));
            } else {
                alert("İşlem başarısız" + bakiye);
            }
    
    }else if(yakitTipi = "2"){
        //Benzin
        let odenecekTutar = benzin*yakitLitresi;
            if(odenecekTutar<bakiye){
                alert
                ("işleminiz başarıyla gerçekleştirilmiştir" + yeniSatir +
                "Ödediğiniz tutar " + odenecekTutar + yeniSatir + 
                "Kalan bakiyeniz " + (bakiye-odenecekTutar));
            } else {
                alert("İşlem başarsız" + bakiye);
            }
    
    }else if(yakitTipi = "3"){
        //LPG
        let odenecekTutar = lpg*yakitLitresi;
            if(odenecekTutar<bakiye){
                alert
                ("işleminiz başarıyla gerçekleştirilmiştir" + yeniSatir +
                "Ödediğiniz tutar " + odenecekTutar + yeniSatir + 
                "Kalan bakiyeniz " + (bakiye-odenecekTutar));
            } else {
                alert("İşlem başarsız" + bakiye);
            }
    
    }else {
        alert("hatalı bir seçim yaptınız");
    }
}else {
    alert("hatalı bir seçim yaptınız");
}

