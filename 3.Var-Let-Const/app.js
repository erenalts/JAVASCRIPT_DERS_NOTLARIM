/* 
    SCOPE - Kapsam anlamına gelir. Üç türü vardır
    Global Scope: Heryerden erişim sağlanabilen değişkenlerdir
    Function Scope: fonskiyonun içerisinde tanımlanan değişkenlerdir
    Block Scope: süslü panatnez içerisinde tanımlanır ve sadece süslü parantez içerisinden erişim sağlanır
*/

/*
    Var - Let - Const
    javascriptte değişken oluşturuken veri tipi girilmez
    var/let/const değişkenAdı = 10;    şeklinde tanımlanabilir
    var: fonskiyon scope özelliği taşır
    let/const: block scope özelliği taşır
    var ile tanımlanan değişkene daha sonrasında tekrar bir değişken tanımlanırsa değer değişir
    let ile tanımlanan değişkene daha sonrasında tekrar bir değişken tanımlanırsa değer değişmez

    const (constant) : değişmez sabit anlamına gelir
    bir kere tanımlanan değişken bir daha değiştirilemez

    let'te şöyle yapılabilir
    let  b = 10;
    b = 5
    console.log(b);    yazılırsa b 5 olarak çıkar

    ama 
    let b = (5);
    let b = (10);
    console.log(b); yazılırsa hata verir

    var b = (5);
    var b = (10);
    console.log(b);
    10 çıktısını verir

 */