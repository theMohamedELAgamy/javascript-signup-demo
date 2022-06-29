let register=()=>{
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    let repeatedPassWord=document.getElementById('repeatedPassWord').value
    if(validation(name,email,password,repeatedPassWord)){
        let infosection=document.getElementById('info')
        let signup=document.getElementById('signup')
        let username=document.getElementById('username')
        let useremail=document.getElementById('useremail')
        username.innerHTML=name
        useremail.innerHTML=email
        signup.style.display='none';
        infosection.style.display='block';
    }   
}

let validatename =(e)=>{
    let emailerror=document.getElementById('nameerror')
    if(e.target.value.length<6){
        emailerror.style.display='block';
    }else{
        emailerror.style.display='none';
    }
}
let validateemail =(e)=>{
    const emailRegularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/;
    let emailerror=document.getElementById('emailerror')
    if(emailRegularExpression.test(e.target.value)){
        emailerror.style.display='none';
    }else{
        emailerror.style.display='block';
    }
}
let validatepassword =(e)=>{
    const passWordRegularExpression=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    let passworderror=document.getElementById('passworderror')
    if(passWordRegularExpression.test(e.target.value)){
        passworderror.style.display='none';
    }else{
        passworderror.style.display='block';
    }
}
let validaterepeatedpassword =(e)=>{
    let password=document.getElementById('password').value
    let passworderror=document.getElementById('repeatedpassworderror')
    if(password==e.target.value){
        passworderror.style.display='none';
    }else{
        passworderror.style.display='block';
    }
}
let validation=(name,email,password,repeatedPassWord)=>{ 
    const emailRegularExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/;
    const passWordRegularExpression=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    if(name.length>6 && emailRegularExpression.test(email) && password==repeatedPassWord && passWordRegularExpression.test(password)){
        return true
    }else{
        let error=document.getElementById('error')
        error.style.display='block';
    }
    }
    
