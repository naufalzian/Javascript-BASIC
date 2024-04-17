function persegi(sisi1, sisi2) {
    return sisi1 * sisi2;
  }
  
  function persegi_panjang(panjang1, lebar1) {
    return panjang1 * lebar1;
  }
  
  function lingkaran(v, r) {
    const lingkaran = volume * ruas ** 2;
    return lingkaran;
  }
  
  function segitiga(a, t) {
    const segitiga = (1 / 2) * a * t;
    return segitiga;
  }
  
  let lanjutkan;
  
  do {
    console.log("-- APLIKASI KALKULATOR BANGUN DATAR --");
    console.log("Silahkan pilih menu di bawah");
    console.log("1.Persegi");
    console.log("2.Persegi Panjang");
    console.log("3.Lingkaran");
    console.log("4.Segitiga");
    console.log("5.Keluar");
    console.log("===============================================");
  
    const menu = prompt("Pilih Menu");
  
    switch (menu) {
      case "1":
        const sisi1 = prompt("Masukkan sisi 1 : ");
        const sisi2 = prompt("Masukkan sisi 2 : ");
        console.log(parseInt(persegi(sisi1, sisi2)));
        break;
  
      case "2":
        persegipanjag1 = prompt("Masukkan panjang : ");
        lingkaran1 = prompt("Masukkan lebar : ");
        console.log(parseInt(persegi_panjang(persegipanjang1, lingkaran1)));
        break;
  
      case "3":
        volume = prompt("Masukkan Nilai volume : ");
        ruas = prompt("Masukkan Nilai ruas : ");
        console.log(parseInt(lingkaran(v, r)));
        break;
  
      case "4":
        a = prompt("Masukkan Nilai a : ");
        t = prompt("Masukkan Nilai t : ");
        console.log(parseFloat(segitiga(a, t)));
        break;
  
      default:
        alert("Menu yang anda pilih tidak tersedia");
        break;
    }
    lanjut = prompt("Mau piih yang lain?(Y/T)");
  } while (lanjutkan === "Y" || lanjutkan === "y");
  
  console.log("Program Selesai");