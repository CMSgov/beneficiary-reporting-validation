import * as Joi from 'joi-browser';

export const ActivitySchema = Joi.object().keys({
  id: Joi.string().optional().allow(null),
  action: Joi.string(),
  date: Joi.string().allow(null),
  performedVia: Joi.string(),
  userId: Joi.number(),
  organizationId: Joi.number(),
  sessionId: Joi.string().allow(null),
  originatedFrom: Joi.string().allow(null),
  fileName: Joi.string().allow(null),
  affectedEntity: Joi.string().allow(null),
  entityNaturalKey: Joi.string().allow(null),
  rootEntityIdentifier: Joi.number().allow(null),
  rootEntityType: Joi.string().allow(null),
  numberOfEntitiesAffected: Joi.number()
});
