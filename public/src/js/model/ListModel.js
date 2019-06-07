export default class ListModel{
    constructor(){
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
}