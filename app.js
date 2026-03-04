let btn=document.querySelector("button");

btn.addEventListener("click", function(){
   
let heading=document.querySelector("h1");
let color=sayhello();
heading.innerText=color;
let div=document.querySelector("div");
div.style.backgroundColor=color;
 document.getElementById("hello").style.backgroundColor= color;
console.log("you did");
})
function sayhello(){
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
let blue=Math.floor(Math.random() * 255);
let color=`rgb(${red},${green},${blue})`;
return color;




}
console.log("working");
let todo=[];
let req=prompt("enter request");

    
while(true){
  
    if(req=="aditya"){
        alert("Enter your details");
        break;
    }

    if(req=="quit"){
        console.log("you are quiting");
        break;

    }
      else if(req=="list"){
             console.log("--------->");
    for(let i=0;i<todo.length;i++){
        console.log(i,todo[i]);
    }}
        else if(req=="add"){
            let task=prompt("what you want to add");
            todo.push(task);
            console.log("task added");

        }
     
        
         else if(req=="delete"){
            let idx=prompt("enter task index");
            todo.splice(idx,1);
            console.log("task deleted");
        }
    req=prompt("enter request");




}










