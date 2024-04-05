console.log("Program kalkulator sederhana")
console.log("PENJUMLAHAN")
console.log("Pengurangan")
console.log("Pembagian")
console.log("keluar program")


const menu = prompt("Menu kalkulator (angka) :")
const angka1 = parseInt(prompt("silahkan masukan angka pertama"))
const angka2 = parseInt(prompt("silahkan masukan angka ke dua"))


let hitung;
        switch (menu){
        case "1" :
        hitung = (angka1 + angka2)
        console.log("hasil dari "+angka1+" + "+angka2+" = "+hitung)
        break;
        case "2":
        hitung = (angka1 - angka2)
        console.log("hasil dari "+angka1+" - "+angka2+" = "+hitung)
        break;
        case "3":
        hitung = (angka1 * angka2)
        console.log("hasil dari "+angka1+" * "+angka2+" = "+hitung)
        break;
        case "4":
        hitung = (angka1 / angka2) 
        console.log("hasil dari "+angka1+" : "+angka2+" = "+hitung)
        break;
        case "5":
        pesan2 = "keluar program"
        console.log("Keluar program...terimakasih!")
        break; 
}