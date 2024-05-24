function Play(){
   //mudar do modo de menu para modo de jogo
   //fazer com que apareça a Samara e os menus do jogo
   document.getElementById("armario").style.visibility = "visible";
   document.getElementById("victoryScreen").style.visibility = "hidden";
   document.getElementById("botaoFinish").style.visibility = "visible";
}

function Finish(){
   document.getElementById("armario").style.visibility = "hidden";
   document.getElementById("victoryScreen").style.visibility = "visible";
   document.getElementById("botaoFinish").style.visibility = "hidden";

}

//-------------------------------------------------
let state={
   top:0,
   accessory:0,

}


function topsNext(){
  let top = document.querySelector("#top");
  let imagemTop =document.getElementById("top");
  
  if(state.top < 3){

     state.top++;
     top.setAttribute("class", `top${state.top}`);
  }else if(state.top === 3){
     state.top = 0;
     top.setAttribute("class", `top${state.top}`);
  }  

  switch (state.top){
   case (0): imagemTop.src = "./images/samara_blush_default.png";
    break;
   case (1): imagemTop.src = "./images/Top_verde.png";
    break;
   case (2): imagemTop.src = "./images/pink_dress.png";
    break;
  }
}

function topsPrevious(){
   let top = document.querySelector("#top");
   let imagemTop = document.getElementById("top");

   if(state.top < 3){

      state.top--;
      top.setAttribute("class", `top${state.top}`);
   }else if(state.top === 0){
      state.top = 3; 
      top.setAttribute("class", `top${state.top}`);
   } 

   switch (state.top){
      case (0): imagemTop.src = "./images/samara_blush_default.png";
       break;
      case (1): imagemTop.src = "./images/Top_verde.png";
       break;
      case (2): imagemTop.src = "./images/pink_dress.png";
       break;
   
     }

}

function acessoryNext(){
   let accessory = document.querySelector("#accessory");
   let imagemAccessory = document.getElementById("accessory");

   if(state.accessory < 1){
      state.accessory++;
      accessory.setAttribute("class", `accessory${state.accessory}`);

   }else if (state.accessory === 1){
      state.accessory = 1;
      accessory.setAttribute("class", `accessory${state.accessory}`);
   }

   

}




