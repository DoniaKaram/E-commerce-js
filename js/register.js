let email=document.querySelector('#email');
let username=document.querySelector('#username');
let password =document.querySelector('#password');
let SignUp=document.querySelector('#SignUp');
SignUp.addEventListener("click",function(e){

    e.preventDefault();
    if(username.value===""||password.value===""||email.value==="")
        {
            alert('please fill fields');
        }
    else{
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
        localStorage.setItem("email",email.value);
        setTimeout(function(){
            window.location="login.html"

        },1500)


    }
})