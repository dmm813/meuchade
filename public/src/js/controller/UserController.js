export default class UserController{
  constructor(user){
    this.userModel = user;
    this.btnLoginEl = document.getElementById("id-btn-login");
    this.frmLogin = document.getElementById("id-form-login");
    this.loginUser();   
  }

  loginUser(){
    console.log(this.btnLoginEl);
    this.btnLoginEl.addEventListener("click", (event)=>{
      event.preventDefault();
      [...this.frmLogin].forEach(element => {
        console.log(element.name);
      })
    });
  }
}