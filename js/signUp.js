let data;
let name;
let email;
let datas=[];
let curentIndex=0;


if(localStorage.getItem('users').length != null){
    datas = JSON.parse(localStorage.getItem('users'));
    

}
function registerCallback(response){
    console.log(response);
      data=jwtDecode(response.credential)
    console.log(data);
    let personeUser={

    name :data.name,
    email :data.email,
    password:"Ahmed123",
    }

    for(let i=0;i<datas.length;i++){
        if(datas[i].email==personeUser.email){
            alert("Email is already exist");
            window.location.href ="login.html";
            return;
        }
          
    }
    datas.push(personeUser)
    localStorage.setItem('users',JSON.stringify(datas))
  
    curentIndex =datas.length-1;
    goToHome()

}




let registerName = document.getElementById('register-name')
let registerEmail = document.getElementById('register-email')
let registerPassword = document.getElementById('register-password')
let btnSignUp = document.getElementById('register')
let nameValid = document.getElementById('name-valid')
let nameValidRegx = document.getElementById('name-validRegx')
let emailValid = document.getElementById('email-valid')
let emailvalidRegx = document.getElementById('email-validRegx')
let emailExist = document.getElementById('email-exist')
let passValid = document.getElementById('pass-valid')
let passValidRgex= document.getElementById('pass-validRegx')
let formRequire = document.getElementById('form-require')
let vehicle1= document.getElementById('vehicle1')



function signUp() {
    if(validationName() == true && validationEmail() == true &&validationPassword() ==true && vehicle1.checked == true) {
    let person ={
        name:registerName.value,
        email:registerEmail.value,
        password:registerPassword.value
    }
    datas.push(person);
    localStorage.setItem('users',JSON.stringify(datas))
    goToHome()
    clear()
    }else{
      alert(`you must agreeof the terms first`);
        formRequire.classList.replace('d-none' ,'d-block')

    }
}

function clear(){
    registerName.value = '';
    registerEmail.value = '';
    registerPassword.value = '';
    vehicle1.checked = false;
    formRequire.classList.replace('d-block' ,'d-none')
    nameValid.classList.replace('d-block' ,'d-block')
    nameValidRegx.classList.replace('d-block' ,'d-block')
    registerName.classList.remove('is-valid')
    emailValid.classList.replace('d-block' ,'d-block')
    emailvalidRegx.classList.replace('d-block' ,'d-block')
    registerEmail.classList.remove('is-valid')
    emailExist.classList.replace('d-block' ,'d-block')
    passValid.classList.replace('d-block' ,'d-block')
    passValidRgex.classList.replace('d-block' ,'d-block')
    registerPassword.classList.remove('is-valid')


    
}
function goToHome(){
    localStorage.setItem('indexArrSignUp',curentIndex);
    window.location.href = 'home.html';
    
}


function validationName(){
    let rgex=/^[A-Z][a-z]{2,6}\s?[A-Za-z]{0,7}$/;
    if(registerName.value == ""){
        nameValid.classList.replace('d-none','d-block')
    }else{
        nameValid.classList.replace('d-block','d-none')

        if(rgex.test(registerName.value)){
            if(registerName.classList.contains('is-invalid')){
                registerName.classList.remove('is-invalid');
                registerName.classList.add('is-valid');
                nameValidRegx.classList.replace('d-block','d-none')

            }else{
                    registerName.classList.add('is-valid');
                    nameValidRegx.classList.replace('d-block','d-none')

                 }
                return true;
        }else{
            if(registerName.classList.contains('is-valid')){
                registerName.classList.remove('is-valid');
                registerName.classList.add('is-invalid');
                nameValidRegx.classList.replace('d-none','d-block')
                
        }else{
            registerName.classList.add('is-invalid');
            nameValidRegx.classList.replace('d-none','d-block')

        }
        return false;
    }
    }
}




function validationEmail(){
    let rgex=/^[a-zA-z0-9._%+-]+@(gmail|yahoo)\.com$/;
    if(registerEmail.value == ""){
        emailValid.classList.replace('d-none','d-block')
        }else{
            emailValid.classList.replace('d-block','d-none')
            for(let i=0; i<datas.length;i++){
                if(datas[i].email == registerEmail.value){
                    emailExist.classList.replace('d-none','d-block')
                    registerEmail.classList.add('is-invalid');

                    return false;
                    }else{
                        emailExist.classList.replace('d-block','d-none');
                        curentIndex = datas.length;
                    }
            }
            if(rgex.test(registerEmail.value)){
                if(registerEmail.classList.contains('is-invalid')){
                    registerEmail.classList.remove('is-invalid');
                    registerEmail.classList.add('is-valid');
                    emailvalidRegx.classList.replace('d-block','d-none')

                    }else{
                        registerEmail.classList.add('is-valid');
                        emailvalidRegx.classList.replace('d-block','d-none')

                        }
                        return true;
                        }else{
                            if(registerEmail.classList.contains('is-valid')){
                                registerEmail.classList.remove('is-valid');
                                registerEmail.classList.add('is-invalid');
                                emailvalidRegx.classList.replace('d-none','d-block')
                                }else{
                                    registerEmail.classList.add('is-invalid');
                                    emailvalidRegx.classList.replace('d-none','d-block')

                                    }
                                    return false;
                                    }
                                    }
}

function validationPassword(){
     let rgex=/^[A-Za-z\d@$!%*#?&]{8,14}$/;
    if(registerPassword.value ==""){
        passValid.classList.replace('d-none','d-block')
        }else{
            passValid.classList.replace('d-block','d-none')
            if(rgex.test(registerPassword.value)){
                if(registerPassword.classList.contains('is-invalid')){
                    registerPassword.classList.remove('is-invalid');
                    registerPassword.classList.add('is-valid');
                    passValidRgex.classList.replace('d-block','d-none')

                    }else{
                        registerPassword.classList.add('is-valid');
                    passValidRgex.classList.replace('d-block','d-none')

                        }
                        return true;
                        }else{
                            if(registerPassword.classList.contains('is-valid')){
                                registerPassword.classList.remove('is-valid');
                                registerPassword.classList.add('is-invalid');
                                passValidRgex.classList.replace('d-none','d-block')
                                }else{
                                    registerPassword.classList.add('is-invalid');
                                    passValidRgex.classList.replace('d-none','d-block')

                                    }
                                    return false;
                                }
    }
}
