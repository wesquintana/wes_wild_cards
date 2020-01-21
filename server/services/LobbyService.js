import mongoose from "mongoose";
import Lobby from "../models/Lobby";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Lobby", Lobby);

class LobbyService {
  async getLobbyByUserId(id) {
    let lobby = await _repository.findOne({ userId: id });
    return lobby;
  }
  async createLobby(lobbyInfo) {
    // position 0 = deck, position -1 = player1, position -2 = player2
    // lobbyInfo.zones["0"].populate(lobbyInfo.deck.cards.id);
    // lobbyInfo.zones;
    // lobbyInfo.zones["-2"] = [];
    // pushes "grid" into zones
    // for (let i = 1; i <= 18; i++) {
    //   lobbyInfo.zones[`${i}`] = [];
    // }
    let lobby = await _repository.create(lobbyInfo);
    // creates zones for player hands
    let tempSet = [{ position: "-2" }, { position: "-1" }];
    // pushes all card Id's into deck zone
    let cardIds = [];
    for (let i = 0; i < lobbyInfo.deck.cards.length; i++) {
      cardIds.push(lobbyInfo.deck.cards[i]._id);
    }
    // pushes player hands and deck zone into tempSet
    tempSet.push({ position: "0", cards: cardIds });
    // pushes remaining zones into tempSet
    for (let i = 1; i <= 18; i++) {
      tempSet.push({ position: `${i}` });
    }
    // update lobby's zones by $pushing tempSet into lobby's zones
    let zoneData = await _repository.findOneAndUpdate(
      { _id: lobby._id },
      { $push: { zones: tempSet } },
      { new: true }
    );
    return zoneData;
  }
  async getById(lobbyId) {
    let lobby = await _repository.findOne({ _id: lobbyId });
    return lobby;
  }
  async delete(id) {
    let data = await _repository.findOneAndRemove({ _id: id });
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
  }
  async moveCard(id, zoneId, cardInfo) {
    let data = await _repository.findOneAndUpdate(
      { "zones": { $elemMatch: { _id: cardInfo.zoneId } } },
      { $push: { "zones.$.cards": cardInfo.cardId } }, { new: true }

      // {
      //   arrayFilters: [{ "element": cardInfo.zoneId }],
      //   multi: true
      // }
    );
    if (!data) {
      throw new ApiError("InvalidId", 400)
    }
    let something = await _repository.findOneAndUpdate({ "zones": { $elemMatch: { _id: zoneId } } }, { $pull: { "zones.$.cards": cardInfo.cardId } }, { new: true })
    if (!something) {
      throw new ApiError("Invalid ID", 400);
    }
    // NOTE currently returns the zone that recieves a new card
    return something.zones.find(elem => elem._id == cardInfo.zoneId);
  }
  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this board", 400);
    }
    return data;
  }
}

const _lobbyService = new LobbyService();
export default _lobbyService;
