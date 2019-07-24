#!/usr/bin/env node

const postnummer = require('./postnummer');

module.exports = {
  json: postnummer.default,
  poststed: postnummer.poststed,
  kommunenummer: postnummer.kommunenummer,
  kommunenavn: postnummer.kommunenavn,
};
