const asyncHandler = require("express-async-handler");
const eventService = require("../services/event");

// @desc create a event
// @route POST /api/events/create
// @access public
const createEvent = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    date,
    time,
    duration,
    host,
    location,
    categories,
    capacity,
    eventLink,
    eventStatus
  } = req.body;
  if (
    ! title ||
    ! description ||
    ! date ||
    ! time ||
    ! duration ||
    ! host ||
    ! location ||
    ! categories ||
    ! capacity ||
    ! eventLink ||
    ! eventStatus
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const dateObj = new Date(req.body.date);
  dateObj.setDate(dateObj.getDate() + parseInt(1));
  dateObj.setUTCHours(0, 0, 0, 0);
  req.body.date = dateObj;
  const event = await eventService.createEvent(req.body);
  if (event) {
    res.status(201).json({ _id: event.id, title: event.title });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

module.exports = { createEvent };
