function Play(){
   //mudar do modo de menu para modo de jogo
   //fazer com que apareça a Samara e os menus do jogo
   const menuPrincipal = document.getElementById("menuPrincipal");
   const playSpace = document.getElementsByClassName("playSpace");
   const samaraSprite = document.getElementsByClassName("sprite");
   
   menuPrincipal.remove();

}

function Finish(){
   document.getElementsByClassName("playSpace").style.display = "none";
   document.getElementById("victoryScreen").style.display = "block";

}



//-------------------------------------------------
var topsArray = ["/images/Top_verde.png","/images/pink_dress.png"];

var accesoriesArray =["/images/laço.png"]




function nextTops(element){

   var topAtual = document.getElementsByClassName()

   for(var i = 0; i<topsArray.length-1;i++){

      if(topsArray[i].src == topAtual.src){

         if(i === topsArray.length){

            document.getElementById(element).src =topsArray[0].src;
            break;
         }
         document.getElementById(element).src=topsArray[i+1].src;
         break;
      }
   }
}
   
   
   
 


function previousTops(){

   
   
}


