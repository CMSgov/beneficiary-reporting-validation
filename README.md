# Beneficiary Reporting Validation

This package can be used to validate endpoint payloads against our schemas.

## Usage with typescript - with decorators

`@Validate(SCHEMA)` - Method decorator to perform the validation against the provided schema

`@payload ` - Param decorator to target the payload param

```javascript
  import { Validate, payload, ClinicSchema } from '@cmsgov/wi-validation';

  @Validate(ClinicSchema)
  sendRequest(@payload payloadBody) { ... }
```

## Usage with typescript - without decorators
```javascript
  import { ValidateSchema, ClinicSchema } from '@cmsgov/wi-validation';

  doSomething(payloadBody): any {
    const validation = ValidateSchema(payloadBody, ClinicSchema);
    if (validation.valid === false) {
      throw new Error(`Request was invalid: ${validation.error.code} ${validation.error.message}`);
    }
    ...
  }
```

## Usage without typescript
```javascript
  const validRequest = require('@cmsgov/wi-validation');
  const ClinicSchema = validRequest.ClinicSchema;

  .post('/some/route', async (req, res) => {
    const validation = validRequest.ValidateSchema(req.body, ClinicSchema);
    if (validation.valid === false) {
      throw new Error(`Request was invalid: ${validation.error.code} ${validation.error.message}`);
    }
    ...
  }
```

## Available Schemas

All schemas can be found here [All Schemas](https://github.com/CMSgov/beneficiary-reporting-validation/tree/master/lib/schema)

- [ClinicSchema](https://github.com/CMSgov/beneficiary-reporting-validation/blob/master/lib/schema/clinic.ts)

## Regexes & Usage

Available regexes can be found here [Available Regexes](https://github.com/CMSgov/beneficiary-reporting-validation/blob/master/lib/regexes.ts)

```typescript
  import { Regexes } from '@cmsgov/wi-validation';

  const test = Regexes.lettersAndSymbolsOnly.test(value);
```

## Note

Currently, `@hapi/joi` dependency is included in the webpack bundle due to it’s lack of native support for browsers
