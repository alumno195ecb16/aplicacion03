// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.beep(1);
        });//tap beep

       $('#vib').tap(function(){
	     navigator.notification.vibrate(100);
        });//tap vibrar

	},false);//deviceready
});//ready