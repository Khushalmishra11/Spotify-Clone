console.log('Welcome to Spotify');
//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');


let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"}
    {songName: "Salam-e-Ishq", filePath: 'songs/1.mp3', coverPath: "cover/1.mp3"}
    {songName: "Salam-e-Ishq", filePath: 'songs/1.mp3', coverPath: "cover/1.mp3"}
    {songName: "Salam-e-Ishq", filePath: 'songs/1.mp3', coverPath: "cover/1.mp3"}
    {songName: "Salam-e-Ishq", filePath: 'songs/1.mp3', coverPath: "cover/1.mp3"}
    {songName: "Salam-e-Ishq", filePath: 'songs/1.mp3', coverPath: "cover/1.mp3"}
    {songName: "Salam-e-Ishq", filePath: 'songs/1.mp3', coverPath: "cover/1.mp3"}
    {songName: "Salam-e-Ishq", filePath: 'songs/1.mp3', coverPath: "cover/1.mp3"}
    {songName: "Salam-e-Ishq", filePath: 'songs/1.mp3', coverPath: "cover/1.mp3"}
]


//audioELement.play();


// Handle play/pause click
// Update Seekbar
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    }
    
});

// Handle seekbar change
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
