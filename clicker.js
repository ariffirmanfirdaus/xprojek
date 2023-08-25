const gameImage = document.getElementById('gameImage');
let isImage1 = true;
let score = 0;
let isLevel1000Reached = false;
const clickSound = document.getElementById('clickSound');
let soundIsPlaying = false;

// Menambahkan event listener untuk memuat gambar sebelum memulai permainan
window.addEventListener('load', function () {
  gameImage.src = 'https://cdn.discordapp.com/attachments/1108066963810431047/1143172819514044416/1692623998389.png';
});

function changeToImage2() {
  if (!isLevel1000Reached) {
    gameImage.src = 'https://media.discordapp.net/attachments/1108066963810431047/1143172819887329392/1692624013935.png';
    isImage1 = false;
  } else {
    changeToImage1();
  }
  incrementScore();
  playClickSound(); // Memutar efek suara
}

function changeToImage1() {
  if (!isLevel1000Reached) {
    gameImage.src = 'https://cdn.discordapp.com/attachments/1108066963810431047/1143172819514044416/1692623998389.png';
    isImage1 = true;
  } else {
    if (isImage1) {
      gameImage.src = 'https://media.discordapp.net/attachments/1108066963810431047/1143189301274869800/20230821_212517.png';
    } else {
      gameImage.src = 'https://media.discordapp.net/attachments/1108066963810431047/1143189301522345994/20230821_212547.png';
    }
    isImage1 = !isImage1;
  }
}

function incrementScore() {
  score++;
  const scoreValue = document.getElementById('scoreValue');
  scoreValue.textContent = score;
  scoreValue.classList.add('increase');
  setTimeout(() => {
    scoreValue.classList.remove('increase');
  }, 500);

  if (score === 1000) {
    isLevel1000Reached = true;
  }
}

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// Fungsi untuk memutar efek suara
function playClickSound() {
  if (!soundIsPlaying) {
    clickSound.currentTime = 0;
    clickSound.play();
    soundIsPlaying = true;

    // Mengatur waktu tunggu sebelum suara dapat diputar lagi (sesuaikan dengan durasi suara)
    setTimeout(() => {
      soundIsPlaying = false;
    }, clickSound.duration * 1000 + 100); // Menambahkan penundaan 100ms
  }
}


gameImage.addEventListener('mousedown', changeToImage2);
gameImage.addEventListener('touchstart', changeToImage2);

gameImage.addEventListener('mouseup', changeToImage1);
gameImage.addEventListener('touchend', changeToImage1);
