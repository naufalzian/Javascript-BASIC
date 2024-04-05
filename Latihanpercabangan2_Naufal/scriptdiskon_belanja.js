const totalbelanja = prompt("Masukkan total belanja: ");
console.log("Totalbelanja = Rp." + totalbelanja);
console.log(" ")
if (totalbelanja < 100000) {
  console.log("Terimakasih sudah berbelanja!");
  console.log("Total bayar = Rp." + totalbelanja);
} else if (totalbelanja>= 100000 && totalbelanja < 500000) {
  console.log("Selamat Anda mendapatkan diskon 10%");
  console.log("Total bayar = Rp." + (totalbelanja - totalbelanja * 0.1));
} else if (totalbelanja >= 500000 && totalbelanja < 1000000) {
  console.log("Selamat Anda mendapatkan diskon 20%");
  console.log("Total bayar = Rp." + (totalbelanja - totalbelanja * 0.2));
} else if (totalbelanja >= 1000000) {
  console.log("Selamat Anda mendapatkan diskon 30%");
  console.log("Total bayar = Rp." + (totalbelanja - totalbelanja * 0.3));
}
