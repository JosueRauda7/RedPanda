window.onload=function(){
	var audio=document.getElementById("audio");
	audio.volume=document.getElementById("volumen").value;
	document.getElementById("play").onclick=function(){
		audio.play();
	}
	document.getElementById("pause").onclick=function(){
		audio.pause();
	}
	document.getElementById("stop").onclick=function(){
		audio.load();
	}
	document.getElementById("volumen").onchange=function(e){
		audio.volume=e.target.value;
	}
	audio.ontimeupdate=function(){
		document.getElementById("tiempo").max=audio.duration;
		document.getElementById("tiempo").value=audio.currentTime;
	}
	document.getElementById("cancion").innerHTML=audio.currentSrc;
}