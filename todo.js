let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");
let text = document.querySelector(".text");

function Add(){
    if(input1.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${input1.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        input1.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}
function Add1(){
    if(input2.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${input2.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        input2.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}
