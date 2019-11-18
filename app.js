document.addEventListener('DOMContentLoaded', function() { startPlayer() ,false});
    let player;
    function startPlayer() {
        player = document.getElementById('music_player')
        player.controls = false
    }
    function play_audio(){
        player.play()
    }
    function pause_audio(){
        player.pause()
    }
    // function stop_audio(){
    //     player.pause();
    //     player.currentTime = 0;

    // }
