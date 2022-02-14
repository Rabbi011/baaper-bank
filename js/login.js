document.getElementById('login-submit').addEventListener('click',function(){
    // console.log('button clicked');
    const userEmailFild = document.getElementById('user-email');
    const userEmailValue = userEmailFild.value;
    // console.log(userEmailValue);
    const userPasswordFild = document.getElementById('user-password');
    const userPasswordValue = userPasswordFild.value;
    // console.log(userPasswordValue);
    if(userEmailValue == 'baap@gmail.com' && userPasswordValue == 'mababa' ){
        // console.log('valid user name and password');
        window.location.href='banking.html';
    }
})