/*
 *  Funksjoner for å hente ut postnummer-data
 *
 *  updated 21 Aug 2024
 *  by Lars Erik Storbukås <https://github.com/storbukas>
 *
 *  Source: https://github.com/storbukas/postnummer
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

import * as fs from 'fs';
import * as path from 'path';

export interface PostnummerInfo {
  poststed: string;
  kommunenummer: string;
  kommunenavn: string;
  kategori: string;
}

interface PostnummerData {
  [key: string]: PostnummerInfo;
}

const postnummerFil = fs.readFileSync(path.join(__dirname, 'resources/postnummer.json'), 'utf-8');
const postnummerJson: PostnummerData = JSON.parse(postnummerFil);

export const json = (postnummer: string | number): PostnummerInfo | undefined => {
  const key = String(postnummer);
  return postnummerJson[key];
};

export const poststed = (postnummer: string | number): string | false => {
  const info = json(postnummer);
  if (info) {
    return info.poststed;
  }
  return false;
};

export const kommunenavn = (postnummer: string | number): string | false => {
  const info = json(postnummer);
  if (info) {
    return info.kommunenavn;
  }
  return false;
};

export const kommunenummer = (postnummer: string | number): string | false => {
  const info = json(postnummer);
  if (info) {
    return info.kommunenummer;
  }
  return false;
};

export default json;
