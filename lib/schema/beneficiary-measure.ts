import * as Joi from 'joi';

export enum MeasureStatus {
  complete = 'COMPLETE',
  incomplete = 'INCOMPLETE',
  skipped = 'SKIPPED',
  notRanked = 'NOT_RANKED'
}

export enum MeasureConfirmedOptions {
  Y = 'Y',
  N = 'N',
  NCD = 'NCD',
  DE = 'DE',
  NOCAR = 'NOCAR',
  NOAGE = 'NOAGE',
  NOGENDER = 'NOGENDER'
}

export const BeneficiaryMeasureSchema = Joi.object().keys({
  status: Joi.string().valid(Object.values(MeasureStatus)).optional().allow(null),
  confirmed: Joi.string().valid(Object.values(MeasureConfirmedOptions)).optional().allow(null),
  skippedReason: Joi.string().max(1024).optional().allow(null),
  helpDeskTicket: Joi.string().max(15).optional().allow(null),
  comment: Joi.string().optional().allow(null)
});
