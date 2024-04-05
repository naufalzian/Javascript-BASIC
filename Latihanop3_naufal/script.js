let tinggi = prompt("Masukkan Tinggi Badan Anda");
console.log("Tinggi Anda :" + tinggi + "cm");

let berat = prompt("Masukkan Berat Badan anda");
console.log("Berat Badan Anda :" + berat + "kg");

let BMI = (berat / (tinggi * tinggi)) * 10000;
console.log("Index BMI Anda :" + BMI);