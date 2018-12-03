var mongoose = require('mongoose');

var portalSchema = new mongoose.Schema(
  {
    portaltype: {
      required: true,
      type: String,
      enum: ["custom", "chocolate"]
    },
    portalname: {
      type: String,
      createIndexes: true,
      required: true
    },
    customer_id: {
      type: Number,
      required: false
    },
    repository: {
      type: String,
      default: ""
    },
    config: {
      type: Object,
      required: false
    },
    state: {
      required: true,
      type: Object,
      default: {
        deployed: false
      }
    }
	}
);

var Portal = mongoose.model('Portal', portalSchema);

module.exports = Portal;
