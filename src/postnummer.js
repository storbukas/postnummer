

const fs = require('fs');
const path = require('path');

const postnummerFil = fs.readFileSync(path.join(__dirname, 'resources/postnummer.json'));
const postnummerJson = JSON.parse(postnummerFil);

const json = (postnummer) => {
  const poststed = postnummerJson[postnummer];

  return poststed;
};

export const poststed = (postnummer) => {
  const poststed = json(postnummer);

  if (poststed) {
    return poststed.poststed;
  }

  return false;
};

export const kommunenavn = (postnummer) => {
  const poststed = json(postnummer);

  if (poststed) {
    return poststed.kommunenavn;
  }

  return false;
};

export const kommunenummer = (postnummer) => {
  const poststed = json(postnummer);

  if (poststed) {
    return poststed.kommunenummer;
  }

  return false;
};

export default json;
