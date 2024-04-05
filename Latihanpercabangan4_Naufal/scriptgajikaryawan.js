const nama = prompt("Masukkan Nama Anda: ");
console.log("Nama : " + nama);

const golongan = prompt("Masukkan Golongan Anda: ");
console.log("Golongan : " + golongan);
let gaji_golongan;
switch (golongan) {
  case "A":
  case "a":
    gaji_golongan = 6000;
    break;
  case "B":
  case "b":
    gaji_golongan = 7000;
    break;
  case "C":
  case "c":
    gaji_golongan = 8000;
    break;
  default:
    gaji_golongan = 10000;
    break;
}

const jam_kerja = prompt("Masukkan Jumlah Jam Kerja: ");
console.log("Jumlah Jam Kerja : " + jam_kerja);
let uang_lembur;
if (jam_kerja > 48) {
  uang_lembur = (jam_kerja - 48) * 5000;
} else {
  uang_lembur = 0;
}

let gaji = gaji_golongan * jam_kerja + uang_lembur;
console.log("");
console.log(nama + " menerima gaji sebesar " + gaji + " per minggu");