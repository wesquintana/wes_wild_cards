import mongoose from "mongoose";
import Profile from "../models/Profile";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Profile", Profile);

class ProfileService {
  async getProfileByUserId(id) {
    let profile = await _repository.findOne({ userId: id });
    return profile;
  }
  async createProfile(profileInfo) {
    let profile = await _repository.create(profileInfo);
    return profile;
  }
  async getById(profileId) {
    let profile = await _repository.findOne({ _id: profileId });
    return profile;
  }
  async edit(id, uid, update) {
    let data = await _repository.findOneAndUpdate(
      { _id: id, userId: uid },
      update,
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this board", 400);
    }
    return data;
  }
}

const _profileService = new ProfileService();
export default _profileService;
