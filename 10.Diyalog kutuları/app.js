/*
 *      Diyalog kutuları
        Hepsi fonskiyondur ve hepsi window objesinin içinde bulunur
 *      Alert = uyarı anlamına gelir
 *      Prompt = Kullanıcıdan değer almamızı sağlar
 *      Confirm = Kullanıcıya onay mesajı gönderir
 */

// window. yaparak bu fonskiyonlara erişebiliriz ama window objesinin içinde tanımlandığı için direkt fonksiyonun adını yazarak fonskiyonlara erişebiliriz


//alert
alert("Bu bir uyari mesajidir");
prompt("İsminizi giriniz");

//prompt
// Kullanıcıdan alınan değerleri ekranda görmek içn 
let isim = prompt("İsminizi giriniz");
console.log(isim);

//Kullanıcıdan alınan değerler her zaman string veri tipindedir

//Confirm kullanıcıya onay mesajı gönderir
confirm("BU mesajı silmek istediğinize emin misiniz");



