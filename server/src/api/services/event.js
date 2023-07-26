const Event = require("../models/event.model");

module.exports = {
  createEvent: async (eventData) => {
    if (eventData) {
      const event = await Event.create(eventData);
      if (event) {
        return event;
      } else {
        return false;
      }
    }
    return false;
  },
};
