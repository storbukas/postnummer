# postnummer

Postnummer i Norge

## Bruk

```npm install postnummer```

```javascript
const postnummer = require('postnummer');
```

```javascript
postnummer.poststed('4633'); // 'KRISTIANSAND S'
postnummer.poststed('1337'); // 'SANDVIKA'
postnummer.poststed(4879); // 'GRIMSTAD'
postnummer.poststed('9999'); // false

postnummer.kommunenavn('4633'); // KRISTIANSAND
postnummer.kommunenummer('4633'); // 1001

postnummer.json('4633');
/*
  {
    "poststed": "KRISTIANSAND S",
    "kommunenummer": "1001",
    "kommunenavn": "KRISTIANSAND",
    "kategori": "G"
  },
*/
```
