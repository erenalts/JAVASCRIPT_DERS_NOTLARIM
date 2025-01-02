// Beden kitle endeksi, vücut ağırlığının boy uzunluğunun karesine bölünmesiyle hesaplanır

let kg = Number(prompt("Lütfen kilonuzu giriniz: "));
let cm = Number(prompt("Lütfen boy uzunluğunuzu giriniz: "));

let sonuc = kg / (cm*2) ;

if(sonuc <= 18,5)                             {console.log("İdeal kilonun altındasınız" + sonuc); }
     else if(sonuc >= 18,5 && sonuc <= 24.9)  {console.log("ideal kilodasınız" + sonuc); } 
     else if(sonuc >= 25 && sonuc <= 29.9)    {console.log("ideal kilonun üstündesiniz" + sonuc);} 
     else if(sonuc >= 30 && sonuc <= 39.9)    {console.log("ideal kilonun çok üstündesiniz (Obez)" + sonuc); } 
     else if(sonuc >= 40 )                    {console.log("ideal kilonun çok üstündesiniz (Morbid obez)"+ sonuc);} 
     else                                     {console.log("Yanlış değer girdiniz" + sonuc);}
