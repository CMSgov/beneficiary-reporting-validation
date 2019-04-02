export const Regexes = {
  lettersAndNumbersOnly: /^[0-9A-Za-z]+$/,
  lettersNumbersAndSymbolsOnly: /^[A-Za-z0-9'\-,\/ ]+$/,
  lettersAndSymbolsOnly: /^[A-Za-z'\-\/ ]+$/,
  lettersAndSymbolsOnlyWithPeriod: /^[A-Za-z'\-.\/ ]+$/,
  capitalLettersAndNumbersOnly: /^[0-9A-Z]+$/,
  containsNonWhitespace: /\S/,
  numbersOnly: /^[0-9]+$/,
  numbersOnlyAndEmptyString: /^(\s{0}|\d+)$/,
  validAddress: /^[0-9A-Za-z'\-\/#_., ]+$/,
  validZipCode: /^[0-9]{5}(-[0-9]{4})?$/,
  validDay: /^0?([1-9]|[12][0-9]|3[01])$/,
  validMonth: /^0?([1-9]|1[0-2])$/,
  validYear: /^(19|20)\d{2}$/,
  validDate: /^[0-1][0-9]\/[0-3][0-9]\/[1-2][0-9][0-9][0-9]/,
  validCredentials: /^[0-9a-zA-Z'\-\/#,;: ]+$/,
  email: /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
  stateAbbreviations: /^(AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY)$/i
}

// email regex source - https://github.com/angular/angular/blob/master/packages/forms/src/validators.ts#L57