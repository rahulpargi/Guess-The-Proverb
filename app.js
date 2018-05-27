var proverbs=[
    "Absence makes the heart grow fonder",
    "Actions speak louder than words",
    "A journey of a thousand miles begins with a single step",
    "All good things must come to an end",
    "A picture is worth a thousand words",
    "A watched pot never boils",
    "Beggars can’t be chooser's",
    "Beauty is in the eye of the beholder",
    "Better late than never",
    "Birds of a feather flock together",
    "Cleanliness is next to godliness",
    "Don’t bite the hand that feeds you",
    "Don’t count your chickens before they hatch",
    "Don’t judge a book by its cover",
    "Don’t put all of your eggs in one basket",
    "Don’t put off until tomorrow what you can do today",
    "Don’t put too many irons in the fire",
    "Easy come, easy go",
    "Fortune favors the bold",
    "God helps those who help themselves"
]
var ran=proverbs[Math.floor((Math.random()*20))].replace(/\s[^a-zA-Z ]/g,'');
var rp=ran.toString().toLowerCase();
var guessCount=3;
//console.log(rp);
var guess=Math.floor((ran.length)/2);
var count=0;
console.log(rp);
document.getElementById("guesss").innerHTML="Guesses Available: "+guess;
document.getElementById("counts").innerHTML="Count is "+count;
function display(a){
    count++;
    var i=document.getElementById(a);
    i.innerHTML=ran[a-1];
    i.style.backgroundColor="#29b6f6";
    
    document.getElementById("counts").innerHTML="Count is "+count;
    if(count>guess){
        alert("You have no more letters to flip, please make you Guess Now!");
        return false;
      
    }else{
        return false;
    }
    
    
}

//console.log(input);
function check(){
    guessCount--;
    console.log(count);
    if(guessCount==0){
        alert("You guesses are over ");
        window.location.reload();

    }
    
   var input  =document.getElementById("ip").value;
    console.log(input);
    var len=ran.length-count;
    
    if(input==rp){
       console.log(guessCount);
        alert("You are correct, You are "+len+" Star guesser!");
 
        window.location.reload();
        
        return false;
    }else{
        alert("Bad Luck Try Again");
        
        return false;
    }
    
}

function giveUp(){
    window.location.reload();
}
function reveal(){
    document.getElementById("ans").innerHTML=rp;
}
  
  

