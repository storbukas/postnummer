/*
 *  Postnummer - Deno/JSR compatible module
 *
 *  Norske postnummer, oppslag av poststed, kommunenr,
 *  kommunenavn og kategori
 *
 *  Source: https://github.com/storbukas/postnummer
 *
 *  Licensed under the MIT License
 *  https://opensource.org/licenses/MIT
 *
 */

import postnummerJson from './resources/postnummer.json' with { type: 'json' };

export interface PostnummerInfo {
  poststed: string;
  kommunenummer: string;
  kommunenavn: string;
  kategori: string;
}

interface PostnummerData {
  [key: string]: PostnummerInfo;
}

const data: PostnummerData = postnummerJson as PostnummerData;

export const json = (postnummer: string | number): PostnummerInfo | undefined => {
  const key = String(postnummer);
  return data[key];
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
