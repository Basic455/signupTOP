const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm-password")
const divPass = document.querySelector(".pass")
const divConfirmPassword = document.querySelector(".confirm-pass")
const p = document.createElement("p")
const button = document.querySelector(".btn")

function password(pass, confirmPass) {
    if(pass.value === confirmPass) {
        p.textContent = "The passowrd matches";
        p.style.color = "green";

        divPass.appendChild(p)

    } else {
        p.textContent = "The password does not match";
        p.style.color = "red";
        divPass.appendChild(p)
    }
}


pass.addEventListener('click', password(pass, confirmPass))
confirmPass.addEventListener('click', password(pass, confirmPass))