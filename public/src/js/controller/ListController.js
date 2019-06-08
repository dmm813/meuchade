export default class listController {
  constructor(list) {
    this.listModel = list;
    //this.btnSaveEl = document.getElementById("id-reg-btnSave");
    this.registerList();
  }
  registerList() {
    // this.btnSaveEl.addEventListener("click", (event)=>{
    //   event.preventDefault();
    //   let listJson = {
    //     item:'liquidificador',
    //     qtde:'1',
    //     name:"davidson",
    //     tel:"996409225"
    //   };
    //   this.listModel.insertList(listJson);
    // });
  }

  loadUserJson(form) {
    var userJson = {};
    [...form].forEach(element => {
      if (element.name.match(/txt.\w+/g)) {
        userJson[element.name.split("-")[1]] = element.value;
      }
    });
    console.log(userJson);
    return userJson;
  }
}