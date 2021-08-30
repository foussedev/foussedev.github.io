var arrayCitation=" \"Peu import à quel point Tu es dévasté Par ta propre faiblesse ou Ta propre inutilité... Attise la flamme de ton coeur, Serre les dents et va de l'avant. Si tu t'arrête et  que tu t'assoies Par terre, le cours du temps, lui, Ne s'arrêtera pas...\"                 ";
var auteur="</br>,<span class=\"autor\"> Rengoku Kyojiro</span>,";
var title="<span > Pensée du jour :</span>, "
var myarray=text.split("");
var myarray1=title.split(",");
var myarray2=test.split(",");
var myarray3=arrayCitation.split("");
var myarray4=auteur.split(",")

var looper;
var looper1;
function loop1(){
    if(myarray1.length > 0){
       
        document.getElementById("citation").innerHTML += myarray1.shift();
    }
    else if(myarray3.length > 0 && myarray1.length==0 ){
       
        document.getElementById("citation").innerHTML += myarray3.shift();
    }
    else if(myarray3.length==0 && myarray4.length>0){
        document.getElementById("citation").innerHTML += myarray4.shift();
      
        
        
    }
    else if(myarray4.length==0 && myarray.length>0){
        document.getElementById("text-acceuil").innerHTML += myarray.shift();
      
        
        
    }
    else if(myarray2.length>0 && myarray.length==0){
        document.getElementById("text-acceuil").innerHTML += myarray2.shift();

     
        clearTimeout(looper); 
    }
    looper=setTimeout('loop1()',10);

}

loop1();
