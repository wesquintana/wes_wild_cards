import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

// NOTE adding Card as a sub doc of Deck
const Card = new Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: ObjectId, ref: "User", required: true },
  imgFace: { type: String, required: false },
  imgBack: { type: String, required: false },
  category: { type: String, required: false }
});
// NOTE Card has to be the end of the inheritance chain and is dependent upon the parent (cannot be retrieved on its own without parent)

const Deck = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rules: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  isPrivate: { type: Boolean, required: true },
  cards: [Card],
  img: { type: String, required: false }
}, { timestamps: true })

export default Deck