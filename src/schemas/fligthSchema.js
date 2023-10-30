import joiBase from 'joi'
import joiDate from '@joi/date'
const joi = joiBase.extend(joiDate)

export const fligthSchema = joi.object({
  origin: joi.number().interger().min(1).required(),
  destination: joi.number().interger().min(1).required(),
  date: joi.date.format('DD-MM-YYYY').required()
})
