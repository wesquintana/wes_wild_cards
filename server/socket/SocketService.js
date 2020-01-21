class Socket {
  setIO(io) {
    this.io = io
    this.rooms = {}
    //Server listeners 
    io.on("connection", socket => this.newConnection(socket));
    io.on("join", data => this.joinRoom(data))
  }
  newConnection(socket) {
    //Handshake / Confirmation of Connection
    socket.emit("CONNECTED", {
      socket: socket.id,
      message: "Successfully Connected"
    });
  }

  moveCard(data) {
    this.io.emit('moveCard', data)
  }

}


const socket = new Socket();


module.exports = socket