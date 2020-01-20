import mongoose from "mongoose";
let Schema = mongoose.Schema;

const Lobby = new Schema(
  {
    players: { type: Array, required: false },
    deck: { type: Object, required: true },
    // zones are an array of objects, with a position property and array of cards
    zones: { type: Array, required: false }
  },
  { timestamps: true }
);

export default Lobby;
