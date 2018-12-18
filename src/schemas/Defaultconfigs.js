var mongoose = require('mongoose');

var defaultSchema = new mongoose.Schema(
  {
    portaltype: {
      required: true,
      type: String,
      enum: ["standard-portal", "media-portal"]
    },
    config: {
      required: true,
      type: Object
    }
	}
);

var DefaultPortal = mongoose.model('DefaultPortal', defaultSchema);

module.exports = DefaultPortal;
