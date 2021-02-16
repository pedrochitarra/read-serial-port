import logger from '../../../controle/common/logger'
import api from '../api/api'

class EstacaoAnteriorController {
  show (req, res) {
    res.json({
      ok: true
    })
  }

  async getOrdensProducao (req, res) {
    const { data } = await api.get('/getOrdensEstacaoAnterior')
    logger.info(data)
    res.json(data)
  }
}

export default new EstacaoAnteriorController()
