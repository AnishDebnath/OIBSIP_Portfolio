const scriptURL = 'https://script.google.com/macros/s/AKfycbyw0ebyV8d8vAFuA4TK7gQM7M_lRThjMiplPXr5AeIvq-SpiTwLofRTIMDIqPVRSjbJAg/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you for reaching out! I appreciate your interest and look forward to connecting with you soon."))
        .catch(error => console.error('Error!', error.message))
})