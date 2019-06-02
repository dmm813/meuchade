export default class UserController{
  constructor(user){
    this.userModel = user;
    this.btnLoginEl = document.getElementById("id-btn-login");
    this.btnRegisterEl = document.getElementById("id-btn-register");
    this.btnSaveEl = document.getElementById("id-reg-btnSave");
    this.loginUser();   
  }

  loginUser(){
    this.btnLoginEl.addEventListener("click", (event)=>{
      event.preventDefault();
      let form = document.getElementById("id-form-register")
      let userJson = this.loadUserJson(form);
      console.log(userJson);
    });
  }

  loadUserJson(form){
    var userJson = {};
    [...form].forEach(element => {
      if (!element.name.match(/btn.\w+/g)){
        userJson[element.name] =  element.value;
      }
    });
    return userJson;
  }
}