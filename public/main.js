import ListModel from "./src/js/model/ListModel.js";
import ListController from "./src/js/controller/ListController.js";
const tableList = document.getElementById('shipList').getElementsByTagName('tbody')[0];
      const modal = document.getElementById("modal");
      const closeBtn = document.getElementsByClassName("closeModal");
      
const model = new ListModel();
const controller = new ListController(model);
model.listItens().then( err=>{
  console.log(err);
}, content=>{
  //console.log(content);
  content.forEach((value)=>{
    console.log(value.val());
    //addLinha(value.item, value.qtd, value.name, value.tel);
  });
});
      
closeBtn[0].addEventListener('click',function(){
  closeModal();
})
closeBtn[1].addEventListener('click',function(){
  closeModal();
})
function closeModal() {
  
  modal.classList.toggle("mostraModal")
}
function addLinha(cel1, cel2, cel3, cel4, cel5) {
console.log(cel5);
let row = tableList.insertRow(0);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
let cell5 = row.insertCell(4);
cell1.innerHTML = cel1;
cell2.innerHTML = cel2;
cell3.innerHTML = cel3;
cell4.innerHTML = cel4;
cell5.appendChild(cel5);
}


