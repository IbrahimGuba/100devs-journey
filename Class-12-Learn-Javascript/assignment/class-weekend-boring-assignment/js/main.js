document.querySelector('#check').addEventListener('click', check)

function check() {

  let day = document.querySelector('#day').value
  day = day.trim().toLowerCase()
  //Conditionals go here

  if (day === 'tuesday' || day === 'thursday') {
    document.querySelector('#output').innerHTML = 'It\'s Class Day!'
  }

  else if (day === 'monday' || day === 'wednesday' || day === 'friday') {
    document.querySelector('#output').innerHTML = 'Boring...'
  }

  else if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#output').innerHTML = 'Yay! It\'s the weekend!'
  }

  else {
    document.querySelector('#output').innerHTML = 'Thats not a day of the week buddy'
  }
}
