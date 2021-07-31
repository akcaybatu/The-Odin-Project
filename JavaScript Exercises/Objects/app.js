let kullanici = {
    isim: "Mazlum",
    yas: 30,
    mazlumuGetirin: true
};
  
for(let anahtarsss in kullanici) {
    // anahtarlar
    console.log(anahtarsss);  // isim, yas, mazlumuGetirin
    // anahtarlara göre değerler
    console.log(kullanici[anahtarsss]); // Mazlum, 30, true
}

let kodlar = {
    "+49": "Almanya",
    "+41": "İsveç",
    "+44": "İngiltere",
    // ..,
    "+1": "Amerika Birleşik Devletleri"
};
  
for(let kod in kodlar) {
    console.log( +kod ); // 49, 41, 44, 1
}