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

## Regexes & Usage

Available regexes can be found here [Available Regexes](https://github.com/CMSgov/beneficiary-reporting-validation/blob/master/lib/regexes.ts)

```typescript
  import { Regexes } from '@cmsgov/wi-validation';

  const test = Regexes.lettersAndSymbolsOnly.test(value);
```

## Publishing

We utilize github actions to assist with the publishing process. The following steps will publish a release to npm and send notifications to the WI client and api repos.

1) Create a release in github.
  - Choose the master branch (make sure you've merged necessary code)
  - The tag should be the version being publish, ex: `1.2.2`
  - The name should be `Release - VERSION_NUMBER` ex: `Release - 1.2.2`
  - Description - Provide details about what is changing, and whether there are breaking changes.
2) Publish
3) Confirm the latest published version is correct in npm and check API/Client repos for auto generated PRs.

## Want to Contribute?

Want to file a bug or contribute some code? Read up on our guidelines for [contributing].

[contributing]: /.github/CONTRIBUTING.md

## Public Domain
This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived
through the CC0 1.0 Universal public domain dedication.		

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to
comply with this waiver of copyright interest.		

See the [formal LICENSE file](/LICENSE).
