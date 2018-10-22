let playButton = document.getElementById('playButton')
let pauseButton = document.getElementById('pauseButton')
let skipButton = document.getElementById('skipButton')
let previousButton = document.getElementById('previousButton')

let coverArt = document.getElementById('image')
let songTitle = document.getElementById('title')

function coverArtTemplate() {
  coverArt.style.backgroundImage = 'url(' + songs[currentSong].image + ')';
  coverArt.style.backgroundRepeat = 'no-repeat';
  coverArt.style.backgroundSize = '100% 100%';
  coverArt.style.borderRadius = '300px';
}

function titleOfSong(){
  songTitle.innerHTMl = songs[currentSong].song;



}

class Song{
  constructor(song, url, artist, date, image){
    this.song = song;
    this.url = url;
    this.artist = artist;
    this.date = date;
    this.image = image;
  }
}

var song1 = new Song('Carousel', 'audioFile/ariels.mp3', 'Aries',  '10-12-18', 'css/cover-art/Carousel.jpg')
var song2 = new Song('Paranoia', 'audioFile/Paranoia.mp3', 'chance the rapper', '10-13-18', 'css/cover-art/Paranoia.jpeg')
var song3 = new Song('Sayonara', 'audioFile/Sayonara.mp3', 'Aries', '10-14-18', 'css/cover-art/sayonara.jpeg')
var song4 = new Song('Summertime Magic', 'audioFile/Summertime_Magic.mp3', 'Childish gambino', '10-15-18', 'css/cover-art/Summertime-Magic.png')
var song5 = new Song('Smooth Criminal', 'audioFile/Smooth_Criminal.mp3', 'Haywyre', '10-15-18', 'css/cover-art/Smooth_Criminal.jpeg')
var song6 = new Song('Less than friends', 'audioFile/Less_Than_Friends.mp3', 'Aries', '10-16-18', 'css/cover-art/Less-than-friends.jpg')


var songs = [song1, song2, song3, song4, song5, song6]

var currentSong = 0

var myAudio = new Audio();

coverArt.innerHTMl = coverArtTemplate();
songTitle.innerHTMl = titleOfSong();

  function playSong(){
    myAudio.src = songs[currentSong].url;
    myAudio.play();
    coverArtTemplate(); //Places Image
    titleOfSong();
    myAudio.onended = function(){
      skipSong()
    }
  }

  function pauseSong(){
    myAudio.src = songs[currentSong].url;
    myAudio.pause()
    songs.currentTime;
  }

  function skipSong(){
    if(currentSong == songs.length - 1){
      currentSong = 0
      playSong()
    }
    else{
      currentSong++;
      playSong()
      }
    }

  function previousSong(){
    if(currentSong < songs.length){
      currentSong--
      playSong()
    }
    else{
      songs[currentSong]
    }
  }


playButton.addEventListener('click', playSong)
pauseButton.addEventListener('click', pauseSong)
skipButton.addEventListener('click', skipSong)
previousButton.addEventListener('click', previousSong)
