export default class UserModel{
	constructor(){
		this.id = "";
		this.name = "";
		this.email = "";
    this.pass = "";
	}
	get Id(){
		return this.id;
	}
	set Id(value){
		if(String(value).length>0){
			this.id = value;
		}		
	}
	get Name(){
		return this.name;
	}
	set Name(value){
		this.name = value;
	}
	get Email(){
		return this.email;
	}
	set Email(value){
		this.email = value;
	}
	get Pass(){
		return this.pass;
	}
	set Pass(value){
		this.pass = value;
	}
	returnUserJson(){
    let user = {};
    if(this.id){ 
      user={
        id:this.Id,
        name:this.Name,
        email:this.Email,
        pass:this.Pass
      } 
  }else{
    user={
			name:this.Name,
			email:this.Email,
			pass:this.Pass
    }
  }
		return user;
	}
	loadUserFromForm(jsonUser){
    if(jsonUser.id){
      this.Id = jsonUser.id;
    }
		this.Name = jsonUser.name;
		this.Email = jsonUser.email;
		this.pass = jsonUser.pass;
	}
	insertUser(userJson){
		console.log(userJson);
		this.loadUserFromForm(userJson);
    	console.log(this.returnUserJson());
    	this.getReference('/user').push(this.returnUserJson());
	}
  getReference(route){
    return firebase.database().ref(route);
  }
}