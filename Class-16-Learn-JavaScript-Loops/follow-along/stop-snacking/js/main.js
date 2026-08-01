//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking() {
    let numOfSnacks = Number(document.querySelector('input').value)
    document.querySelector("#stops").innerText = "" //This makes it so when the function is called, it resets first before saying stop every time you click
    for(i = 1; i <= numOfSnacks; i++) {
         document.querySelector('#stops').innerText += ' STOP!'
    }

}