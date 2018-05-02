import { Regexes } from '../lib/regexes';

describe('Regexes', () => {

  class Fixture {
    testingMethod(regex: string, test: string): boolean {
      switch (regex) {
        case 'LettersAndNumbersOnly':
          return Regexes.lettersAndNumbersOnly.test(test);
        case 'LettersNumbersAndSymbolsOnly':
          return Regexes.lettersNumbersAndSymbolsOnly.test(test);
        case 'LettersAndSymbolsOnly':
          return Regexes.lettersAndSymbolsOnly.test(test);
        case 'CapitalLettersAndNumbersOnly':
          return Regexes.capitalLettersAndNumbersOnly.test(test);
        case 'ContainsNonWhitespace':
          return Regexes.containsNonWhitespace.test(test);
        case 'NumbersOnly':
          return Regexes.numbersOnly.test(test);
        case 'NumbersOnlyAndEmptyString':
          return Regexes.numbersOnlyAndEmptyString.test(test);
        case 'ValidAddress':
          return Regexes.validAddress.test(test);
        case 'ValidZipCode':
          return Regexes.validZipCode.test(test);
        case 'ValidDay':
          return Regexes.validDay.test(test);
        case 'ValidMonth':
          return Regexes.validMonth.test(test);
        case 'ValidYear':
          return Regexes.validYear.test(test);
        case 'ValidDate':
          return Regexes.validDate.test(test);
        case 'ValidCredentials':
          return Regexes.validCredentials.test(test);
      }

      return false
    }
  }

  let fixture: any;

  beforeEach(() => {
    fixture = new Fixture();
  });

  describe('LettersAndNumbersOnly', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('LettersAndNumbersOnly', '1234letters');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('LettersAndNumbersOnly', '1234 letters and some spaces');
      expect(result).toEqual(false);
    });
  });

  describe('LettersNumbersAndSymbolsOnly', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('LettersNumbersAndSymbolsOnly', '1234-,letters');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('LettersNumbersAndSymbolsOnly', '1234 @ and some spaces');
      expect(result).toEqual(false);
    });
  });

  describe('LettersAndSymbolsOnly', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('LettersAndSymbolsOnly', 'letters-only');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('LettersAndSymbolsOnly', '1234 numbers!');
      expect(result).toEqual(false);
    });
  });

  describe('CapitalLettersAndNumbersOnly', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('CapitalLettersAndNumbersOnly', 'CAPS123');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('CapitalLettersAndNumbersOnly', 'caps123');
      expect(result).toEqual(false);
    });
  });

  describe('ContainsNonWhitespace', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('ContainsNonWhitespace', 'nospaceshere');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('ContainsNonWhitespace', '    ');
      expect(result).toEqual(false);
    });
  });

  describe('NumbersOnly', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('NumbersOnly', '123123');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('NumbersOnly', 'ABC123');
      expect(result).toEqual(false);
    });
  });

  describe('NumbersOnlyAndEmptyString', () => {
    it('should return true if empty string', () => {
      const result: any = fixture.testingMethod('NumbersOnlyAndEmptyString', '');
      expect(result).toEqual(true);
    });

    it('should return false if it only contains spaces', () => {
      const result: any = fixture.testingMethod('NumbersOnlyAndEmptyString', ' ');
      expect(result).toEqual(false);
    });

    it('should return true if valid number', () => {
      const result: any = fixture.testingMethod('NumbersOnlyAndEmptyString', '123123');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('NumbersOnlyAndEmptyString', 'ABC123');
      expect(result).toEqual(false);
    });
  });

  describe('ValidAddress', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('ValidAddress', '123 Street');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('ValidAddress', '123 Street, $500.00');
      expect(result).toEqual(false);
    });
  });

  describe('ValidZipCode', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('ValidZipCode', '12345');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('ValidZipCode', '1234567899');
      expect(result).toEqual(false);
    });
  });

  describe('ValidDay', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('ValidDay', '23');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('ValidDay', '233');
      expect(result).toEqual(false);
    });
  });

  describe('ValidMonth', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('ValidMonth', '02');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('ValidMonth', '13');
      expect(result).toEqual(false);
    });
  });

  describe('ValidYear', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('ValidYear', '1945');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('ValidYear', '233');
      expect(result).toEqual(false);
    });
  });

  describe('ValidDate', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('ValidDate', '10/23/1945');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('ValidDate', '4/23/1945');
      expect(result).toEqual(false);
    });
  });

  describe('ValidCredentials', () => {
    it('should return true if validates', () => {
      const result: any = fixture.testingMethod('ValidCredentials', 'abc123#,;:');
      expect(result).toEqual(true);
    });

    it('should return false if does not validates', () => {
      const result: any = fixture.testingMethod('ValidCredentials', 'abc123#,;:&%');
      expect(result).toEqual(false);
    });
  });
});