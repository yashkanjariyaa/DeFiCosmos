const Address = require('../models/address');

exports.updateAddress = async (req, res) => {
    try {
      const { userId, address } = req.body;
  
      // Create new address document
      const newAddress = new Address({
        userId: userId,
        street: address.street,
        city: address.city,
        country: address.country
      });
  
      // Save address to database
      await newAddress.save();
  
      res.status(201).json({ message: 'Address updated successfully', address: newAddress });
    } catch (error) {
      console.error('Error updating address:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };