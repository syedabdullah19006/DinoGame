var dino = document.getElementById("dino");
var result = document.getElementById("result");
var score = document.getElementById("score");
var block = document.getElementById("block");
var game = document.getElementById("game");
var scorebox = document.getElementById("scorebox");
var box = document.getElementById("box");

var count = 0; 

//jump Function
function jump(){
    dino.style.top = "90px";
    setTimeout(function(){
        dino.style.top = " 160px"
    },300)
    count ++
    
    scorebox.innerHTML = ` ${count}`;

}

window.addEventListener("keydown",jump)
//Gameover Function
setInterval(function gameover(){
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    if((blockleft < 57) && (dinotop > 90))
    {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${count}`;
        scorebox.style.visibility = "hidden";
         box.style.visibility = "hidden";
    }

},10);
