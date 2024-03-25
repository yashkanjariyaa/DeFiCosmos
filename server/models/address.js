const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
