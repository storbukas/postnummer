# postnummer

> Norske postnummer - Norwegian postal codes

## Installasjon / Installation

```bash
npm install postnummer
```

## Bruk / Usage

### JavaScript

```javascript
const postnummer = require('postnummer');

postnummer.poststed('4633');      // 'KRISTIANSAND S'
postnummer.poststed('1337');      // 'SANDVIKA'
postnummer.poststed(4879);        // 'GRIMSTAD'
postnummer.poststed('9999');      // false

postnummer.kommunenavn('4633');   // 'KRISTIANSAND'
postnummer.kommunenummer('4633'); // '4204'

postnummer.json('4633');
/*
  {
    "poststed": "KRISTIANSAND S",
    "kommunenummer": "4204",
    "kommunenavn": "KRISTIANSAND",
    "kategori": "G"
  }
*/
```

### TypeScript

```typescript
import { poststed, kommunenavn, kommunenummer, json, PostnummerInfo } from 'postnummer';

const info: PostnummerInfo | undefined = json('4633');
const place: string | false = poststed('4633');
```

## API

### `json(postnummer: string | number): PostnummerInfo | undefined`
Returns full postal code information object, or `undefined` if not found.

### `poststed(postnummer: string | number): string | false`
Returns place name, or `false` if not found.

### `kommunenavn(postnummer: string | number): string | false`
Returns municipality name, or `false` if not found.

### `kommunenummer(postnummer: string | number): string | false`
Returns municipality number, or `false` if not found.

## Datagrunnlag / Data source

Postnummerregisteret er hentet fra [Bring](https://www.bring.no/tjenester/adressetjenester/postnummer).

The postal code register is sourced from [Bring](https://www.bring.no/tjenester/adressetjenester/postnummer).

## Lisens / License

MIT
