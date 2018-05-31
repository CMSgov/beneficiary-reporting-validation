import * as Joi from 'joi';
import { Regexes } from '../regexes';

export enum GroupSize {
  OneHundredOrGreater = '100 or More Individual Eligible Clinicians',
  TwentyFiveNinetyNine = '25 - 99 Individual Eligible Clinicians',
  TwoTwentyFour = '2 - 24 Individual Eligible Clinicians'
}

export const OrganizationSchema = Joi.object().keys({
  name: Joi.string().max(128).regex(Regexes.containsNonWhitespace, 'ContainsNonWhitespace').required(),
  nickname: Joi.string().max(128).regex(Regexes.containsNonWhitespace, 'ContainsNonWhitespace').allow(null),
  groupSize: Joi.string().valid(Object.values(GroupSize))
});
