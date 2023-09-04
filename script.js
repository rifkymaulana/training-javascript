/*
 * Number 1
 */
console.log("==========");
console.log("Number 1");
console.log("==========");

// get all the p elements
let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
// get teks X
let x = document.getElementById("p1-symbol");
console.log(x);
// get numbers of square in board div
let squares = document.querySelectorAll(".square");
console.log(squares.length);
// get teks "A game you know"
let teks = document.querySelector("h2");
console.log(teks);

/*
 * Number 2
 */
console.log("==========");
console.log("Number 2");
console.log("==========");

// Ubah nama pemain menjadi nama anda dan teman.
let player1 = document.getElementById("p1-name");
player1.innerHTML = "Rifky Maulana";
let player2 = document.getElementById("p2-name");
player2.innerHTML = "Anisa";
console.log(player1);
console.log(player2);
// Tukar simbol pemain.
let symbol1 = document.getElementById("p1-symbol");
symbol1.innerHTML = "O";
let symbol2 = document.getElementById("p2-symbol");
symbol2.innerHTML = "X";
console.log(symbol1);
console.log(symbol2);
// Ubah subtitle menjadi "A game you know and love"
let subtitle = document.querySelector("h2");
subtitle.innerHTML = "A game you know and love";
console.log(subtitle);

/*
 * Number 3
 */
console.log("==========");
console.log("Number 3");
console.log("==========");

// Deklarasikan & tetapkan variabel untuk mengingat Nama kalian
let nama1 = "Rifky Maulana";
let nama2 = "Anisa";
console.log(nama1);
console.log(nama2);
// Deklarasikan & tetapkan variabel untuk mengingat Gabungan antara usia kalian dan 3 orang teman lainnya.
let usia1 = 20;
let usia2 = 19;
let gabunganUsia = usia1 + usia2 + 20 + 19 + 21;
console.log(gabunganUsia);
// Deklarasikan & tetapkan variabel untuk mengingat Elemen #board dari file yang dikirim.
let board = document.getElementById("board");
console.log(board);

/*
 * Number 4
 */
console.log("==========");
console.log("Number 4");
console.log("==========");

const newJeansMembers = [
  { name: "Kim Minji", nickname: "Minji" },
  { name: "Hanni Pham", nickname: "Hanni" },
  { name: "Danielle Marsh", nickname: "Danielle" },
  { name: "Kang Haerin", nickname: "Haerin" },
  { name: "Lee Hyein", nickname: "Hyein" },
];

const newJeans = {
  albums: ["OMG", "Get Up", "New Jeans"],
  fans: "Bunnies",
  members: newJeansMembers,
};

// Tampilkan poin-poin dibawah dari objek newJeans "Bunnies"
console.log(newJeans.fans);
// Tampilkan poin-poin dibawah dari objek newJeans Objeknya kang Haerin
console.log(newJeans.members[3]);
// Tampilkan poin-poin dibawah dari objek newJeans Album berjudul New Jeans.
console.log(newJeans.albums[2]);
// Tampilkan poin-poin dibawah dari objek newJeans "Minji"
console.log(newJeans.members[0].nickname);
