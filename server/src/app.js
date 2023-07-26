const express = require("express");
const connectDB = require("./config/dbConnection");
require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./api/middleware/errorHandler");

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./api/routes/user.route'));
app.use('/api/events', require('./api/routes/event.route'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
