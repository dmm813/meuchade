import ListModel from "./src/js/model/ListModel.js";
import ListController from "./src/js/controller/ListController.js";
const tableList = document.getElementById('shipList').getElementsByTagName('tbody')[0];
const modal = document.getElementById("modal");
const salvarLista = document.getElementById("salvarLista");
const closeBtn = document.getElementsByClassName("closeModal");

const model = new ListModel();
const controller = new ListController(model);
model.listItens().then(err => {
  console.log(err);
}, content => {
  content.forEach((value, i) => {
    console.log(i);
    if (value.val().name == "") {
      const btn = document.createElement('button');
      btn.className = 'btn btn-success';
      btn.innerHTML = '<i class="fa fa-gift" aria-hidden="true"></i>';
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const item = document.getElementById("item");
        const key = value.key;
        console.log(key)
        //modal.style.display = "block";
        salvarLista.addEventListener('click', function () {
          const responsavel = document.getElementById('responsavel').value;
          const telefone = document.getElementById('telefone').value;
          const item = document.getElementById("item").innerHTML;
          if (responsavel != "" && telefone != "") {
            const itens = {
              name: responsavel,
              tel: telefone,
              qtde: "1",
              item: item
            }
            console.log(itens, key);
            model.pushList(key, itens);
          } else {
            alert("Campo vazio!");
          }
        })
        item.innerHTML = value.val().item;

        closeModal()
      });
      addLinha(value.val().item, value.val().qtde, value.val().name, value.val().tel, btn);
    } else {
      const testeDiv = document.createElement('div');
      testeDiv.innerHTML = '';
      addLinha(value.val().item, value.val().qtde, value.val().name, value.val().tel, testeDiv, true);
    }

  });
  document.getElementById("loading").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("loading").remove();
  }, 500);
});

closeBtn[0].addEventListener('click', function () {
  closeModal();
})
closeBtn[1].addEventListener('click', function () {
  closeModal();
})
function closeModal() {

  modal.classList.toggle("mostraModal")
}
function addLinha(cel1, cel2, cel3, cel4, cel5, disabilitado) {
  const admin = window.location.pathname.match(/admin/i);
  let row = tableList.insertRow(0);
  if (admin) {
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
  } else {
    if (disabilitado)
      return
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell5 = row.insertCell(2);
    cell1.innerHTML = cel1;
    cell2.innerHTML = cel2;
    cell5.appendChild(cel5);
  }
  if (disabilitado) {
    row.style.opacity = "0.3";
  }
}


