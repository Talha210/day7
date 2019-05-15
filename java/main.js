class User {
  constructor(email,password) {
    this.email = email
    this.password = password
    this.inbox = []
  }
  sendMessage(rec) {
    let msg = new Message()
    rec.inbox.push(msg)
  }
}

class Message {
  constructor(content) {
    this.content = prompt('Enter a message')
  }

}

user1 = new User('talha@example.com','111111')
user2 = new User('aya@example.com','111111')

msg = new Message('Why do the knicks suck?')
