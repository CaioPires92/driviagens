import httpStatus from 'http-status'
import { cityService } from '../services/cityService.js'
import { errors } from '../errors/erros.js'

async function create(req, res) {
  const { name } = req.body

  await cityService.create(cityName) {
    const city = await cityRepository.findByName(cityName)
    if(city) throw errors.conflict('city')
    
    await cityRepository.create(cityName)
  }

  res.sendStatus(httpStatus.CREATED)
}

export const cityController = { create }
