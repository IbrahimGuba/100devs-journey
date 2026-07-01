document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  if (day === 'Tuesday' || day === 'Thursday') {
    document.querySelector('#output').innerHTML = 'It\'s Class Day!'
  }

  else if (day === 'Monday' || day === 'Wednesday' || day === 'Friday') {
    document.querySelector('#output').innerHTML = 'Boring...'
  }

  else if (day === 'Saturday' || day === 'Sunday') {
    document.querySelector('#output').innerHTML = 'Yay! It\'s the weekend!'
  }

  else {
    document.querySelector('#output').innerHTML = 'Thats not a day of the week buddy'
  }
}
