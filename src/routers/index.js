import { Router } from 'express'
import cityRouter from './cityRoutes.js'
import flightRouter from './passengerRoutes.js'
import travelRouter from './travelRoutes.js'
import passengerRouter from './passengerRoutes.js'

const router = Router()
router.use(cityRouter)
router.use(flightRouter)
router.use(passengerRouter)
router.use(travelRouter)

export default router
