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
	 let user={
			id:this.Id,
			name:this.Name,
			email:this.Email,
			pass:this.Pass
		}
		return user;
	}
	loadUserFromForm(jsonUser){
		this.Id = jsonUser.id;
		this.Name = jsonUser.name;
		this.Email = jsonUser.email;
		this.pass = jsonUser.pass;
	}
	insertUser(userJson){
		console.log(userJson);
		this.loadUserFromForm(userJson);
		console.log(this.returnUserJson());
		let db = firebase.database().ref('/user');
	}

}