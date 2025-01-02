// Parametresiz ve geriye değer döndüremeyen bir metot tanımlama için

/*
 * Temel metot yapısı
 * Function fonksiyonAdı(){
 *     Gerekli komutlar yazılır
 * }
 */

function yazdir(){
    console.log("Javascript");
}

yazdir();

// Parametresiz ve geriye değer döndüremeyen bir metot tanımlama için

/*
 * Temel metot yapısı
 * Function fonksiyonAdı(parametreler yazılır){
 *     Gerekli komutlar yazılır
 * }
 */

function Isim(isim,soyisim){
    console.log(isim + " " + soyisim);
}

Isim("Ali","kerem");


//Geriye değer döndüren metotlar
//return : geriye değer döndürür
//return bir değeri metodun dışarısına çıkartmak/taşımak için kullanılır
//Bir metodu bitiren anahtar kelimedir
let donenDeger = cube(5);
console.log(donenDeger);

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}