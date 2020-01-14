import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Deck = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rules: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  cards: { type: Array, required: false },
  img: { type: String, required: false }
}, { timestamps: true })

export default Deck