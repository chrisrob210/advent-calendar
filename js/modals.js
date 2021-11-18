advent = document.getElementsByClassName("advent");

//adds event listener to every element with class advent
for ( i = 0 ;i < advent.length; i++){
    advent[i].addEventListener("click", clickHandler);
}


function clickHandler(e){
    
    //TESTING formatting Modal
    //retrieves the element's data-date
    let date = this.dataset.date;
    document.getElementById("modalVerseLongTitle").innerHTML = "Day " + date;
    document.getElementById("modalVerseText").innerText = "This is how Jesus the Messiah was born. " +
    "His mother, Mary, was engaged to be married to Joseph. " +
    "But before the marriage took place, while she was still a virgin, she became pregnant through the power of the Holy Spirit.\n\nMatthew1:18";
    
    $('#modalVerse').modal({backdrop: true, keyboard: true, focus: false, show: false});
    toggle();
}

function toggle(){
    $('#modalVerse').modal('toggle');
}