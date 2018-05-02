import { Schema } from 'joi';

import { Validate, PickAllowableFields, payload } from '../lib/decorators';
import { MockSchema, validModel, invalidModel } from './mocks/mock-schema';

describe('Decorators', () => {

  describe('Validate & payload', () => {
    class Fixture {
      @Validate(MockSchema)
      testingMethod(@payload data: any): number {
        return 3;
      }
    }

    let fixture: any;

    beforeEach(() => {
      fixture = new Fixture();
    });

    it('should return if the payload validates', () => {
      const result: any = fixture.testingMethod(validModel);
      expect(result).toEqual(3);
    });

    it('should throw if the payload does not validate', () => {
      expect(() => fixture.testingMethod(invalidModel)).toThrow();
    });

    it('should not throw if the payload does validate', () => {
      expect(() => fixture.testingMethod(validModel)).not.toThrow();
    });
  });

  describe('PickAllowableFields', () => {
    class Fixture {
      @PickAllowableFields(MockSchema)
      testingMethod(@payload data: any): any {
        return data;
      }
    }

    let fixture: any;

    beforeEach(() => {
      fixture = new Fixture();
    });

    it('should return the picked properties', () => {
      const result: any = fixture.testingMethod(invalidModel);
      expect(result).toEqual(validModel);
    });
  });
});