const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
});

const CustomerModel = mongoose.model("CustomerModel", customerSchema);

module.exports = CustomerModel;
