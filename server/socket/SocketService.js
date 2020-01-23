class Socket {
  setIO(io) {
    this.io = io;
    this.rooms = {};
    //Server listeners
    io.on("connection", socket => this.newConnection(socket));
    // io.on("join", data => this.joinRoom(data));
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
    this.io.emit("moveCard", data);
  }
}

const socket = new Socket();

module.exports = socket;
