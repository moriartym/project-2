const subscribeButton = document.getElementById("subscribe-button");
const successContainer = document.getElementById("success-container");
const dismissButton= document.getElementById("dismiss-button");
const rightContainer = document.getElementById("right-container");
const lelfContainer = document.getElementById("lelf-container");


subscribeButton.addEventListener("click",()=>{
    successContainer.classList.toggle("active");
    lelfContainer.classList.toggle("active");
    rightContainer.classList.toggle("active");


} )

dismissButton.addEventListener("click",()=>{
    successContainer.classList.toggle("active");
    lelfContainer.classList.toggle("active");
    rightContainer.classList.toggle("active");

} )

const emailError = document.getElementById("email-error");
const emailInput = document.getElementById("emailtext");

function validateEmail() {
    if (!emailInput.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.textContent = "Valid email required";
        return false;
    }

    emailError.textContent = "";
}
