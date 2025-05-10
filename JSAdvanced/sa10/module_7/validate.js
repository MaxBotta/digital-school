
function validate() {
    const passEl = document.getElementById("password")
    const value = passEl.value
    const numbers = [0,1,2,3,4,5,6,7,8,9]

    if(numbers.some(el => value.includes(el))) {
        return true
    }
    
    const infoEl = document.getElementById("info")
    infoEl.innerHTML = "Das Passwort muss eine Zahl beinhalten!"
    passEl.classList.add("hint")

    return false
}