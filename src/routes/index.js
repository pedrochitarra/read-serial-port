import { Router } from 'express'

import SerialPortController from '../controllers/SerialPortController'

const routes = Router()
routes.use('/', SerialPortController.show)
routes.use('/getSerialPortData', SerialPortController.getSerialPortData)

export default routes
