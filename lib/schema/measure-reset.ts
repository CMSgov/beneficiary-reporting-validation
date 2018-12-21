import * as Joi from 'joi';

export const MeasureResetMap = {
  measureSelections: Joi.array().items(Joi.string()),
  clearBeneficiaryConfirmation: Joi.boolean().required()
};

export const MeasureResetSchema = Joi.object(MeasureResetMap);