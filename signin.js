function pasuser(form) {
    if (form.id.value=="Test") { 
        if (form.pass.value=="User") { location="index.html" } 
        else { alert("Wrong Password") } }
    else { alert("Wrong Username") } 
} 


const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});