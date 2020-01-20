import _lobbyService from "../services/LobbyService";
import express from "express";

//PUBLIC
export default class LobbyController {
  constructor() {
    this.router = express
      .Router()
      .post("", this.createLobby)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .use(this.defaultRoute);
  }

  // this is pretty neat

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  async createLobby(req, res, next) {
    try {
      let data = await _lobbyService.createLobby(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await _lobbyService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await _lobbyService.edit(
        req.params.id,
        req.session.uid,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
