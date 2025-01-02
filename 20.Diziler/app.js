/*değerleri tek bir değişkenle çağırmamızı sağlar
 dizilerin içindeki değişeknlerşn konumunu index kavramıyla belirtiriz
 dizi içindeki ögeleri sayarken saymaya sıfırdan başlarız
 Dizilere değer tanımlanırken diğer yazılım dillerinden farklı olarak tanımlanan değişken türleri aynı
 Diziler object veri türündedir
 olmak zorunda değilde integer değer ve string değer aynı dizide olabilir*/
 //Dizi tanımlamak için
let sayilar = [0,1,2,3,4,5,6,7,8,9];

//Dizi içindeki bir değeri tanımak çağıramak için en baştaki indexi sıfır alarak kaçıncı sıradaysa o sırayı çağırmalıyız

//Farklı şekillerde diziler tanımlayabiliriz
let dizi = new Array("emir","ali");

//FOREACH DÖNGÜSÜ
let isimler = ["ayşe","lale","tuğba","efe"];

isimler.forEach(function(isim){
    console.log(isimler);
});

//FOR DÖNGÜSÜ

for(let i = 0; i<isimler.length; i++){
    console.log(isimler[i]);
}

/**
 *      Dizi metotları
 * 
 * 
 * 
 */