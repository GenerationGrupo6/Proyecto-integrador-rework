const mongoose = require("mongoose");

const { Schema } = mongoose;

//creacion del schema
const volunteerSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  rut: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  ocupation: {
    type: String,
    require: true,
  },
  residence: {
    type: String,
    require: true,
  },
  motivation: {
    type: String,
    require: true,
  },
});

//creacion del modelo
const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
