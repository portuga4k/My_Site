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
let state={

   top:0,
   accessory:0,

}

topsNext();


function topsNext(){
  let top = document.querySelector("#top");

  if(state.top<3){

   state.top++;
   top.setAttribute("class", `top${state.top}`);
  }else if(state.top === 3){
   state.top = 0;
   top.setAttribute("class", `top${state.top}`);
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




