var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Portal = require('../schemas/Portal');
const configs = require('./fake_configs');

//Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));



router.get('/api/portals', function(req, res, next) {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  Portal.find({}, (err, portals) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json(portals);
  });
});


router.get('/api/portals/:portalname/', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const portalname = req.params.portalname;
  Portal.find({portalname: portalname}, (err, portal) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json(portal);
  });
});


router.get('/api/portals/:portalname/config', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const portalname = req.params.portalname;
  Portal.findOne({portalname: portalname}, (err, portal) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json(portal.config);
  });
});


router.delete('/api/portals/:id', (req, res) => {
  const id = req.params.id;
  Portal.findByIdAndDelete(id, (err, portal) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json(portal);
  });
});


router.delete('/api/portals/:portalname', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const portalname = req.params.portalname;
  Portal.deleteMany({portalname: portalname}, (err, portal) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json(portalname)
  });
});


router.post('/api/portals', (req, res) => {
  // Maybe not is needed because inseide of kong.
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});

  let data = {
    portaltype: req.body.portaltype,
    portalname: req.body.portalname,
    customer_id: parseInt(req.body.customer_id)
  }

  let config = {}

  if (req.body.config) {
    try {
      config = JSON.parse(req.body.config);
      data.config = config;
    }
    catch(err) {
      console.log(err);
      return res.status(400).json({message: "Error could not parse json string."});
    }
  }

  // Fix this with schema unique: true later. But couldn't get it to work so made like this in meantime.
  Portal.find({portalname: data.portalname}, (err, portal) => {
    if (err) {
      return res.status(400).json({message: "Error", error: err});
    }
    else if (portal.length === 0) {
      Portal.create(data, (err, portal) => {
        if (err) return res.status(400).json({message: "Error", error: err});
        res.json(portal);
      });
    }
    else if (portal.length > 0) {
      return res.status(400).json({message: "Portal exists!"});
    }
  });
});


// Maybe delete this sone.
router.get('/api/customers/:id/portals/', function(req, res) {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const id = req.params.id;
  Portal.find({customer_id: id}, (err, portal) => {
      if (err) return res.status(400).json({message: "Error", error: err});
      res.json(portal);
  });
});


router.post('/api/portals/createfake', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  let portals = [];
  for (var i=0; i<configs.length; i++) {
    let data = {
      portaltype: configs[i].portaltype,
      portalname: configs[i].portalname,
      customer_id: configs[i].customer_id
    };
    if (configs[i].config) {
      data.config = configs[i].config;
    }
    Portal.create(data, (err, portal) => {
      if (err) return res.status(400).json({message: "Error", error: err});
      portals.push(portal);
      if (portals.length == configs.length) {
        return res.status(200).json({message: "Success!", portals: portals});
      }
    });
  }
});


module.exports = router;
