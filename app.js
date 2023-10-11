let btn=document.querySelector("button");
let ul=document.querySelector("ul")
let inp=document.querySelector("input");

btn.addEventListener("click", function(){
    let listItem=document.createElement("li");
    listItem.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete")
    listItem.appendChild(delBtn)
    ul.appendChild(listItem)
    console.log(inp.value);
    inp.value="";
})

let delBtns=document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par=this.parentElement;
        par.remove();
    })
}

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let item=event.target.parentElement;
        item.remove();
        console.log("delete")
    }
})