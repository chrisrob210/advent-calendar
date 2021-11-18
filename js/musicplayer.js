const songlist = [];
const songinfo = document.getElementById("songinfo");
// variables for playlist control
let currentSong = null;
let currentIndex = 0;
let currentPlaylistSize = 0;
//Audio Element controls
let audio = document.getElementById("audioplayer");

/* ---EVENT LISTENERS--- */
//media elements
document.getElementById("back").addEventListener("click", clickHandler);
document.getElementById("play").addEventListener("click", clickHandler);
document.getElementById("next").addEventListener("click", clickHandler);
//audio element
audio.addEventListener('loadeddata', setSongInfo);

function song(artist, title, url){
    this.artist = artist;
    this.title = title;
    this.url = url;
}

readFile('js/songlist.txt');

function clickHandler(e){
    if (this.id === "back"){
        previousSong();
    }
    if (this.id === "next"){
        nextSong();
    }
    if (this.id ==="play"){
        playSong();
    }
}

function setSong(){
    currentSong = songlist[currentIndex];
    audio.src = currentSong.url;
}

function randomSong(){
    index = Math.random(currentPlaylistSize);
    currentSong = songlist[index];
    audio.src = currentSong.url;
}

function nextSong(){
    if (!audio.pause){
        audio.pause();
    }
    if (currentIndex < songlist.length-1)
        currentIndex++;
    else{
        currentIndex = 0;
    }
    setSong();
    playSong();
}

function previousSong(){
    if (!audio.pause){
        audio.pause();
    }
    if (currentIndex < 1)
        currentIndex = songlist.length-1;
    else{
        currentIndex--;
    }
    setSong();
    playSong();
}

function playSong() {
    
    if (audio.paused){
        audio.play();
    }
    else {
        audio.pause();
    }
    
}

function setSongInfo(){
    songinfo.innerHTML = currentSong.artist + " - " + currentSong.title;
    
}

function convertDuration(dur){
    var minutes = "0" + Math.floor(dur / 60);
    var seconds = "0" + Math.floor(dur % 60);
    var playtime = minutes.substr(-2) + ":" + seconds.substr(-2);
    return playtime;
}

function listTracks(){
    console.log("---TRACKLIST---[ Artist | Title | URL ]");
    songlist.forEach(element => console.log("%s - %s : %s", element.artist, element.title, element.url));
}

function parseFile(file){
    let line = [];
    let lineitem = [];
    let track = song;
    //console.log("---String to Parse---\n" + file);
    line = file.split(/\r?\n/);
    //console.log("Tracks: " + line + "");
    currentPlaylistSize = line.length;
    for (i = 0; i < line.length; i++)
    {
        ConvertToSong(line[i]);
    }
    //listTracks(); //used for debug and testing
    setSong();
    //audio.play();
}

function readFile(file)
{
    let rawFile = new XMLHttpRequest();
    let allText = "";
    rawFile.open("GET", file, true);
    rawFile.onload = function() {
        parseFile(rawFile.responseText);
    }
    rawFile.send();
}

function ConvertToSong(element){
    item = element.split("%");
    track = new song(item[0], item[1], item[2]);
    songlist.push(track);
    //console.log("Track: " + item[0] + ", " + item[1] + ", " + item[2]);
    
}

