const User = require('../models/user');

exports.createUser = async (req, res) => {
    try { const {firstName, lastName, phoneNumber, email} = req.body;
  
    let newUser = new User ({
      firstName,
      lastName,
      phoneNumber,
      email
    });

    newUser = await newUser.save();

  res.status(201).json(newUser);

  } catch (e) {
    res.status(500).json({error: e.message});
  }

};

exports.users = async (req, res) => {
    try{
      const users = await User.find({});
  
      res.json(users);
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  };
  
  exports.user = async (req, res) => {
    try{
      const user = await User.findById(req.params.id);
  
      if (!user) {
        res.json({message: "User not found :("});
        return;
      }
  
      res.json(user);
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  };

  exports.updateUser = async (req, res) => {
    try { const {firstName, lastName, phoneNumber, email} = req.body;
  
    let updatedUser = new User ({
      firstName,
      lastName,
      phoneNumber,
      email,
      _id: req.params.id,
    });
  
    updatedUser = await User.findByIdAndUpdate(req.params.id, updatedUser);
  
    res.json({message: `User with id ${req.params.id} updated successfully!`});
  
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      const deleteUser = await User.findByIdAndRemove(req.params.id);
  
      res.json({message: `User with id ${req.params.id} deleted successfully!`});
    } catch {
      res.status(500).json({ error: e.message});
    }
  };