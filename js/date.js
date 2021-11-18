//repeat every second
setInterval(AJAXsendDate, 1000);

/* DATE() */

function GetDates(){
	let today = new Date();
	let christmasday = "December 25";
	if (today.getMonth() == 11 && today.getDate() > 25){
		christmasday = "December 25 " + (today.getFullYear() + 1);
	}
	else {
		christmasday = "December 25 " + today.getFullYear();
	}
	christmasday = new Date(christmasday);
	christmasday.setHours(0,0,0);
	let str1 = today.toLocaleString("en-US");
	let str2 = christmasday.toLocaleString("en-US");
    let dates = {  
		"today": str1,
		"christmas": str2
	};
    return JSON.stringify(dates);
}

/* AJAX */

function AJAXsendDate(){
	request= new XMLHttpRequest();
	request.onload = function() {
		document.getElementById("countdown").innerHTML =
		this.responseText;
	}
	request.open("GET", "countdown.php?d=" + GetDates());
	request.send();
	
}	


