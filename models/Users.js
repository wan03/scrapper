const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: String
});

// call backs in user-controller
userSchema.statics.changePassword = function(email, password, callback) {
  return this.update({ email }, { password }, callback);
};

userSchema.statics.findUserByEmail = function(email, callback) {
  return this.where({ email }, callback);
};

userSchema.statics.findAllUsers = function(callback) {
  return this.find({}, callback);
};

module.exports = mongoose.model("User", userSchema);
