import express from "express";
import { Authorize } from "../middleware/authorize";
import _userService from "../services/UserService";
import _profileService from "../services/ProfileService";

//PUBLIC
export default class UserController {
  constructor() {
    // posts for login and register are unprotected, everything else is protected NOTE delete is never used, probably not needed
    this.router = express
      .Router()
      .post("/register", this.register)
      .post("/login", this.login)
      .use(Authorize.authenticated)
      .get("/authenticate", this.authenticate)
      .get("/:id/profile", this.getProfileByUserID)
      .delete("/logout", this.logout)
      .use(this.defaultRoute);
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }
  async register(req, res, next) {
    try {
      let user = await _userService.create(req.body);

      //SET THE SESSION UID (SHORT FOR USERID)
      req.session.uid = user._id;

      res.status(201).send(user);
      let body = {
        name: req.body.name,
        userId: user._id, //image url is set to the user's robohash by default, might do something unexpected if the user puts in an interesting name
        imgURL: "https://robohash.org/" + req.body.name + ".png"
      };
      //creates a profile whenever a user is created
      let profile = await _profileService.createProfile(body);
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      let user = await _userService.getByEmailAndLogin(req.body);
      //SET THE SESSION UID (SHORT FOR USERID)
      req.session.uid = user._id;
      res.send(user);
    } catch (err) {
      next(err);
    }
  }

  async authenticate(req, res, next) {
    try {
      let user = await _userService.authenticate(req.session.uid);
      res.send(user);
    } catch (err) {
      next(err);
    }
  }

  async logout(req, res, next) {
    try {
      req.session.destroy(err => {
        if (err) {
          return res.send(err);
        }
        return res.send({
          message: "Logout Successful"
        });
      });
    } catch (error) {
      next(error);
    }
  }
  async getProfileByUserID(req, res, next) {
    try {
      //goes to profile service to find a profile by its user id
      let data = await _profileService.getProfileByUserId(req.session.uid);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
