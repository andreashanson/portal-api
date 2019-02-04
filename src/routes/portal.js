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

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/api/defaultconfig/:portaltype', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const portaltype = req.params.portaltype;

  switch (portaltype) {
    case "standard-portal":
      res.json(defaultStandardConfig);
      break;
    case "media-portal":
      res.json(defaultMediaConfig);
      break;
    default:
      return res.status(400).json({message: "Unknown portaltype."});
  }
});


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
  Portal.find({customer_id: id}, (err, customersportals) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json(customersportals);
  });
});


router.get('/api/portals/:portalname/', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const portalname = req.params.portalname;
  Portal.find({portalname: portalname}, (err, portal) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    if (portal.length > 0) return res.json(portal[0]);
    res.json({});
  });
});


router.delete('/api/portals/:id', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const id = req.params.id;
  Portal.findByIdAndDelete(id, (err, portal) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    if (portal == null) return res.status(400).json({message: "Error", error: "No portal with this id."})
    res.json({message: "Deleted successfully!"});
  });
});


router.put('/api/portals/:portalname', (req, res) => {
  const portalname = req.params.portalname;
  const mainKey = req.body;
  Portal.findOneAndUpdate({portalname: portalname}, mainKey, (err) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json({message: "Key updated."});
  });
});


router.put('/api/portals/:portalname/subset', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const portalname = req.params.portalname;
  const subset = req.body.subset;
  Portal.findOneAndUpdate({portalname: portalname}, {subset: subset}, (err) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json({message: "Subset updated."});
  });
});


router.put('/api/portals/:portalname/portaltype', (req, res) => {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
  const portalname = req.params.portalname;
  const portaltype = req.body.portaltype;
  Portal.findOneAndUpdate({portalname: portalname}, {portaltype: portaltype}, (err) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json({message: "Portaltype updated."});
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

  if (req.body.web_server) {
    data.web_server = req.body.web_server;
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


function authenticate(req, res) {
  if (process.env.X_TOKEN !== req.get("X-Token")) return res.status(400).json({message: "Unauthorized"});
}


module.exports = router;
