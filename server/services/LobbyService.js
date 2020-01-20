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
    lobbyInfo.zones["0"] = [...lobbyInfo.deck.cards];
    lobbyInfo.zones["-1"] = [];
    lobbyInfo.zones["-2"] = [];
    // pushes "grid" into zones
    for (let i = 1; i <= 18; i++) {
      lobbyInfo.zones[`${i}`] = [];
    }
    let lobby = await _repository.create(lobbyInfo);
    return lobby;
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
  // async moveCard(id, cardInfo) {
  //   let data= await _repository.findOne({_id: id})
  //   await _repository.
  // }
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
