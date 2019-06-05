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
      
    });
  }

  loadUserJson(form){
    var userJson = {};
    [...form].forEach(element => {
      if (element.name.match(/txt.\w+/g)){
        userJson[element.name.split("-")[1]] =  element.value;
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
      if(!this.emailValidate()){
        alert("email inválido!");
        return;
      }
      if(!this.passValidate()){
        alert("senhas não conferem!");
        return;
      } 
      let formreg = document.getElementById('id-form-register')
      let userJson = this.loadUserJson(formreg);
      this.userModel.insertUser(userJson);
    });
  }
  emailValidate(){
    let email = document.getElementById("id-reg-email");
    return (email.value.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/gi));
  }
  passValidate(){
    let pass = document.getElementById("id-reg-pass");
    let confirmPass = document.getElementById("id-reg-confirmPass");
    return (pass.value == confirmPass.value);
  }
}