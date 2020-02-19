import express from "express";
import cors from "cors";
import bp from "body-parser";
import DbContext from "./db/dbconfig";
// import SocketService so that sockets may be used by the server
import Socket from "./socket/SocketService";

const server = express();
// sets up socketServer, io
const socketServer = require("http").createServer(server);
const io = require("socket.io")(socketServer);

//Fire up database connection
DbContext.connect();
// fires up socket connection
Socket.setIO(io);

//Sets the port to Heroku's, and the files to the built project
var port = process.env.PORT || 3000;
server.use(express.static(__dirname + "/../client/dist"));

var whitelist = [
  "http://localhost:8080",
  "http://localhost:8081",
  "https://wild-cards.herokuapp.com"
];
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions));

//REGISTER MIDDLEWEAR
server.use(bp.json());
server.use(
  bp.urlencoded({
    extended: true
  })
);

//REGISTER YOUR SESSION, OTHERWISE YOU WILL NEVER GET LOGGED IN
import UserController from "./controllers/UserController";
import Session from "./middleware/session";
server.use(new Session().express);
server.use("/account", new UserController().router);

//YOUR ROUTES HERE!!!!!!
import DeckController from "./controllers/DeckController";
import ProfileController from "./controllers/ProfileController";
import LobbyController from "./controllers/LobbyController";
server.use("/api/decks", new DeckController().router);
server.use("/api/profile", new ProfileController().router);
server.use("/api/lobby", new LobbyController().router);

//NOTE Default error handler, catches all routes with an error attached
server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } });
});

//Catch all
server.use("*", (req, res, next) => {
  res.status(404).send({
    error: "No matching routes"
  });
});

// listens to socketServer
socketServer.listen(port, () => {
  console.log("socketServer running on port", port);
});
