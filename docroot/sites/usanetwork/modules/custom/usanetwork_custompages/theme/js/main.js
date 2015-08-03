var showed_cont = false;
var game_loaded = false;
var finished_wait = false;

function do_wait()
{
	var show_a_cont_for = 3 * 1000;
	var t = setTimeout(function() { finished_wait = true; show_cont(); },show_a_cont_for);
}



function show_cont ()
{

	//alert('show cont:' + finished_wait + game_loaded + !showed_cont);

	if (finished_wait && game_loaded && !showed_cont)
	{
		showed_cont = true;
		show("cont");
		
		$('adStatus').innerHTML = "YOUR GAME IS LOADED. CLICK CONTINUE TO PLAY.";
	}
}

function show_game()
{
	hide('a_content');
	$('flashcontent').style.width = "924px";
	$('flashcontent').style.height = "480px";
//	$('flashcontent').style.left = "0px";
	
	// tell the game to continue
	var wrapperFlash;
	if(window.ie){wrapperFlash=window["flashcontent"];}else{wrapperFlash=document["flashcontent"];}
	wrapperFlash.startGame();
}

function gameDoneLoading()
{
	game_loaded = true;
	show_cont();
	
	
	// $('flashcontent').style.top = '0px';
	// $('flashcontent').style.left = '0px';
	// $('flashcontent_visible').innerHTML = $('flashcontent').innerHTML;
	// alert(1);
}

function $(id)
{
	return document.getElementById(id);
}

function show(id)
{
	$(id).style.display = '';
}

function hide(id)
{
	$(id).style.display = 'none';
}


var counter = 1;

function ReloadAd()
{
  
    var iframeObj2 =  document.getElementById("adFrameRHS2");        
    var strURL2 = iframeObj2.src;    

    if (strURL2.indexOf("?refresh=") != -1) {
        strURL2 += counter;
    } else {
        strURL2 += "?refresh=" + counter;
    }

        iframeObj2.src = strURL2;
    counter++;

}
