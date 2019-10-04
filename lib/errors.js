'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on zcashcore-p2p Module {0}'
};

module.exports = require('zcashcore-lib').errors.extend(spec);
