const Outfit = require('../models/outfit');

exports.index = (req, res) => {
    Outfit.find()
      .then(outfits => res.json(outfits))
      .catch(err => res.status(404).json(err));
};

exports.show = (req, res) => {
    Outfit.findOne({
        _id: req.params.id
      })
      .then(outfit => res.json(outfit))
      .catch(err => res.status(404).json(err));
};

exports.create = (req, res) => {
  if (!req.isAuthenticated()) 
  return res.status(401).send({error: "Not Authenticated"});
  

    Outfit.create(req.body.outfit)
      .then(() => res.status(200).send({sucess: "Outfit Created"}))
      .catch(err => res.status(401).send({err}));
};

exports.edit = (req, res) => {
  if (!req.isAuthenticated())
  return res.status(401).send({ error: "Sign in idget" });

    Outfit.findOne({
        _id: req.params.id
      })
      .then(outfit => res.json(outfit))
      .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
  if (!req.isAuthenticated()) 
  return res.status(401).send({error: "Not Authenticated"});
  
    Outfit.updateOne({
        _id: req.body.id,
        name: req.session.name
      }, req.body.outfit, {
        runValidators: true
      })
      .then(() => res.status(202).send({sucess: "Outfit updates successfully"}))
      .catch(err => res.status(400).send(err));
};

exports.destroy = (req, res) => {
  if (!req.isAuthenticated()) 
  return res.status(401).send({error: "Not Authenticated"});
  

  Outfit.deleteOne({
    _id: req.body.id,
    user: req.session.userId
  })
  .then(() => res.status(202).send({sucess: "Outfit has been deleted succesfully"}))
  .catch(err => res.status(400).send(err));
};