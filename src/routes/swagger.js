const config = require('../config');

let swagger = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Node.js Portal API",
    "description": "Node.js Portal API",
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/licenses/MIT"
    }
  },
  "host": config["app_host"],
  "basePath": "/api",
  "tags": [
    {
      "name": "Portals",
      "description": "API for portals in the system"
    }
  ],
  "schemes": [
    "http",
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "securityDefinitions": {
    "BearerQuery": {
      "description": "Api Key",
      "type": "apiKey",
      "name": "X-Token",
      "in": "header"
    }
  },
  "paths": {
    "/portals": {
      "post": {
        "security": [
          {
            "BearerQuery": []
          }
        ],
        "tags": [
          "Portals"
        ],
        "description": "Create new portal",
        "parameters": [
          {
            "name": "portal",
            "in": "body",
            "description": "Portal that we want to create",
            "schema": {
              "$ref": "#/definitions/Portal"
            }
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "New portal is created",
            "schema": {
              "$ref": "#/definitions/Portal"
            }
          }
        }
      },
      "get": {
        "security": [
          {
            "BearerQuery": []
          }
        ],
        "tags": [
          "Portals"
        ],
        "summary": "Get all portals in system",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Portals"
            }
          }
        }
      }
    },
    "/portals/{portalname}": {
      "parameters": [
        {
          "name": "portalname",
          "in": "path",
          "required": true,
          "description": "portalname of portal that we want to find",
          "type": "string"
        }
      ],
      "get": {
        "security": [
          {
            "BearerQuery": []
          }
        ],
        "tags": [
          "Portals"
        ],
        "summary": "Get portal with given portalname",
        "responses": {
          "200": {
            "description": "Portal is found",
            "schema": {
              "$ref": "#/definitions/Portal"
            }
          }
        }
      },
      "delete": {
        "security": [
          {
            "BearerQuery": []
          }
        ],
        "summary": "Delete portal with given ID not portalname",
        "tags": [
          "Portals"
        ],
        "responses": {
          "200": {
            "description": "Portal is deleted",
            "schema": {
              "$ref": "#/definitions/Portal"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "Portal": {
      "required": [
        "portaltype",
        "portalname",
        "customer_id"
      ],
      "properties": {
        "portalname": {
          "type": "string",
          "uniqueItems": true
        },
        "portaltype": {
          "type": "string"
        },
        "customer_id": {
          "type": "number"
        },
        "state": {
          "deployed": false
        },
        "config": {
          "bgcolor": "string",
          "fgcolor": "string"
        }
      }
    },
    "Portals": {
      "type": "array",
      "$ref": "#/definitions/Portal"
    }
  }
}

module.exports = swagger;
