import joi from 'joi'

export const citySchema = joi.object({
  name: joi.stringy().required().min(2).max(50)
})