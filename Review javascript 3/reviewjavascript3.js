const nom5 = prompt(" Masukan angka yang di kalikan:!");
console.log(" Berikut adalah tabel perkalian " + nom5);
let hasil = " ";
for (let i = 1; i <= 10; i++) {
    hasil = nom5 * i;
    console.log(nom5 +" X "+ i + " = " + " "+ hasil)
}