class Socket {
  setIO(io) {
    this.io = io;
    this.rooms = {};
    //Server listeners
    io.sockets.on("connection", socket => {
      socket.on("join", data => {
        console.log(data);
        socket.join(data)
      });
    });
  }
  newConnection(socket) {
    //Handshake / Confirmation of Connection
    socket.emit("CONNECTED", {
      socket: socket.id,
      message: "Successfully Connected"
    });
    // passes data to notifyMoveCard after receiving signal from emetCard on client
    socket.on("emitCard", data => {
      this.notifyMoveCard(data);
    });
  }

  // runs when called by socket.on
  notifyMoveCard(data) {
    console.log(this.io.sockets);
    console.log(data.room);
    this.io.sockets.in(data.room).emit("moveCard", data);
  }

  notifyShuffleDeck(data) {
    this.io.emit("shuffle", data);
  }
}

const socket = new Socket();

module.exports = socket;
