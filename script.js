let input=document.getElementById("taskinput");
let btn=document.getElementById("addtask");
let emptdiv=document.getElementById("mydiv");
btn.addEventListener("click",function() {
  if(input.value!==""){
    let paragraph=document.createElement("p");
    paragraph.innerText=input.value;
    emptdiv.appendChild(paragraph);
    paragraph.addEventListener("click", function() {
  paragraph.style.textDecoration = "line-through";
});
 paragraph.addEventListener("dblclick", function() {
  emptdiv.removeChild(paragraph);
});

}
input.value="";
});
