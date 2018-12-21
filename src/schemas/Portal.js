var mongoose = require('mongoose');

// Rename to custom-portal, chocolate-standard, chocolate-media
// But have to sync with media_api etc.
var portalSchema = new mongoose.Schema(
  {
    portaltype: {
      required: true,
      type: String,
      enum: ["custom-portal", "standard-portal", "media-portal"]
    },
    portalname: {
      type: String,
      createIndexes: true,
      required: true
    },
    customer_id: {
      type: Number,
      required: true
    },
    web_server: {
      type: Object,
      name: {
        type: String,
        enum: ["Krut Portals", "Whoosh Portals"]
      },
      host: {
        type: String,
        enum: ["krut-portals", "whoosh-portals"],
      },
      default: {
        name: "Krut Portals",
        host: "krut-portals"
      }
    },
    repository: {
      type: String,
      required: false
    },
    config: {
      type: Object,
      required: false
    },
    setup: {
      type: Boolean,
      default: false
    },
    state: {
      required: true,
      type: Object,
      default: {
        deployed: false
      }
    },
    subset: {
      required: false,
      type: Object
    },
    dropdown: {
      required: false,
      type: Object
    }
	}
);

var Portal = mongoose.model('Portal', portalSchema);

module.exports = Portal;
