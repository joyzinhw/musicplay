let playlist = document.querySelector('.playlist');
let options = document.querySelector('.options');

function open_p() {
    playlist.classList.toggle('active');
}

function sidebar() {
    options.classList.toggle('active2');
}

var musica1 = document.getElementById("musica1");
        var icon = document.getElementById("play_btn");

        icon.onclick = function(){
            if(musica1.paused){
                musica1.play();
                play_btn.src = "media/pause.png";
            } else {
                musica1.pause();
                play_btn.src = "media/play.png";
            }
        }

var musica2 = document.getElementById("musica2");
        var icon = document.getElementById("musica02");

        icon.onclick = function(){
            if(musica2.paused){
                musica2.play();
                musica02.src = "media/pause.png";
            } else {
                musica2.pause();
                musica02.src = "media/play.png";
            }
        }

var musica3 = document.getElementById("musica3");
        var icon = document.getElementById("musica03");

        icon.onclick = function(){
            if(musica3.paused){
                musica3.play();
                musica03.src = "media/pause.png";
            } else {
                musica3.pause();
                musica03.src = "media/play.png";
            }
        }