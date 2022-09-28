let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let ulList = document.createElement("ol");
let elTitle = document.createElement("h1");
let elBox = document.querySelector(".box");
let array = [];


elForm.addEventListener("submit", function(evt) {

    evt.preventDefault();

    let elInputValue = elInput.value.trim();
  

    let newObj = {
        id:array.length +1,
        name:elInputValue
    };

    if(elInputValue !== "") {
        array.push(newObj);
        
    }
    else{
        alert("Son kiritng");
    }
    elInput.value = ""; 

    ulList.innerHTML="";

    for (const i of array) {
        let elItem = document.createElement("li");

        elItem.textContent = i.name;
    
        console.log(i.name);
 
        ulList.appendChild(elItem);
        elBox.appendChild(ulList);
    }
    

})