var express = require('express');
var router = express.Router();
var swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./swagger.js');
const bodyParser = require('body-parser');
const Portal = require('../schemas/Portal');
const Defaultconfigs = require("../schemas/Defaultconfigs");
const defaultMediaConfig = require("../default_configs/createDefaultMedia");
const defaultStandardConfig = require("../default_configs/createDefaultStandard");


//Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/api', router);


/*
createPortal — function for creating a new portal in the system
updatePortal — function for updating an existing portal in the system
deletePortal — function for deleting an user from the system
getAllPortals — function for getting all users in the system
getOnePortal — function for getting an portal by ID
*/

router.get('/api/portals', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  Portal.find({}, (err, portals) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json(portals);
  });
});

// GET All portals for one customer
router.get('/api/customers/:id/portals/', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const id = req.params.id;
  Portal.find({customer_id: id}, (err, portals) => {
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
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const id = req.params.id;
  Portal.findByIdAndDelete(id, (err, portal) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    if (portal == null) return res.status(400).json({message: "Error", error: "No portal with this id."})
    res.status(200).json({message: "Deleted successfully!", portal: portal});
  });
});


router.post('/api/portals', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});

  //TODO Fix propper validation for req.body
  if (!req.body.portaltype || !req.body.portalname || !req.body.customer_id) {
    return res.status(400).json({message: "Error", error: "Validation Error"});
  }

  let data = {
    portaltype: req.body.portaltype,
    portalname: req.body.portalname,
    customer_id: parseInt(req.body.customer_id)
  }

  if (req.body.portaltype == "media-portal") data.config = defaultMediaConfig;
  if (req.body.portaltype == "standard-portal") data.config = defaultStandardConfig;
  if (req.body.portaltype == "custom-portal") data.repository = "https://bitbucket.org/portal-"+data.portalname+".git";

  // Fix this with schema unique: true later. But couldn't get it to work so made like this in meantime.
  Portal.find({portalname: data.portalname}, (err, portal) => {
    if (err) {
      return res.status(400).json({message: "Error", error: err});
    }
    else if (portal.length === 0) {
      Portal.create(data, (err, portal) => {
        if (err) return res.status(400).json({message: "Error", error: err});
        res.status(201).json({message: "Success portal created!"});
      });
    }
    else if (portal.length > 0) {
      return res.status(400).json({message: "Portal exists!"});
    }
  });
});


//TODO Routes for create fake data. This will be removed in the future.
router.post('/api/defaultconfigs', (req, res) => {
  let config;
  const portaltype = req.body.portaltype;
  if (portaltype == "standard-portal") {
    config = defaultStandardConfig;
  }
  else if (portaltype == "media-portal") {
    config = defaultMediaConfig;
  }
  const data = {
    portaltype: portaltype,
    config: config
  }
  Defaultconfigs.create(data, (err, data) => {
    if (err) return res.status(400).json({message: "error", error: err});
    res.status(200).json({message: "Success", config: config})
  });
});

//TODO Routes for create fake data. This will be removed in the future.
router.post('/api/portals/createfake', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  let portals = [];
  const configs = require('../default_configs/fake_configs');

  Portal.find({}, (err, portals) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    if (portals.length !== 0) return res.status(400).json({message: "Error", error: "Portals already in database."});
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
});

module.exports = router;
