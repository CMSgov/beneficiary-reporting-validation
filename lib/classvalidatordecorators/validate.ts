import {validate} from "class-validator";

const user = { firstName: "Johny", secondName: "Cage", email: "johny@cage.com" };

validate("myUserSchema", user).then(errors => {
  if (errors.length > 0) {
    console.log("Validation failed: ", errors);
  } else {
    console.log("Validation succeed.");
  }
});
