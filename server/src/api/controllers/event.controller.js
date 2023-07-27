const asyncHandler = require("express-async-handler");
const eventService = require("../services/event");

// @desc create a event
// @route POST /api/events/create
// @access private
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
    eventStatus,
    userId
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
    ! eventStatus ||
    ! userId
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

// @desc read events
// @route GET /api/events/
// @access private
const getEvent = asyncHandler(async (req, res) => {
  const userId = req.query.userId;
  const eventData = await eventService.getEvent(userId);
  if(eventData) {
    console.log(eventData)
    res.status(200).json(eventData);
  } else {
    res.json(false);
  }
 })


module.exports = { createEvent, getEvent };
