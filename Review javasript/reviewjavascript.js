for (let no = 1; no <= 100; no++)
{
let bilanganprima = true;

if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            bilanganprima = false;
            break; 
        }
    }
} else {
    bilanganprima = false; 
}

if (bilanganprima) {
    console.log(no + " Adalah bilangan prima");
} 

else {
    console.log(no);
}
}