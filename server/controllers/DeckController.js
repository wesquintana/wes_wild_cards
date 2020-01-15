import _deckService from '../services/DeckService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'


//PUBLIC
export default class DecksController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAllPublic)
      .get('/private/:id', this.getAllByUserId)
      .get('/:id/cards', this.getCards)
      .get('/:id', this.getDeckById)
      .post('', this.createDeck)
      .post('/:id/cards', this.createCard)
      .put('/:id', this.editDeck)
      .put('/:id/cards', this.removeCard)
      .put('/:id/cards/:cardId', this.editCard)
      .delete('/:id', this.removeDeck)
      .use(this.defaultRoute)
  }

  // this is pretty neat

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAllPublic(req, res, next) {
    try {
      //only gets decks by user who is logged in
      let data = await _deckService.getAllPublic()
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getAllByUserId(req, res, next) {
    try {
      //only gets decks by user who is logged in
      let data = await _deckService.getAllByUserId(req.session.uid)
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getDeckById(req, res, next) {
    try {
      let data = await _deckService.getDeckById(req.params.id, req.session.uid)
      return res.send(data)
    } catch (error) { next(error) }
  }


  async createDeck(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await _deckService.createDeck(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async createCard(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await _deckService.createCard(req.params.id, req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async getCards(req, res, next) {
    try {
      let data = await _deckService.getCards(req.params.id)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async editDeck(req, res, next) {
    try {
      let data = await _deckService.editDeck(req.params.id, req.session.uid, req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async editCard(req, res, next) {
    try {
      let data = await _deckService.editCard(req.params.id, req.session.uid, req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async removeCard(req, res, next) {
    try {
      let data = await _deckService.removeCard({ _id: req.body.deckId, userId: req.session.uid, cardId: req.body._id })
      return res.send(data)
    } catch (error) { next(error) }
  }

  async removeDeck(req, res, next) {
    try {
      await _deckService.removeDeck(req.params.id, req.session.uid)
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}


