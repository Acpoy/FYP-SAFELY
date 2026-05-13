const bgm = new Audio(
    "audio/bgm.mp3"
);

const bunyiClick = new Audio(
    "audio/click.mp3"
);

const bunyiBetul = new Audio(
    "audio/betul.mp3"
);

const bunyiSalah = new Audio(
    "audio/salah.mp3"
);

bgm.volume = 0.3;

bgm.loop = true;

// ==========================
// SOUND SYSTEM
// ==========================

let soundAktif = false;

function toggleSound(){

    let soundButton =

    document.getElementById(
        "sound-button"
    );

    if(soundAktif){

        bgm.pause();

        soundAktif = false;

        soundButton.innerHTML =
        "BUKA BUNYI";
    }

    else{

        bgm.play();

        soundAktif = true;

        soundButton.innerHTML =
        "TUTUP BUNYI";
    }
}

function playSound(audio){

    if(soundAktif){

        audio.currentTime = 0;

        audio.play();
    }
}

// ==========================
// SECTION SYSTEM
// ==========================

const semuaSection =

document.querySelectorAll(
    ".section"
);

function paparSection(id){

    semuaSection.forEach(
        section =>

        section.classList.remove(
            "aktif"
        )
    );

    document.getElementById(id)
    .classList.add("aktif");
}

// ==========================
// GENDER SYSTEM
// ==========================

let genderDipilih = "girl";

function pilihGender(gender){

    genderDipilih = gender;

    localStorage.setItem(
        "gender",
        gender
    );

    updateCharacter();

    paparSection(
        "home-section"
    );
}

function updateCharacter(){

    let popupBetul =

    document.getElementById(
        "popup-betul-image"
    );

    let popupSalah =

    document.getElementById(
        "popup-salah-image"
    );

    if(genderDipilih === "boy"){

        popupBetul.src =
        "assets/characters/boy_trophy.png";

        popupSalah.src =
        "assets/characters/boy_wrong.png";
    }

    else{

        popupBetul.src =
        "assets/characters/girl_trophy.png";

        popupSalah.src =
        "assets/characters/girl_wrong.png";
    }
}

// ==========================
// QUIZ DATA
// ==========================

const soalanKuiz = [

{
soalan:
"Sebelum melintas jalan, apa yang perlu dilakukan dahulu?",

jawapan: [
"Berlari cepat",
"Melihat kiri dan kanan",
"Bermain di tepi jalan"
],

betul: 1
},

{
soalan:
"Apabila masih ada kereta bergerak di jalan, apa yang perlu dilakukan?",

jawapan: [
"Tunggu sehingga kereta lalu",
"Berlari melintas",
"Duduk di jalan"
],

betul: 0
},

{
soalan:
"Semasa melintas jalan bersama orang dewasa, apa yang perlu dilakukan?",

jawapan: [
"Pegang tangan orang dewasa",
"Berlari sendiri",
"Bermain-main"
],

betul: 0
},

{
soalan:
"Di manakah tempat paling selamat untuk melintas jalan?",

jawapan: [
"Tengah jalan",
"Lintasan belang",
"Belakang kereta"
],

betul: 1
},

{
soalan:
"Jika lampu isyarat pejalan kaki berwarna merah, apa yang perlu dilakukan?",

jawapan: [
"Tunggu",
"Berlari cepat",
"Lompat ke jalan"
],

betul: 0
},

{
soalan:
"Adakah selamat melintas jalan sambil bermain?",

jawapan: [
"Ya",
"Tidak",
"Kadang-kadang"
],

betul: 1
},

{
soalan:
"Jika jalan tidak dapat dilihat dengan jelas kerana ada kenderaan besar, apa yang perlu dilakukan?",

jawapan: [
"Tunggu dan lihat dengan teliti",
"Berlari laju",
"Menyorok di belakang kenderaan"
],

betul: 0
},

{
soalan:
"Apa yang perlu dilakukan sebelum melintas jalan?",

jawapan: [
"Lihat kiri dan kanan",
"Menari",
"Melompat"
],

betul: 0
},

{
soalan:
"Adakah melintas jalan tanpa melihat kiri dan kanan itu betul?",

jawapan: [
"Betul",
"Salah",
"Kadang-kadang"
],

betul: 1
},

{
soalan:
"Ketika melintas jalan, bagaimana kita perlu berjalan?",

jawapan: [
"Dengan tenang dan berhati-hati",
"Sambil bermain",
"Sambil menolak kawan"
],

betul: 0
},

{
soalan:
"Apakah yang perlu digunakan untuk melintas jalan dengan selamat?",

jawapan: [
"Lintasan belang",
"Longkang",
"Tempat letak kereta"
],

betul: 0
},

{
soalan:
"Jika bola masuk ke jalan raya, apa yang perlu dilakukan?",

jawapan: [
"Minta bantuan orang dewasa",
"Kejar bola terus",
"Duduk di tengah jalan"
],

betul: 0
},

{
soalan:
"Mengapa kita perlu melihat kiri dan kanan sebelum melintas jalan?",

jawapan: [
"Untuk memastikan tiada kenderaan",
"Untuk mencari kawan",
"Untuk bermain"
],

betul: 0
},

{
soalan:
"Jika lampu isyarat pejalan kaki berwarna hijau, apa yang boleh dilakukan?",

jawapan: [
"Melintas dengan berhati-hati",
"Duduk di tepi jalan",
"Bermain dahulu"
],

betul: 0
},

{
soalan:
"Semasa melintas jalan bersama kawan, apa yang perlu dilakukan?",

jawapan: [
"Berjalan dengan berhati-hati",
"Berlari dan menjerit",
"Bermain di tengah jalan"
],

betul: 0
}

];

