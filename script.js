function Play(){
   //mudar do modo de menu para modo de jogo
   //fazer com que apareça a Samara e os menus do jogo
   document.getElementById("menuPrincipal").style.display = "none";
   document.getElementsByClassName("playSpace").style.display = "block";
   document.getElementsByClassName("sprite").style.visibility = "block";
   

}

function Finish(){
   document.getElementsByClassName("playSpace").style.display = "none";
   document.getElementById("victoryScreen").style.display = "block";

}


function nextTops(){
   let topAtual = topsArray.number[i];

   switch (topAtual){
      case topsArray[i] === topsArray[length-1]: topAtual[1];
      break;
      
      //continuar a logica aqui


   }
   
}

function previousTops(){
   let topAtual = topsArray[i];

   
}

function mudarImagem(){

   
      
}


let topsArray = [

   {"number": 1, "name":"vestidoRosa", "imgSource": "/images/pink_dress.png"},

   {"number": 2, "name":"topVerde", "imgSource": "/images/Top_verde.png"}
         
]

let accesoriesArray = [

   {"number" : 1, "name" : "laço", "imgSource": "/images/laço.png"}

] 
