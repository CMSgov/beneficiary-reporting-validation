import { Validate, PickAllowableFields, payload } from '../lib/decorators';
import { MockSchema, validModel, invalidModel, invalidModelTwo } from './mocks/mock-schema';

describe('Decorators', () => {

  describe('Validate & payload', () => {
    let fixture: any;

    class Fixture {
      @Validate(MockSchema)
      validateFunc(@payload data: any): number {
        return data;
      }

      @PickAllowableFields(MockSchema)
      pickAllowableFieldsFunc(@payload data: any): any {
        return data;
      }
    }

    beforeEach(() => {
      fixture = new Fixture();
    });

    it('should return valid if the payload validates', () => {
      const result = fixture.validateFunc(validModel);
      expect(() => fixture.validateFunc(validModel)).not.toThrow();
      expect(result).toEqual(validModel);
    });

    it('should throw if the payload does not validate - unknown prop', () => {
      expect(() => fixture.validateFunc(invalidModel)).toThrow();
    });

    it('should throw if the payload does not validate - bad values', () => {
      expect(() => fixture.validateFunc(invalidModelTwo)).toThrow();
    });

    it('should throw if the payload does not exist', () => {
      expect(() => fixture.validateFunc()).toThrow();
    });

    it('should return the picked properties', () => {
      const result = fixture.pickAllowableFieldsFunc(invalidModel);
      expect(result).toEqual(validModel);
    });
  });
});