const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userService = require("../services/user");

// @desc Register a user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userExist = await userService.userExist(email);
  if (userExist) {
    res.status(400);
    throw new Error("User already registered");
  }
  const user = await userService.registerUser(req.body);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

// @desc Login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const user = await userService.userExist(email);
  console.log("user -> ",user);
  if (user && (await bcrypt.compare(password, user.password))) {
    console.log("Entered ...");
    const accessToken = jwt.sign(
      {
        user: {
          role: "user",
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_USER_SECRET,
      {
        expiresIn: "59m",
      }
    );
    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      auth: accessToken,
    });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

module.exports = { registerUser, loginUser };
