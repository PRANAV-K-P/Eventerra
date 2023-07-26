const bcrypt = require("bcrypt");
const User = require("../models/user.model");

module.exports = {
  userExist: async (email) => {
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      return userAvailable;
    }
    return false;
  },
  registerUser: async (userData) => {
    if (userData) {
      const { name, email, password } = userData;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      return user;
    }
    return false;
  },
};