// ==========================
// QUIZ VARIABLE
// ==========================

let nomborSoalan = 0;

let markah = 0;

// ==========================
// PAPAR SOALAN
// ==========================

function paparSoalan(){

document.getElementById(
"nombor-soalan"
).innerHTML =

"Soalan " +
(nomborSoalan + 1)
+ " / " +
soalanKuiz.length;

document.getElementById(
"soalan"
).innerHTML =

soalanKuiz[nomborSoalan]
.soalan;

let pilihan =

document.getElementsByClassName(
"pilihan"
);

for(let i = 0; i < pilihan.length; i++){

pilihan[i].innerHTML =

soalanKuiz[nomborSoalan]
.jawapan[i];

pilihan[i].classList.remove(
"betul"
);

pilihan[i].classList.remove(
"salah"
);

}

let buttonSeterusnya =

document.querySelectorAll(
".seterusnya"
);

if(
nomborSoalan ===
soalanKuiz.length - 1
){

buttonSeterusnya.forEach(
button => {

button.innerHTML =
"LIHAT MARKAH";

}
);
}

else{

buttonSeterusnya.forEach(
button => {

button.innerHTML =
"SOALAN SETERUSNYA";

}
);
}

let progress =

(
(nomborSoalan + 1)
/
soalanKuiz.length
) * 100;

document.getElementById(
"progress-bar"
).style.width =

progress + "%";
}

// ==========================
// CHECK ANSWER
// ==========================

function semakJawapan(index){

let jawapanBetul =

soalanKuiz[nomborSoalan]
.betul;

if(index === jawapanBetul){

playSound(bunyiBetul);

markah++;

document.getElementById(
"popup-betul"
).style.display = "flex";
}

else{

playSound(bunyiSalah);

document.getElementById(
"popup-salah"
).style.display = "flex";
}
}

// ==========================
// QUIZ FUNCTION
// ==========================

function mulaKuizBaru(){

playSound(bunyiClick);

nomborSoalan = 0;

markah = 0;

paparSection(
"quiz-section"
);

paparSoalan();
}

function teruskanKuiz(){

playSound(bunyiClick);

paparSection(
"quiz-section"
);

paparSoalan();
}

function tutupPopupBetul(){

document.getElementById(
"popup-betul"
).style.display = "none";

soalanSeterusnya();
}

function ulangSoalan(){

document.getElementById(
"popup-salah"
).style.display = "none";
}

function teruskanSoalan(){

document.getElementById(
"popup-salah"
).style.display = "none";

soalanSeterusnya();
}

function soalanSeterusnya(){

nomborSoalan++;

if(
nomborSoalan <
soalanKuiz.length
){

paparSoalan();
}

else{

paparResult();
}
}

// ==========================
// RESULT
// ==========================

function paparResult(){

let peratus = Math.round(
(
markah
/
soalanKuiz.length
) * 100
);

document.getElementById(
"markah-akhir"
).innerHTML =

peratus + "%";

paparSection(
"result-section"
);
}

// ==========================
// MENU BUTTON
// ==========================

function bukaPanduan(){

playSound(bunyiClick);

paparSection(
"panduan-section"
);
}

function bukaInfo(){

playSound(bunyiClick);

paparSection(
"info-section"
);
}

function kembaliHome(){

playSound(bunyiClick);

paparSection(
"home-section"
);
}

function kembaliHomePopup(){

document.getElementById(
"popup-betul"
).style.display = "none";

document.getElementById(
"popup-salah"
).style.display = "none";

kembaliHome();
}

function mainSemula(){

mulaKuizBaru();
}