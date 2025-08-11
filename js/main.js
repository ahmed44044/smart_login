let data;
let name;
let email;
let datas=[];

let logInEmail =document.getElementById('login-email');
let logInPass =document.getElementById('login-pass');
let btnLogIn =document.getElementById('btn-login');
let emailValid =document.getElementById('email-valid');
let emailvalidRegx = document.getElementById('email-validRegx')
let passValid =document.getElementById('pass-valid');
let passValidRgex= document.getElementById('pass-validRegx')
let checkInput =document.getElementById('check-input');
let curentIndex=0;
let vehicle2= document.getElementById('vehicle2')



btnLogIn.addEventListener('click',logIn)
logInEmail.addEventListener('keyup',validationLoginEmail)
logInPass.addEventListener('keyup',validationLoginPassword)


if(localStorage.getItem('users').length != null){
    datas =JSON.parse(localStorage.getItem('users'))
}
function loginCallback(response)
{
    data=jwtDecode(response.credential)

        let cond ;
    for(let i=0; i<datas.length;i++){
        if(data.email == datas[i].email && data.name == datas[i].name){
            cond = true ;
            curentIndex=i
        }
    }
    if(cond ==true){
        console.log(curentIndex)
    moveToNext()

    }
    else{
             let personeUser={

                    name :data.name,
                    email :data.email,
                    password:12345,
                    }

                    datas.push(personeUser)
                    localStorage.setItem('users',JSON.stringify(datas))
                    curentIndex =datas.length-1;
                    moveToNext()
        }


}




function logIn(){
    let cond ;
    for(let i=0; i<datas.length;i++){
        if(logInEmail.value == datas[i].email && logInPass.value == datas[i].password){
            cond = true ;
            curentIndex=i
        }
    }
    if(cond ==true){
    moveToNext()
    clear()

    }
    else{
            checkInput.classList.replace('d-none','d-block')
        }

}
function moveToNext(){
    localStorage.setItem('indexArrSignUp',curentIndex);
    window.location.href='home.html'
}
function clear(){
    logInEmail.value = '';
    logInPass.value = '';
    checkInput.classList.replace('d-block','d-none')
    vehicle2.checked = false;
    emailValid.classList.replace('d-block' ,'d-none')
    emailvalidRegx.classList.replace('d-block' ,'d-none')
    logInEmail.classList.remove('is-valid')
    passValid.classList.replace('d-block' ,'d-none')
    passvalidRegx.classList.replace('d-block' ,'d-none')
    logInPass.classList.remove('is-valid')

}


function validationLoginEmail(){
    let rgex=/^[a-zA-z0-9._%+-]+@(gmail|yahoo)\.com$/;
    if(logInEmail.value == ""){
        emailValid.classList.replace('d-none','d-block')
        }else{
            emailValid.classList.replace('d-block','d-none')
            if(rgex.test(logInEmail.value)){
                if(logInEmail.classList.contains('is-invalid')){
                    logInEmail.classList.remove('is-invalid');
                    logInEmail.classList.add('is-valid');
                    emailvalidRegx.classList.replace('d-block','d-none')

                    }else{
                        logInEmail.classList.add('is-valid');
                        emailvalidRegx.classList.replace('d-block','d-none')

                        }
                        return true;
                        }else{
                            if(logInEmail.classList.contains('is-valid')){
                                logInEmail.classList.remove('is-valid');
                                logInEmail.classList.add('is-invalid');
                                emailvalidRegx.classList.replace('d-none','d-block')

                                }else{
                                    logInEmail.classList.add('is-invalid');
                                    emailvalidRegx.classList.replace('d-none','d-block')

                                    }
                                    return false;
                                    }
                                    }
}



function validationLoginPassword(){
    let rgex=/^[A-Za-z\d@$!%*#?&]{8,14}$/;
    if(logInPass.value ==""){
        passValid.classList.replace('d-none','d-block')
        }else{
            passValid.classList.replace('d-block','d-none')
            if(rgex.test(logInPass.value)){
                if(logInPass.classList.contains('is-invalid')){
                    logInPass.classList.remove('is-invalid');
                    logInPass.classList.add('is-valid');
                    passValidRgex.classList.replace('d-block','d-none')

                    }else{
                        logInPass.classList.add('is-valid');
                        passValidRgex.classList.replace('d-block','d-none')

                        }
                        return true;
                        }else{
                            if(logInPass.classList.contains('is-valid')){
                                logInPass.classList.remove('is-valid');
                                logInPass.classList.add('is-invalid');
                                passValidRgex.classList.replace('d-none','d-block')

                                }else{
                                    logInPass.classList.add('is-invalid');
                                    passValidRgex.classList.replace('d-none','d-block')

                                    }
                                    return false;
                                }
    }
}

