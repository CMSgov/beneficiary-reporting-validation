import * as Joi from 'joi';
import { BeneficiaryMap, MeasureMap, SubmissionMap } from '.';

export const BeneficiaryComplexSchema = Joi.object(BeneficiaryMap).keys({
    measures: Joi.array().items(Joi.object(MeasureMap).keys({
        submissions: Joi.array().items(Joi.object(SubmissionMap)).optional(),
    })).optional()
});
