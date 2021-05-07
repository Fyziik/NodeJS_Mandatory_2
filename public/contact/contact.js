$('#sendButton').click( async (e) => {

    e.preventDefault()

    const name = $('#nameInput').val()
    const subject = $('#subjectInput').val()
    const message = $('#messageInput').val()

    const user = {
      name,
      subject,
      message
    }

    await fetch("/api/contact", {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {

    }).then((data) => {
      const target = document.getElementById("success-message")
      target.style.display = "block"
    })

    

    

    

})

