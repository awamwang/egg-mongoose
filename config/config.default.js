'use strict';
const mongoose = require('mongoose');

/**
  * mongoose default config
  * http://mongoosejs.com/docs/api.html#index_Mongoose-createConnection
  * @member Config#mongoose
  * @property {String} url - connect url
  * @property {Object} options - options to pass to the driver and mongoose-specific
  */
exports.mongoose = {
  url: '',
  options: {},
  plugins: [],
  loadModel: true,
  app: true,
  agent: false,
  customLoader: {
    model: {
      directory: 'app/model',
      inject: 'app',
      caseStyle: 'upper',
      filter(model) {
        return typeof model === 'function' && model.prototype instanceof mongoose.Model;
      },
    },
  },
};
