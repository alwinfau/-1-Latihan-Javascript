const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nilai: ', (inputnilai) => {
    let hasil = null;

    if (inputnilai !== null) {
        inputnilai = parseInt(inputnilai); // Mengubah nilai menjadi bilangan bulat

        if (!isNaN(inputnilai)) { // Memeriksa apakah input valid
            if (inputnilai > 90 && inputnilai <= 100) {
                hasil = 'A+';
            } else if (inputnilai > 80 && inputnilai <= 90) {
                hasil = 'A';
            } else if (inputnilai > 70 && inputnilai <= 80) {
                hasil = 'B+';
            } else if (inputnilai > 68 && inputnilai <= 70) {
                hasil = 'B';
            } else if (inputnilai > 50 && inputnilai <= 68) {
                hasil = 'C+';
            } else if (inputnilai > 45 && inputnilai <= 50) {
                hasil = 'C';
            } else if (inputnilai > 30 && inputnilai <= 45) {
                hasil = 'D';
            } else if (inputnilai > 20 && inputnilai <= 30) {
                hasil = 'E';
            } else {
                hasil = 'Gagal';
            }
        } else {
            hasil = 'Silahkan nilai terlebih dahulu';
        }
    } else {
        hasil = 'Input dibatalkan';
    }

    console.log('Hasil:', hasil);
    rl.close();
});