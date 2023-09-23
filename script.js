let displayEl=document.getElementById("display")



function Solve(val){

displayEl.value+=val
}
function Result(){
displayEl.value=eval(displayEl.value)
}
function Clear(){
displayEl.value="";
}
function Delete(){
displayEl.value=displayEl.value.slice(0,-1);
}