let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
    
    socket.emit('sendMessage', {
        from: 'Aqib Alvi',
        text: 'This is Aqib'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnect from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});