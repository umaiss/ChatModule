  
const socket = io('http://localhost:3000');
const messages = document.getElementById('messages');
const msgForm = document.getElementById('msgForm');

socket.on('message', data => {
    console.log(data)
    appendMessages(data)
})

function appendMessages(message) {
    const html = `<div>${message}</div>`
    messages.innerHTML += html
}