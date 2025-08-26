
var musicList = [
    "'src: './musics/New Jeans (320 kbps).mp3', name: 'New Jeans'",
    "",
    "./musics/ETA (320 kbps).mp3",
    "./musics/Cool With You (320 kbps).mp3",
    "./musics/Get Up (320 kbps).mp3",
    "./musics/ASAP (320 kbps).mp3"
];

var audioPlayer = document.getElementById("audioPlayer");
var audioSource = document.getElementById("audioSource");
var musicNameElement = document.getElementById("musicName");

// Lista de músicas
var musicList = [
    { src: "./musics/New Jeans (320 kbps).mp3", name: "New Jeans" },
    { src: "./musics/Super shy (320 kbps).mp3", name: "Super shy" },
    { src: "./musics/ETA (320 kbps).mp3", name: "ETA" },
    { src: "./musics/Cool With You (320 kbps).mp3", name: "Cool With You" },
    { src: "./musics/Get Up (320 kbps).mp3", name: "Get Up" },
    { src: "./musics/ASAP (320 kbps).mp3", name: "ASAP" }
    // Adicione mais caminhos para outras músicas
];

// Índice da música atual
var currentTrackIndex = 0;

// Função para mudar de faixa
function changeTrack(direction) {
    currentTrackIndex = (currentTrackIndex + direction + musicList.length) % musicList.length;
    audioSource.src = musicList[currentTrackIndex].src;
    musicNameElement.innerText = musicList[currentTrackIndex].name;
    audioPlayer.load();
    audioPlayer.play();
}
