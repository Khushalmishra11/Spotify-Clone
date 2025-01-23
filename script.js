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
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

// Listen to event
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

})


