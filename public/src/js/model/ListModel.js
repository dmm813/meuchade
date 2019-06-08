export default class ListModel{
	constructor(){
		this.id = "";
		this.item = "";
		this.qtde = "1";
		this.name = "";
		this.tel = "";
	}
	get Id(){
		return this.id;
	}
	set Id(value){
		if(String(value).length>0){
			this.id = value;
		}		
	}
	get Item(){
		return this.item;
	}
	set Item(value){
		this.item = value;
	}
	get Qtde(){
		return this.qtde;
	}
	set Qtde(value){
		this.qtde = value;
	}
	get Name(){
		return this.name;
	}
	set Name(value){
		this.name = value;
	}
	get Tel(){
		return this.tel;
	}
	set Tel(value){
		this.tel = value;
	}
	returnListJson(){
    let user = {};
    if(this.id){ 
      user={
        id:this.Id,
        item:this.Item,
        qtde:this.Qtde,
		    name:this.Name,
		    tel:this.Tel
      } 
  }else{
    user={
		item:this.Item,
    qtde:"1",
		name:this.Name,
		tel:this.Tel
    }
  }
		return user;
	}
	loadListFromForm(jsonList){
    if(jsonList.id){
      this.Id = jsonList.id;
    }
    this.Item = jsonList.item;
    this.Name = jsonList.name;
    this.Tel = jsonList.tel
	}
  insertList(listJson){
	  this.loadListFromForm(listJson);
    this.getReference('/list').push(this.returnListJson());
  }
  listItens(){
    return new Promise((reject, resolve) =>{
      this.getReference('/list').once('value',(item)=>{
        if(!item.val()){
          resolve(item.val());
        }else{
          reject(item.val());
        }  
      });
        
    })    
  }
  getReference(route){
    return firebase.database().ref(route);
  }
}