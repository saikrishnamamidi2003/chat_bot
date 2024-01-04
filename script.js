document.addEventListener('DOMContentLoaded', function () {
    var socket = io.connect('http://' + document.domain + ':' + location.port);

    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');
    var messageContainer = document.getElementById('message-container');

    sendButton.addEventListener('click', function () {
        var message = messageInput.value;
        if (message.trim() !== '') {
            socket.emit('message', message);
            messageInput.value = '';
        }
    });

    socket.on('message', function (msg) {
        var newMessage = document.createElement('div');
        newMessage.textContent = msg;
        messageContainer.appendChild(newMessage);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    });
});
