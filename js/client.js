// const io = require('socket.io-client')(8000)
const socket = io.connect('http://localhost:8000');
const form = document.getElementById('form-container')
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".message-container")
const names = prompt("Enter your name to join");
socket.emit('if-new-user-joined', names)