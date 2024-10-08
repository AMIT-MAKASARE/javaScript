const favMovie="avatar"

let guess=prompt("Guess favrite Movie")

if(favMovie != guess & guess == "quite"){
    console.log(alert("guess wronge or you quite"));  
}
else if( guess== ""){
     console.log(alert("enter your guess or enter <quite> for quiting the game"));
     
}
else{
    console.log(alert("Congrats you won"));
    
}