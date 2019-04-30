function depositMoney() {
  let amount = prompt('how much do u want to deposit?')
  let bal = document.querySelector('#bank-balance')
  let currentBal = bal.innerText
  let total = parseInt(currentBal) + parseInt(amount)
  bal.innerText = total
}

function withdrawMoney() {
  let amount = prompt('How much do you want to withdraw')
  let bal = document.querySelector('#bank-balance')
  let history = document.querySelector('#history')
  let OD = document.querySelector('#odProtection')
  let bal = document.querySelector('#bank-balance')
  let currentBal = bal.innerText
  let odMessage = doucment.querySelector('#error-message')
  let total = parseInt(currentBal) - parseInt(amount)
  if (OD.checked ) {
    let total = currentBal
  } else {
    let total = parseInt(currentBal) - parseInt(amount)
    bal.innerText = total
  }
  if (total <= -1) {
    bal.classList.add('negative-balance')
      }
      history.innerHTML += '<p>You witdraw ' + amount + '</p>'
    }
