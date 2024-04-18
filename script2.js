const arr_count = parseInt(prompt("Masikkan jumlah elemen array: "));
 function avgArray(arr_count){
    let arr =[];
    let total =0;

    for (let i = 0; i < arr_count; i++) {
         let element = parseInt(ptompt("Masukkan angka ke-" + parseInt(i + 1) + ":"));
         arr[i] = element;
    }

    console.log(arr);
    for (let i = 0; i < arr_count; i++) {
        total = total + arr[i];
    }

    return (total / arr_count);

}

const avg = avgArray(arr_count);

