/* alert('ciao') */

// Chiedi all'utente il suo nome,
const userName = prompt("Inserisci qui il tuo nome.")
console.log(userName)

//poi chiedi il suo cognome,
const userSurname = prompt("Inserisci qui il tuo cognome.")
console.log(userSurname)

//poi chiedi il suo colore preferito
const favouriteColor = prompt("Qual'è il tuo colore preferito?")
console.log(favouriteColor)

//chiedere giorno di nascita
const dayOfBirth = prompt("Che giorno (solo il numero) sei nato/a?")
console.log(dayOfBirth)

//Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23 */
document.getElementById("password").innerHTML = (`${userName}${userSurname}${favouriteColor}${dayOfBirth}`)