var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if(!isChrome){
  $('#iframeAudio').remove()
}
else{
 $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
}

   

   
   var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/images/kahoot.mp3');
    audioElement.loop=true;

        audioElement.play();
    


$('#play').click(function() {
    $("#play").css("display","none");
    $("#pause").css("display","inline-block");
    audioElement.play();

});

$('#pause').click(function() {
    $("#play").css("display","inline-block");
    $("#pause").css("display","none");
    audioElement.pause();

});
