/*
 *  Postnummer
 *
 *  Norske postnummer, oppslag av poststed, kommunenr,
 *  kommunenavn og kategori
 *
 *  updated 08 Feb 2021
 *  by Lars Erik Storbukås <https://github.com/storbukas>
 *
 *  Source: https://github.com/storbukas/postnummer
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

'use strict';

const postnummer = require('./postnummer');

module.exports = {
  json: postnummer.default,
  poststed: postnummer.poststed,
  kommunenummer: postnummer.kommunenummer,
  kommunenavn: postnummer.kommunenavn,
};
