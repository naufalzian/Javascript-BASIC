const nilaia = prompt("Masukkan nilai Anda: ");
if (nilaia >= 85 &&nilaia <= 100) {
  console.log("Nilai Anda berpredikat A");
} else if (nilaia >= 75 && nilaia < 85) {
  console.log("Nilai Anda berpredikat B");
} else if (nilaia >= 65 && nilaia < 75) {
  console.log("Nilai Anda berpredikat C");
} else if (nilaia >= 55 && nilaia < 65) {
  console.log("Nilai Anda berpredikat D");
} else if (nilaia <= 50) {
  console.log("Nilai Anda berpredikat E");
}

