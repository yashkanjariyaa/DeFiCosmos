const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  userInfo: {
    type: Object,
    required: true
  },
  address: {
    type: String,
    required: true
  },
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
