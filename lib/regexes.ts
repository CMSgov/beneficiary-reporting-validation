export const Regexes = {
  lettersAndNumbersOnly: /^[0-9A-Za-z]+$/,
  lettersNumbersAndSymbolsOnly: /^[A-Za-z0-9'\-,\/ ]+$/,
  lettersAndSymbolsOnly: /^[A-Za-z'\-\/ ]+$/,
  capitalLettersAndNumbersOnly: /^[0-9A-Z]+$/,
  numbersOnly: /^[0-9]+$/,
  numbersOnlyAndEmptyString: /^(\s{0}|\d+)$/,
  validAddress: /^[0-9A-Za-z'\-\/#_. ]+$/,
  validZipCode: /^[0-9]{5}(-[0-9]{4})?$/,
  validDay: /^0?([1-9]|[12][0-9]|3[01])$/,
  validMonth: /^0?([1-9]|1[0-2])$/,
  validYear: /^(19|20)\d{2}$/,
  validDate: /^[0-1][0-9]\/[0-3][0-9]\/[1-2][0-9][0-9][0-9]/,
  validCredentials: /^[0-9a-zA-Z'\-\/#,;: ]+$/
}
