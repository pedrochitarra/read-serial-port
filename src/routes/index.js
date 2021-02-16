import { Router } from 'express'

import EstacaoAnteriorController from '../controllers/EstacaoAnteriorController'

const routes = Router()
routes.use('/estacao', EstacaoAnteriorController.show)
routes.use('/getOrdensEstacaoAnterior', EstacaoAnteriorController.getOrdensProducao)
export default routes
