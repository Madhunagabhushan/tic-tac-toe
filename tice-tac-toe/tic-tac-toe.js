let btn=document.querySelectorAll(".b");
let reset_btn=document.querySelector("#reset");
let msg=document.querySelector("#message");
let new_game=document.querySelector("#new_game");
let head=document.querySelector("#show_result");
let turn=true;
let winArr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
btn.forEach((el)=>{
  el.addEventListener("click",()=>{
    console.log("button is clicked");
    if(turn){
      el.innerText="O";
      turn=false;
    }else{
      el.innerText="X";
      turn=true;
    }
    el.disabled=true;
    winner();
  });
});
let disable=()=>{
  for(let button of btn){
    button.disabled=true;
  }
}
let winner=()=>{
  for(let item of winArr){
    // console.log(item[0],item[1],item[2]);
    let v1=btn[item[0]].innerText;
    let v2=btn[item[1]].innerText;
    let v3=btn[item[2]].innerText;
    // console.log(v1,v2,v3);
    if(v1!="" && v2!="" && v3!=""){
      if(v1===v2 && v2===v3){
        console.log("winner is",v1);
        disable();
        showResult(v1);
      }
      }
    }
  };
let showResult=(v1)=>{
    head.innerText=`congratulations, ${v1} has won`;
    msg.classList.remove("hide");
}
let reset=()=>{
  turn=true;
  enable();
  msg.classList.add("hide");
}
let enable=()=>{
  for(let item of btn){
    item.disabled=false;
    item.innerText="";
  }
}
let newGame=()=>{
  reset();
}
reset_btn.addEventListener("click",reset);
new_game.addEventListener("click",newGame);