class User {
  constructor(email,password) {
    this.email = email
    this.password = password
    this.inbox = []
    this.blocklist = []
  }


  sendMessage(rec) {
    let msg = new Message()

    if(!rec.blocklist.includes(this.email)){
      rec.inbox.push(msg)
      
    }

  }
}

class Message {
  constructor(content) {
    this.content = prompt('Enter a message')
  }

}

user1 = new User('talha@example.com','111111')
user2 = new User('aya@example.com','111111')
user3 = new User('toy@example.com', '111111')
// msg = new Message('Why do the knicks suck?')

let user1form = document.getElementById('user1-form')
let user2inbox = document.getElementById('user2-user2inbox')
window.addEventListener('keydown', function(event) {
  console.log(event.key)
  if(event.key == 'Shift' && event.key == 'Enter')
  text.value += '\n'
  if (event.which == 13) {
    sendMessage()
  }
})

function sendMessage() {
  let text = document.getElementById('msg-content')
  let p = document.createElement('p')
  p.innerText = text.value
  user2inbox.appendChild(p)
  text.focus()
  text.value = ''
  // alert(text.value)
}

user1form.addEventListener('submit', function(event) {
  event.preventDefault()
  sendMessage()
})
