/* $(window).scroll(function() {
                
    var scroll_pos = window.pageYOffset;
           
  
  
    if(scroll_pos>=pageYOffset) {
     $("#about").css("background-color","#C0392B");
    }
  else
  {
    $("#about").css("background-color","#e0e0e0");
  }
});*/ 
$(document).ready(function(){
    $("#about").mouseover(function(){
        $("#about").css("background-color", "#C0392B");
    });
    $("#about").mouseout(function(){
        $("#about").css("background-color", "#e0e0e0");
    });
    $("#quote").mouseover(function(){
        $("#quote").css("background-color", "#C0392B");
    });
    $("#quote").mouseout(function(){
        $("#quote").css("background-color", "#e0e0e0");
    });
});


$(window).on("scroll touchmove", function() {
		
		
		if ($(document).scrollTop() >= $("#about").position().top) {
				$("#about").css("background-color","#C0392B");
		            
		} else
		{
			$("#about").css("background-color","#e0e0e0");
  		}    
    
    if ($(document).scrollTop() >= $("#quote").position().top) {
				$("#quote").css("background-color","#C0392B");
		}
		else
		{
			$("#quote").css("background-color","#e0e0e0");
  		}
});

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
