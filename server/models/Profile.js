import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Profile = new Schema(
  {
    name: { type: String, required: true },
    userId: { type: ObjectId, ref: "User", required: true },
    imgURL: { type: String }
  },
  { timestamps: true }
);

//schema.methods are used to add a method to a Model instance

export default Profile;
