var a=document.querySelector("#add")
var b=document.querySelector("h4")
var c=document.querySelector("#rem")
a.addEventListener("click",function(){
    b.innerHTML="Girl friend"
    b.style.color="green"
})
c.addEventListener("click",function(){
    b.innerHTML="Stranger"
    b.style.color="red"
})