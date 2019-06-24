export default class UserModel{
	constructor(){
		this.id = "";
		this.item = "";
		this.qtde = "";
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
	returnUserJson(){
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
        qtde:this.Qtde,
		name:this.Name,
		tel:this.Tel
    }
  }
		return user;
	}
	loadUserFromForm(jsonUser){
    if(jsonUser.id){
      this.Id = jsonUser.id;
    }
		this.Name = jsonUser.name;
		this.Qtde = jsonUser.qtde;
		this.pass = jsonUser.pass;
	}
	insertUser(userJson){
		this.loadUserFromForm(userJson);
    this.getReference('/list').push(this.returnUserJson());
	}
  getReference(route){
    return firebase.database().ref(route);
  }
}