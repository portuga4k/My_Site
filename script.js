function Play(){
   //mudar do modo de menu para modo de jogo
   //fazer com que apareça a Samara e os menus do jogo
   const menuPrincipal = document.getElementById("menuPrincipal");
   const playSpace = document.getElementsByClassName("playSpace");
   const samaraSprite = document.getElementsByClassName("sprite");
   
   

}

function Finish(){
   document.getElementsByClassName("playSpace").style.display = "none";
   document.getElementById("victoryScreen").style.display = "block";

}



//-------------------------------------------------
let state={

   top:0,
   accessory:0,

}




function topsNext(){
  let top = document.querySelector("#top");
  let imagemTop =document.getElementById("top");

  if(state.top<3){

   state.top++;
   top.setAttribute("class", `top${state.top}`);
  }else if(state.top === 3){
   state.top = 0;
   top.setAttribute("class", `top${state.top}`);
  }  

  switch (state.top){
   case (0): imagemTop.src = "./images/samara_blush_body_default.png";
    break;
   case (1): imagemTop.src = "./images/Top_verde.png";
    break;
   case (2): imagemTop.src = "./images/pink_dress.png";
    break;

  }

}

function topsPrevious(){
   let top = document.querySelector("#top");

   if(state.top > 3){

      state.top--;
      top.setAttribute("class", `top${state.top}`);
     }else if(state.top === 0){
      state.top = 3;
      top.setAttribute("class", `top${state.top}`);
     } 


}




