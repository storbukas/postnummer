'use strict';

const tap = require('tap');
const postnummer = require('../src/index.js');

const kristiansand = {
    "poststed": "KRISTIANSAND S",
    "kommunenummer": "1001",
    "kommunenavn": "KRISTIANSAND",
    "kategori": "G",
};

// poststed

tap.equal(
  'KRISTIANSAND S', postnummer.poststed('4633'),
  '4633 er poststed KRISTIANSAND S'
);

tap.equal(
  'SANDVIKA', postnummer.poststed('1337'),
  '1337 er poststed SANDVIKA'
);

tap.equal(
  'GRIMSTAD', postnummer.poststed(4879),
  '4879 er poststed GRIMSTAD'
);

tap.equal(
  false, postnummer.poststed('9999'),
  'Ukjent postnummer gir false på poststed'
);

// json

tap.equal(
  kristiansand.poststed, postnummer.json('4633').poststed,
  '4633 er JSON-objekt av KRISTIANSAND'
);

// kommunenavn
tap.equal(
  "KRISTIANSAND", postnummer.kommunenavn('4633'),
  '4633 er kommunenavn KRISTIANSAND'
);

tap.equal(
  false, postnummer.kommunenavn('9999'),
  'Ukjent postnummer gir false på kommunenavn'
);

// kommunenummer
tap.equal(
  "1001", postnummer.kommunenummer('4633'),
  '4633 er kommunenummer 1001'
);

tap.equal(
  false, postnummer.kommunenummer('9999'),
  'Ukjent postnummer gir false på kommunenummer'
);
