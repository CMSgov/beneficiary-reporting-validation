import { validate, registerSchema, ValidationSchema } from "class-validator";

class Shiva {
  const UserValidationSchema: ValidationSchema = {
    name: "myUserSchema", // this is required, and must be unique
    properties: {
      firstName: [{
        type: "minLength", // validation type. All validation types are listed in ValidationTypes class.
        constraints: [2]
      }, {
        type: "maxLength",
        constraints: [20]
      }],
      lastName: [{
        type: "minLength",
        constraints: [2]
      }, {
        type: "maxLength",
        constraints: [20]
      }],
      email: [{
        type: "isEmail"
      }]
    }
  };

  register() {
    registerSchema(this.UserValidationSchema);
  }
}



describe.only('sample', () => {
  /*beforeEach(() => {
     const BeneficiaryMap: ValidationSchema = { // using interface here is not required, its just for type-safety
      name: "esSchema", // this is required, and must be unique
      properties: {
        firstName: [{
          type: "maxLength",
          constraints: [3]
        }],
        lastName: [{
          type: "maxLength",
          constraints: [3]
        }, {
          type: "matches",
          constraints: [Regexes.lettersAndSymbolsOnlyWithPeriod]
        }],
      }
    };

    registerSchema(BeneficiaryMap);
  });*/

  it('test simple', async () => {
    const rama = new Shiva();
    rama.register();

    const user = { firstName: "k", secondName: "Cage", email: "johny@cage.com" };
    validate("myUserSchema", user).then(errors => {
      if (errors.length > 0) {
        console.log("Validation failed: ", errors);
      } else {
        console.log("Validation succeed.");
      }
    });
  });

  it('test simple',  () => {
    const beneficiary = {
      firstName: 'Shiva)(*&^%',
      lastName: ''
    };

    validate('aaSchema', beneficiary).then((result) => {
      console.log(result);
      // expect(result.length).toBe(2);
      // expect(result).toBe('abc');
    })

  });
});
