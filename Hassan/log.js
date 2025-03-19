const button = document.querySelector('.log-in');
const infoClass = document.querySelector('.info');

button.addEventListener('click', function () {
    const email = document.querySelector('.email-info');
    const password = document.querySelector('.password-info');


    if (email.value == "taha@gmail.com" && password.value == "TahaRizvi"){
        window.location.href = "index.html";
    }
    else{
        infoClass.innerText = "Your email or password is wrong!";
    }
});