const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 40,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 1024,
    },
    name: { type: String, required: true, minLength: 3, maxLength: 30 },
    isAdmin: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

exports.User = User;
