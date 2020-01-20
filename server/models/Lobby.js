import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Lobby = new Schema({
  players: { type: Array, required: false },
  deck: { type: Object, required: true },
  zones: { type: Array, required: false }
});
