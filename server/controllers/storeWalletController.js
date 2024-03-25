const Address = require('../models/address');

const storeWalletController = async (req, res) => {
    try {
      const { userInfo, address } = req.body;
      // Create new address document
      const newAddress = new Address({
        userInfo: userInfo,
        address : address
      });
  
      // Save address to database
      await newAddress.save();
  
      res.status(201).json({ message: 'Address updated successfully', address: newAddress });
    } catch (error) {
      console.error('Error updating address:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
module.exports = storeWalletController;