import { Router } from 'express'

import SerialPortController from '../controllers/SerialPortController'

const routes = Router()
routes.use('/getSerialPortData', SerialPortController.getSerialPortData)
routes.get('/', SerialPortController.show)

export default routes
