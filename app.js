document.querySelector('.newsletter-submit').addEventListener('click', function () {
  let email = document.querySelector('#newsletter-input').value
  if (validateEmail(email)) {
    document.querySelector('#newsletter-input').value = ''
    alert('Thank you for signing up for our newsletter.')

    $('#recipeCarousel').carousel({
      interval: 10000
    })
  } else{
    alert('Please enter a valid email address!')
  }
})


const validateEmail = (email)  => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}