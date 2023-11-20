const mongoose = require("mongoose");

const { Schema } = mongoose;

//creacion del schema
const subscriptionSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
});

//creacion del modelo
const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
