let username=document.querySelector('#username');
let password =document.querySelector('#password');
let getUsername=localStorage.getItem('username');
let getPassword=localStorage.getItem('password');
let SignIn=document.querySelector('#SignIn');
SignIn.addEventListener("click",function(e){
e.preventDefault();
if(username.value===""||password.value==="")
    {
        alert('please fill fields');
    }else{
        if((getUsername && getUsername.trim() === username.value )&&(getPassword && getPassword.trim() ===password.value)){
            setTimeout(function(){
                window.location="index.html"
    
            },1500)
        }
        else{
            alert('username and password are wrong');
        }
    }
    
});