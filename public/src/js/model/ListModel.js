export default class ListModel{
    constructor(){
      this.id="";
      this.event = "";
      this.date = "";
      this.address = {};
      this.itens = {};
    }
    get Event(){
      return this.event;
    }
    set Event(value){
      this.event = value;
    }
    get Date(){
      return this.date;
    }
    set Date(value){
      this.date = value;
    }
    get Address(){
      return this.address;
    }
    set Address(value){
      this.address = value;
    }
    get Itens(){
      return this.itens;
    }
    set Itens(value){
      this.itens = value;
    }
    getRefernce(route){
      return firebase.database().ref(route);
    }
    returnListJson(){
      let list = {};
      if(this.id){
        list = {
          id = this.Id,
          event = this.Event,
          date = this.Date,
          address = this.Address,
          itens = this.Itens
        };
      }else{
        list = {
          event = this.Event,
          date = this.Date,
          address = this.Address,
          itens = this.Itens
        };
      }
      return list;
    }
    loadListFromForm(listJson){
      if(listJson.id){
        this.id = listJson.id;
      }
      this.event = listJson.event;
      this.date = listJson.date;
      this.address = listJosn.address;
      this.itens = listJson.itens;
    }

    insertList(listJson){
      this.loadListFromForm(listJson);
      this.getRefernce('/list').push(this.returnListJson());
    }


}