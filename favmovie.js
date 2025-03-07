const favmovie ="Avenger";
let guess = prompt("guess my favorite movie in the game");
while((guess !=favmovie)&&(guess !="quit")){
    console.log("wrong guess please try again");
}
if(guess == favmovie){
    console.log("congrats!!baby");
}
else{
    console.log("you quit");
}
