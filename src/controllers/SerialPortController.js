import serialPortService from '../services/serialPortService'
import logger from '../shared/logger'

class SerialPortController {
  show (req, res) {
    res.json({
      ok: false
    })
  }

  async getSerialPortData (req, res) {
    logger.warn('aquisss')
    const result = await serialPortService()
    logger.error(result)
    res.json(result)
  }
}

export default new SerialPortController()
