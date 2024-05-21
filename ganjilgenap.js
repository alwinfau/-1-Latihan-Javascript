// Meminta pengguna untuk memasukkan batas atas
var batas_atas = parseInt(prompt("Masukkan batas atas: "));
var ganjil = [];

// Loop untuk menemukan angka ganjil dari 1 sampai batas atas
for (var i = 1; i <= batas_atas; i++) {
    if (i % 2 !== 0) {
        ganjil.push(i);
    }
}

// Menampilkan angka ganjil yang ditemukan
console.log("Angka ganjil antara 1 dan " + batas_atas + " adalah:");
for (var j = 0; j < ganjil.length; j++) {
    console.log(ganjil[j]);
}