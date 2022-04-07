/*const validate = function(ev){
  if (html.id === "shipping-information-page") {
      let failure = []
      //for select statements
      let select = document.getElementById('shipping-options')
      //if it's the first option, output an error
      if (select.selectedIndex === 0) {
        failure.push({input:'shipping-options', msg:'Three Options Available'})
      }
    return failure;
  }
}

if (html.id === "personal-information-page") {
  const name = document.getElementById('full-name')
  const email = document.getElementById('email')
  const phone = document.getElementById('phone')
  const form = document.getElementById('personal-information')
  const errorElement = document.getElementById('error')

  form.addEventListener('submit', (e) => {
    let error = []
    if (name.value === '') {
      error.push('Name is required')
    }

    if (phone.value.length <= 9 || phone.value.length > 12) {
      error.push("Not a Real Phone Number")
    }

    if (error.length > 0) {
      e.preventDefault()
      errorElement.innerText = error.join(', ')
    }
  })
}*/
