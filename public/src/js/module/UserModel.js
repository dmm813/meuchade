export default class UserController{
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
		this.id = value;
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
	returUserJson(){
	 let user={
			id:this.id,
			name:this.name,
			email:this.email,
			pass:this.pass
		}
		return user;
	}
}