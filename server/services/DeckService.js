import mongoose from "mongoose";
import Deck from "../models/Deck";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Deck", Deck);

class DeckService {
  // SECTION Deck calls
  //#region

  // only gets decks that have their isPrivate property set to false
  async getAllPublic() {
    let data = await _repository.find({ isPrivate: false });
    if (!data) {
      throw new ApiError("Request for public decks not found", 404);
    }
    return data;
  }

  // function to retrieve public decks of a user. userId is set by params from controller, NOT by session/logged in user
  async getPublicDecksByUserId(userId) {
    let data = await _repository.find({ authorId: userId, isPrivate: false });
    if (!data) {
      throw new ApiError("Request for public decks not found", 404);
    }
    return data;
  }

  // gets all decks whose authorId matches the userId being passed, which is gotten from the session's userId (user who's logged in). This userId is grabbed from the DeckController
  async getAllByUserId(userId) {
    let data = await _repository.find({ authorId: userId });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400);
    }
    return data;
  }

  async getDeckById(id, userId) {
    let data = await _repository.findOne({
      $and: [{ $or: [{ authorId: userId }, { isPrivate: false }] }, { _id: id }]
    });
    // NOTE checks deck to find matching ID AND checks either if it belongs to the user OR deck is public

    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400);
    }
    return data;
  }

  // DeckController checks to see if user is registered/logged in
  async createDeck(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  // finds deck whose Id matches the Id begin passed, as well as checking if its authorId matches. UserId is gotten from DeckController
  async editDeck(id, userId, update) {
    let data = await _repository.findOneAndUpdate(
      { _id: id, authorId: userId },
      update,
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400);
    }
    return data;
  }

  // userId gotten from DeckController
  async removeDeck(id, userId) {
    let data = await _repository.findOneAndRemove({
      _id: id,
      authorId: userId
    });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400);
    }
  }
  //#endregion
  // SECTION Card calls
  //#region
  async createCard(deckId, rawData) {
    if (!rawData.imgBack) {
      delete rawData.imgBack;
    }
    let data = await _repository.findOneAndUpdate(
      { _id: deckId },
      { $push: { cards: rawData } },
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400);
    }
    return data;
  }

  // NOTE call works, but still attached to deck
  async getCards(deckId) {
    let data = await _repository.find({ _id: deckId });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
    return data;
  }

  // TEST rawData equals a full card obj sent when editing
  // finds deck whose id and authorId match what's being passed, then targets the card being updated
  async editCard(payload) {
    let data = await _repository.findOneAndUpdate(
      {
        _id: payload.deckId,
        authorId: payload.userId,
        // cards._id tells mongoose what card subdoc to target
        "cards._id": payload.data._id
      },
      // the card at the current position (cards._id) gets its value set by the payload
      { $set: { "cards.$": payload.data } },
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400);
    }
    return data;
  }

  async removeCard(payload) {
    let data = await _repository.findOneAndUpdate(
      { _id: payload.deckId, authorId: payload.userId },
      // removes card whose id matches the payload's cardId
      { $pull: { cards: { _id: payload.cardId } } },
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this deck", 400);
    }
  }
  //#endregion
}

const _deckService = new DeckService();
export default _deckService;
