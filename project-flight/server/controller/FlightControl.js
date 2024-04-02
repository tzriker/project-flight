const Flight = require('../Model/FlightModel')

const newflight = async (req, res, next) => {
    try {
        const { body } = req;
        const flight = new Flight(body);
        const savedFlight = await flight.save();
        if (!savedFlight) {
            return res.status(400).json({ error: "Flight not saved" });
        }
        res.status(201).json(savedFlight);
    } 
    catch (error) {
        next(error);
    }
};

module.exports = newflight