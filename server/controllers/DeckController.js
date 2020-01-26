import _deckService from "../services/DeckService";
import express from "express";
import { Authorize } from "../middleware/authorize.js";

//PUBLIC
export default class DeckController {
  constructor() {
    this.router = express
      .Router()
      // all routes not needing auth positioned before auth path is hit
      .get("", this.getAllPublic)
      .get("/:id/cards", this.getCards)
      .get("/public/:id", this.getPublicDecksByUserId)
      .get("/:id", this.getDeckById)
      .use(Authorize.authenticated)
      .get("/private/:id", this.getAllByUserId)
      .post("", this.createDeck)
      .post("/:id/cards", this.createCard)
      .put("/:id", this.editDeck)
      .put("/:id/cards", this.removeCard)
      .put("/:id/cards/:changes", this.editCard)
      .delete("/:id", this.removeDeck)
      .use(this.defaultRoute);
  }

  // this is pretty neat
  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  // SECTION Deck calls
  //#region
  async getAllPublic(req, res, next) {
    try {
      //only gets decks where public = true
      let data = await _deckService.getAllPublic();
      return res.send(data);
    } catch (err) {
      next(err);
    }
  }

  async getAllByUserId(req, res, next) {
    try {
      //only gets decks by user who is logged in
      let data = await _deckService.getAllByUserId(req.session.uid);
      return res.send(data);
    } catch (err) {
      next(err);
    }
  }

  // function to retrieve all decks of a user where isPrivate = true
  async getPublicDecksByUserId(req, res, next) {
    try {
      //only gets decks by user who is logged in
      let data = await _deckService.getPublicDecksByUserId(req.params.id);
      return res.send(data);
    } catch (err) {
      next(err);
    }
  }

  // function used to get a specific deck, but only a deck that meets conditions set by DeckService
  async getDeckById(req, res, next) {
    try {
      let data = await _deckService.getDeckById(req.params.id, req.session.uid);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async createDeck(req, res, next) {
    try {
      req.body.authorId = req.session.uid;
      let data = await _deckService.createDeck(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async editDeck(req, res, next) {
    try {
      let data = await _deckService.editDeck(
        req.params.id,
        req.session.uid,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async removeDeck(req, res, next) {
    try {
      await _deckService.removeDeck(req.params.id, req.session.uid);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
  //#endregion

  // SECTION Card calls
  //#region
  async getCards(req, res, next) {
    try {
      let data = await _deckService.getCards(req.params.id);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async createCard(req, res, next) {
    try {
      req.body.authorId = req.session.uid;
      let data = await _deckService.createCard(req.params.id, req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async editCard(req, res, next) {
    try {
      let data = await _deckService.editCard({
        deckId: req.params.id,
        userId: req.session.uid,
        data: req.body
      });
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async removeCard(req, res, next) {
    try {
      let data = await _deckService.removeCard({
        deckId: req.params.id,
        userId: req.session.uid,
        cardId: req.body.cardId
      });
      return res.send("Successfully deleted card");
    } catch (error) {
      next(error);
    }
  }

  //#endregion
}
