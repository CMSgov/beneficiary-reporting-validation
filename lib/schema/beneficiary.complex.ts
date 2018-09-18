import * as Joi from 'joi';
import { BeneficiaryMap, MeasureMap, SubmissionMap } from '.';

export const BeneficiaryComplexSchema = Joi.object({
  ...BeneficiaryMap,
  id: Joi.number().required(),
  measures: Joi.array().items(Joi.object({
    ...MeasureMap,
    submissions: Joi.array().items(Joi.object({
      ...SubmissionMap
    })).optional()
  })).optional()
});
