function showForgot(){
loginBox.classList.add("hidden");
forgotBox.classList.remove("hidden");
}

function showLogin(){
forgotBox.classList.add("hidden");
otpBox.classList.add("hidden");
resetBox.classList.add("hidden");
loginBox.classList.remove("hidden");
}

function togglePassword(id,icon){
let input=document.getElementById(id);
if(input.type==="password"){
input.type="text";
icon.classList.replace("fa-eye","fa-eye-slash");
}else{
input.type="password";
icon.classList.replace("fa-eye-slash","fa-eye");
}
}

// LOGIN
function login(){
let email=loginEmail.value;
let pass=loginPassword.value;

loginEmailError.innerText="";
loginPasswordError.innerText="";

if(!email){
loginEmailError.innerText="Required field";
return;
}

if(!/\S+@\S+\.\S+/.test(email)){
loginEmailError.innerText="Invalid email";
return;
}

if(!pass){
loginPasswordError.innerText="Required field";
return;
}

alert("Login Success");
}

// SEND OTP
function sendOTP(){
let email=forgotEmail.value;

forgotEmailError.innerText="";

if(!email){
forgotEmailError.innerText="Required field";
return;
}

if(!/\S+@\S+\.\S+/.test(email)){
forgotEmailError.innerText="Invalid email";
return;
}

alert("OTP Sent Successfully");

forgotBox.classList.add("hidden");
otpBox.classList.remove("hidden");
}

function resendOTP(){
alert("OTP Resent Successfully");
}

// VERIFY OTP
function verifyOTP(){
let inputs=document.querySelectorAll(".otp-container input");
let otp="";

inputs.forEach(i=>otp+=i.value);

if(otp.length!==6){
otpError.innerText="Enter 6 digit OTP";
return;
}

otpBox.classList.add("hidden");
resetBox.classList.remove("hidden");
}

// PASSWORD STRENGTH
newPassword.addEventListener("input",function(){
let val=this.value;
let text=document.getElementById("strengthText");

if(val.length<6){
text.innerText="Weak Password";
text.style.color="red";
}
else if(/[A-Z]/.test(val) && /\d/.test(val)){
text.innerText="Strong Password";
text.style.color="green";
}
else{
text.innerText="Medium Password";
text.style.color="orange";
}
});

// RESET
function resetPassword(){
let pass=newPassword.value;
let confirm=confirmPassword.value;

newPasswordError.innerText="";
confirmPasswordError.innerText="";

if(!pass){
newPasswordError.innerText="Required field";
return;
}

if(pass!==confirm){
confirmPasswordError.innerText="Passwords do not match";
return;
}

alert("Password Reset Successful");
}