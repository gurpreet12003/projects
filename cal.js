let button=document.querySelectorAll(".btn")
console.log(button)
for(let i=0; i < button.length; i++){
   button[i].onclick=function(){
    let v=button[i].innerHTML
    console.log(v)
    document.querySelector("#txt").value+=v
   } 

};
let solve=document.querySelector(".btn_eqal");
solve.onclick=function(){
   let eq=document.querySelector("#txt").value;
let new_solve=eval(eq)
document.querySelector("#txt").value=new_solve
}
let clear=document.querySelector(".clr");
clear.onclick=function(){
new_solve=" "
document.querySelector("#txt").value=new_solve
}
let cut=document.querySelector(".cut_1")
cut.onclick=function(){
    let currentValue = document.querySelector("#txt").value;
    document.querySelector("#txt").value = currentValue.slice(0, -1);
}
let btn1 = document.querySelector(".btn_0");
btn1.onclick=function(){
   let inputField=document.querySelector("#txt");
   console.log(inputField)

if (inputField.value==" "  
   ||(inputField.value==="0" && inputField.value.length=== 1)
) {
   console.log("in if")
   document.querySelector("#txt").value=0;
}
 else if (inputField.value!=="0" && inputField.value.length!== 0) {
   console.log("in els eif")
   document.querySelector("#txt").value += "0";
}
}