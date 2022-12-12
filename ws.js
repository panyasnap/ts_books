(() => {
    const socket = io.connect('http://localhost:3000');

    socket.emit('get-comm');
    socket.on('comm', (data) => console.log({data}));
})();