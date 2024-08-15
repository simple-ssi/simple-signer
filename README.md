# simple-signer

`simple-signer` is a simple, limited signer for SSI. It is currently under development. In its current state, it is of use to no one.

It does not support browsers.

Stay tuned.

## Usage

```bash
npm install @simple-ssi/simple-signer
```

then:

```bash
const signer = require('@simple-ssi/simple-signer')
```

or

```bash
import * as signer from '@simple-ssi/simple-signer'
```

## API

The API has a single function. It returns a hardcoded JWT.

- `signJwt(rawHeader, rawPayload, secret256Bit)` takes a raw header and payload (`string`) and a 256-bit secret (`string`) and returns the following well-formed JWT: `'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.w-r9qmB7Gr_x4EGRdaHCdwn_NQTPfmC78jo7SgNAE1k'`.
