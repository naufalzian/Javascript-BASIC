const tahun = prompt("Masukkan tahun lahir Anda: ");
if (tahun >= 1945 && tahun <= 1965) {
  console.log("Anda adalah Baby Boomer");
} else if (tahun >= 1966 && tahun <= 1979) {
  console.log("Anda adalah Generasi X");
} else if (tahun >= 1980 && tahun <= 1994) {
  console.log("Anda adalah Generasi Y");
} else if (tahun >= 1995 && tahun <= 2015) {
  console.log("Anda adalah Generasi Z");
}
