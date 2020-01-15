import mongoose from "mongoose"
import Deck from "../models/Deck"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Deck', Deck)

class DeckService {
  async getAllPublic() {
    return await _repository.find({})
  }

  async getAllByUserId(userId) {
    let data = await _repository.find({ authorId: userId })
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400)
    }
    return data
  }

  async getDeckById(id, userId) {
    let data = await _repository.findOne({ $and: [{ _id: id }, { $or: [{ authorId: userId }, { isPrivate: false }] }] })
    // NOTE checks deck to find matching ID AND checks either if it belongs to the user OR deck is public

    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400)
    }
    return data
  }

  async createDeck(rawData) {
    let data = await _repository.create(rawData)
    return data
  }

  async createCard(deckId, rawData) {
    let data = await _repository.findOneAndUpdate(
      { _id: deckId },
      { $push: { cards: rawData } },
      { new: true })
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400)
    }
    return data
  }

  // NOTE call works, but still attached to deck
  async getCards(deckId) {
    let data = await _repository.find({ _id: deckId });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }

  async editDeck(id, userId, update) {
    let data = await _repository.findOneAndUpdate({ _id: id, authorId: userId }, update, { new: true })
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400);
    }
    return data;
  }

  // TEST rawData equals a full card obj sent when editing
  async editCard(payload) {
    let data = await _repository.findOneAndUpdate(
      { cards: { _id: payload.data }, _id: payload.deckId, authorId: payload.userId },
      { $set: { cards: { _id: payload.data._id } } },
      { new: true })
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400)
    }
    return data
  }

  async removeDeck(id, userId) {
    let data = await _repository.findOneAndRemove({ _id: id, authorId: userId });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400);
    }
  }

  async removeCard(payload) {
    let data = await _repository.findOneAndUpdate(
      { _id: payload.deckId, authorId: payload.userId },
      { $pull: { cards: { _id: payload.cardId } } },
      { new: true });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400);
    }
  }

}


const _deckService = new DeckService()
export default _deckService