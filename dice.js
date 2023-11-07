var firstPast = 1;
var secondPast = 1;
var initialising = true;

function getNewWinner(){
    var p1 = Math.floor(Math.random()*6) + 1;
    var p2 = Math.floor(Math.random()*6) + 1;

    var result = document.querySelector(".playerwon.refresh");
    var dice = document.querySelectorAll(".playerdice > *");

    if(initialising){
        result.style.display = "none";
        
        dice[0].style.display = "none";
        dice[6].style.display = "none";

        initialising = false;
    }
    else{
        if(firstPast>secondPast){
            document.querySelector(".playerwon.one").style.visibility = "hidden";
        }
        else if(secondPast>firstPast){
            document.querySelector(".playerwon.two").style.visibility = "hidden";
        }
        else{
            document.querySelector(".playerwon.draw").style.visibility = "hidden";
        }
        dice[firstPast-1].style.display = "none";
        dice[secondPast+5].style.display = "none";
    }

    if(p1>p2){
        document.querySelector(".playerwon.one").style.visibility = "visible";
    }
    else if(p1<p2){
        document.querySelector(".playerwon.two").style.visibility = "visible";
    }
    else{
        document.querySelector(".playerwon.draw").style.visibility = "visible";
    }

    dice[p1-1].style.display = "grid";
    dice[p2+5].style.display = "grid";

    firstPast = p1;
    secondPast = p2;
}

$(".roll").click(function (){
    var item = $(".playerdice");
    item.blur();
    for(var i = 0; i<2; i++)
        $(".playerdice").animate({left: "-=10px"}, 100).animate({left: "+=10px"}, 100);
    // $(".number-canvas")
});