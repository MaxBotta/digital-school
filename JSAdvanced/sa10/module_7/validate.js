
function validate() {
    const passEl = document.getElementById("password")
    const password = passEl.value
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const infoEl = document.getElementById("info")

    // Das Passwort muss 8 Zeichen lang sein
    if(password.length < 8) {
        infoEl.innerHTML = "Das Passwort muss 8 Zeichen beinhalten!"
        passEl.classList.add("hint")
        return false
    }

    // Das Passwort muss eine Zahl beinhalten
    if(numbers.some(el => password.includes(el)) === false) {
        infoEl.innerHTML = "Das Passwort muss eine Zahl beinhalten!"
        passEl.classList.add("hint")
        return false
    }

    return true
}