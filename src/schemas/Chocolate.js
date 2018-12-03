var mongoose = require('mongoose');

var chocolateSchema = new mongoose.Schema(
  {
    portaltype: {
      type: String,
      required: true
    },
    portalname: {
      type: String,
      required: true
    },
    customer_id: {
      type: Number,
      required: true
    },
    config: {
      bgcolor: {
        type: String,
        required: true
      },
      fgcolor: {
        type: String,
        required: true
      },
      textColor: {
        type: String,
        required: true
      },
      buttonColor: {
        type: String,
        required: false,
        default: "#CCC"
      }
    },
    state: {
      deployed: {
        type: Boolean,
        default: false,
        required: true
      }
    }
	}
);

var Chocolate = mongoose.model('Chocolate', chocolateSchema);

module.exports = Chocolate;
