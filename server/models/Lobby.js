import mongoose from "mongoose";
import Deck from "./Deck";
let Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const Zone = new Schema({
  position: { type: String, required: true },
  cards: [{ type: ObjectId, ref: "Deck.cards" }]
});

const Lobby = new Schema(
  {
    players: { type: Array, required: false },
    deck: { type: Deck, required: true },
    // zones are an array of objects, with a position property and array of cards
    zones: [Zone]
  },
  { timestamps: true }
);

export default Lobby;
