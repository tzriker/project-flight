const {Schema,model} = require("mongoose")


const FlightSchema = new Schema({
    alt:{type: Number, required: true},
    his: {type: Number, required: true},
    adi: {type: Number, required: true},
},{timestamps:true})

const Flight = model("Flight", FlightSchema)

module.exports = Flight;