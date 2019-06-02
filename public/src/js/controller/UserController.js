export default class UserController{
  constructor(user){
    this.userModel = user;
    this.btnLoginEl = document.getElementById("id-btn-login");
    this.btnRegisterEl = document.getElementById("id-btn-register");
    this.btnSaveEl = document.getElementById("id-reg-btnSave");
    this.loginUser();  
    this.ableFormRegister(); 
    this.postUser();
  }

  loginUser(){
    this.btnLoginEl.addEventListener("click", (event)=>{
      event.preventDefault();
      let form = document.getElementById("id-form-login")
      let userJson = this.loadUserJson(form);
      console.log(userJson);
    });
  }
  registerUser(){
    this.btnSaveEl.addEventListener("click", (event)=>{
      event.preventDefault();
      let form = document.getElementById("id-form-login")
      let userJson = this.loadUserJson(form);
      console.log(userJson);
    });
  }

  loadUserJson(form){
    var userJson = {};
    [...form].forEach(element => {
      if (element.name.match(/txt.\w+/g)){
        userJson[element.name] =  element.value;
      }
    });
    return userJson;
  }
  ableFormRegister(){
    this.btnRegisterEl.addEventListener("click", (event)=>{
      event.preventDefault();
      let formreg = document.getElementById("id-form-register");
      let formlog = document.getElementById("id-form-login");
      formlog.style.display = "none";
      formreg.style.display = "inline-block";
    });
  }
  postUser(){
    this.btnSaveEl.addEventListener('click', (event)=>{
      event.preventDefault();
      let formreg = document.getElementById('id-form-register')
      let userJson = this.loadUserJson(formreg);
      this.userModel.insertUser(userJson);
    });
  }
}