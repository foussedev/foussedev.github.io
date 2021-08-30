var  text = " Bonjour, bienvenue sur ma page github. " ;
 test var =
    "</br>,Je me nomme : <span class=\"green\">Kaboré Fousséni</span>, </br>,j'ai <span class=\"green\">24 ans Titulaire d' une licence en Macroéconomie Gestion de Développement</span>,</br>,je suis un passionné d'informatique., </br> <strong></br>Compétences :</br></strong></br >, <span class=\"green\">HTML5/CSS3</span> Niveau : Intermédiaire </br>,<span class=\"green\">PHP/MYSQL</span> Niveau : Débutant,</ br> <strong></br>Contact :</br></strong>,<span>foussedev@gmail.com</span>" ;

var  arrayCitation = " \"Peu import à quel point Tu es dévasté Par ta propre faiblesse ou Ta propre inutilité... Attise la flamme de ton coeur, Serre les dents et va de l'avant. Si tu t'arrête et que tu t'assoies Par terre, le cours du temps, lui, Ne s'arrêtera pas...\" " ;
var  auteur = "</br>,<span class=\"autor\"> Rengoku Kyojiro</span>," ;
var  title = "<span > Pensée du jour :</span>, "
var  myarray = texte . diviser ( "" ) ;
var  myarray1 = titre . diviser ( "," ) ;
var  myarray2 = test . diviser ( "," ) ;
var  myarray3 = arrayCitation . diviser ( "" ) ;
var  myarray4 = auteur . diviser ( "," )

var  looper ;
var  looper1 ;
fonction  boucle1 ( ) {
    if ( myarray1 . longueur  >  0 ) {
       
        documenter . getElementById ( "citation" ) . innerHTML  +=  myarray1 . décalage ( ) ;
    }
    else  if ( myarray3 . length  >  0  &&  myarray1 . length == 0  ) {
       
        documenter . getElementById ( "citation" ) . innerHTML  +=  myarray3 . décalage ( ) ;
    }
    else  if ( myarray3 . length == 0  &&  myarray4 . length > 0 ) {
        documenter . getElementById ( "citation" ) . innerHTML  +=  myarray4 . décalage ( ) ;
      
        
        
    }
    else  if ( myarray4 . length == 0  &&  myarray . length > 0 ) {
        documenter . getElementById ( "texte-accueil" ) . innerHTML  +=  myarray . décalage ( ) ;
      
        
        
    }
    else  if ( myarray2 . length > 0  &&  myarray . length == 0 ) {
        documenter . getElementById ( "texte-accueil" ) . innerHTML  +=  myarray2 . décalage ( ) ;

     
        clearTimeout ( boucle répétée ) ; 
    }
    looper1 = setTimeout ( 'loop1()' , 10 ) ;

}

boucle1 ( ) ;
