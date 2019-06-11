import * as Joi from '@hapi/joi';
import { BeneficiaryMap } from './beneficiary';
import { MeasureMap } from './measure';
import { SubmissionMap } from './submission';

export const BeneficiaryComplexSchema = Joi.object({
  ...BeneficiaryMap,
  id: Joi.number().required(),
  measures: Joi.array().items(Joi.object({
    ...MeasureMap,
    submissions: Joi.array().items(Joi.object(SubmissionMap)).optional()
  })).optional()
});
