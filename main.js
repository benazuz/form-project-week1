let error = document.createElement("p")
container.appendChild(error)
const validate = function(){
    let nameInput = document.getElementById("nameInput").value
    let salaryInput = document.getElementById("salaryInput").value
    let birthdayInput = document.getElementById("birthdayInput").value
    let phoneInput = document.getElementById("phoneInput").value
    let container = document.getElementById("container")
    error.style.color = "red"
    let counter = 0
    if(nameInput.length < 2){
        error.innerHTML = "Name is missing"
    }
    else{
        counter ++
    }

    if(salaryInput < 10000 || salaryInput > 16000){
        error.innerHTML = "Salary must be between 10000 to 16000"
    }
    else{
        counter ++
    }

    if(!birthdayInput){
        error.innerHTML = "Please fill date of birth"
    }
    else{
        counter ++
    }

    if(phoneInput.length < 10){
        error.innerHTML = "Please enter a valid phone number"
    }
    else{
        counter ++
    }

    if(counter >= 4){
        container.style.display = "none"
    }


}