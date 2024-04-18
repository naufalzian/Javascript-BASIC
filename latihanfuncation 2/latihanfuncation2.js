function kubus(s1, s2, s3) {
    const kbs = s1 * s2 * s3;
    return kbs;
  }
  
  function Balok(p, l, t) {
    return p * l * t;
  }
  
  function tabung(r, t) {
    const tbg = (22 / 7) * r ** 2 * t;
    return tbg;
  }
  
  function bola(r1) {
    const b = (4 / 3) * (2 / 3) * r1 ** 3;
    return b;
  }
  
  function kerucut(r2, t1) {
    const krct = (1 / 3) * (22 / 7) * r2 ** 2 * t1;
    return krct;
  }
  
  let lanjut;
  
  do {
    console.log("-- Kalkulator sederhana bangun ruang --");
    console.log("Silahkan pilih bangun ruang");
    console.log("Kubus");
    console.log("Balok");
    console.log("Tabung");
    console.log("Bola");
    console.log("Kerucut");
    console.log("Keluar");
    console.log("============================================");
  
    const menu = prompt("Pilih Menu");
  
    switch (menu) {
      case "1":
        const s1 = prompt("Masukkan Sisi 1 : ");
        const s2 = prompt("Masukkan Sisi 2 : ");
        const s3 = prompt("Masukkan Sisi 3 : ");
        console.log("Volume kubus tersebut adalah " + kubus(s1, s2, s3));
        break;
  
      case "2":
        const p = prompt("Masukkan Panjang");
        const l = prompt("Masukkan Lebar");
        const t = prompt("Masukkan Tinggi");
        console.log("Volume balok tersebut adalah " + Balok(p, l, t));
        break;
  
      case "3":
        r = prompt("Masukkan Jari-jari tabung");
        t = prompt("Masukkan Tinggi");
        console.log("Volume tabung tersebut adalah " + tabung(r, t));
        break;
  
      case "4":
        r1 = prompt("Masukkan jari-jari bola");
        console.log("Volume bola tersebut adalah " + bola(r1));
        break;
  
      case "5":
        r2 = prompt("Masukkan jari-jari kerucut");
        t1 = prompt("Masukkan tinggi kerucut");
        console.log("Volume kerucut tersebut adalah " + kerucut(r2, t1));
        break;
  
      default:
        alert("-- Program yang anda pilih tidak tersedia --");
        break;
    }
    lanjut = prompt("Apakah anda ingin lanjut? (Y/T)");
  } while (lanjut === "Y" || lanjut === "y");
  
  console.log("Program Selesai");


