import mongoose from "mongoose";
import Profile from "../models/Profile";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Profile", Profile);

class ProfileService {
  async createProfile(profileInfo) {
    let profile = await _repository.create(profileInfo);
    return profile;
  }
}

const _profileService = new ProfileService();
export default _profileService;
