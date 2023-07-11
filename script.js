// initializing the variable

let songIndex = 0;
let audioElement = new Audio("songs/2.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("progressBar");
let masterSong = document.getElementById("masterSong");
let song = Array.from(document.getElementsByClassName("song"));
let playBtn = Array.from(document.getElementsByClassName("play"))


// song object

let songs = [
  {
    songsName: "Nah jany",
    songPath: "songs/1.mp3",
    songCover: "covers/1.jpg",
    artistname: "shiblu",
  },
  {
    songsName: "Q is rangeen",
    songPath: "songs/2.mp3",
    songCover: "covers/2.jpg",
    artistname: "shiblu",
  },
  {
    songsName: "jahan mai",
    songPath: "songs/3.mp3",
    songCover: "covers/3.jpg",
    artistname: "shiblu",
  },
  {
    songsName: "palkon ko",
    songPath: "songs/4.mp3",
    songCover: "covers/4.jpg",
    artistname: "shiblu",
  },
  {
    songsName: "shabnami kr gya",
    songPath: "songs/5.mp3",
    songCover: "covers/5.jpg",
    artistname: "shiblu",
  },
  {
    songsName: "guzry lamhy",
    songPath: "songs/6.mp3",
    songCover: "covers/6.jpg",
    artistname: "shiblu",
  },
  {
    songsName: "har pall",
    songPath: "songs/7.mp3",
    songCover: "covers/7.jpg",
    artistname: "shiblu",
  },
  {
    songsName: "kehty hain",
    songPath: "songs/8.mp3",
    songCover: "covers/8.jpg",
    artistname: "shiblu",
  },
  {
    songsName: "i cant eat",
    songPath: "songs/9.mp3",
    songCover: "covers/9.jpg",
    artistname: "shiblu",
  },
  {
    songsName: "dundho yeh sara jahan",
    songPath: "songs/10.mp3",
    songCover: "covers/10.jpg",
    artistname: "shiblu",
  },
];



// updating the list with the above objects data
song.forEach((Element, i) => {
  Element.getElementsByClassName("songCover")[0].src = songs[i].songCover;
  Element.getElementsByClassName("songName")[0].textContent =
    songs[i].songsName;
  Element.getElementsByClassName("artistName")[0].textContent =
    songs[i].artistname;
});

// making the play and pause button on each 
// song in the list work and play individual songs

playBtn.forEach((Element, i) =>{
  Element.addEventListener('click', ()=>{
    // console.log(Element)
    makeAllPlay()
    Element.classList.remove('fa-circle-play')
    Element.classList.add('fa-circle-pause')
    audioElement.src = songs[i].songPath
    masterSong. textContent = songs[i].songsName
    audioElement.currentTime = 0
    audioElement.play()
  })
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("play")).forEach((Element) => {
    Element.classList.add("fa-circle-play");
    Element.classList.remove("fa-circle-pause");
  });
};






// play/pause button of the seekbar on the bottom of the spotify clone
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
  }
});



// making the seekbar work 
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});

// making the song update when the seekbar is dragged by mouse
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

