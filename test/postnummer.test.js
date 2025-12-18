/*
 *  Tests
 *
 *  updated 18 Dec 2025
 *  by Lars Erik Storbukås <https://github.com/storbukas>
 *
 *  Source: https://github.com/storbukas/postnummer
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const postnummer = require('../dist/index.js');

const kristiansand = {
    "poststed": "KRISTIANSAND S",
    "kommunenummer": "4204",
    "kommunenavn": "KRISTIANSAND",
    "kategori": "G",
};

// poststed tests

test('4633 er poststed KRISTIANSAND S', () => {
  assert.strictEqual(postnummer.poststed('4633'), 'KRISTIANSAND S');
});

test('1337 er poststed SANDVIKA', () => {
  assert.strictEqual(postnummer.poststed('1337'), 'SANDVIKA');
});

test('4879 er poststed GRIMSTAD', () => {
  assert.strictEqual(postnummer.poststed(4879), 'GRIMSTAD');
});

test('Ukjent postnummer gir false på poststed', () => {
  assert.strictEqual(postnummer.poststed('9999'), false);
});

// json tests

test('4633 er JSON-objekt av KRISTIANSAND', () => {
  assert.strictEqual(postnummer.json('4633').poststed, kristiansand.poststed);
});

// kommunenavn tests

test('4633 er kommunenavn KRISTIANSAND', () => {
  assert.strictEqual(postnummer.kommunenavn('4633'), 'KRISTIANSAND');
});

test('Ukjent postnummer gir false på kommunenavn', () => {
  assert.strictEqual(postnummer.kommunenavn('9999'), false);
});

// kommunenummer tests

test('4633 er kommunenummer 4204', () => {
  assert.strictEqual(postnummer.kommunenummer('4633'), '4204');
});

test('Ukjent postnummer gir false på kommunenummer', () => {
  assert.strictEqual(postnummer.kommunenummer('9999'), false);
});
