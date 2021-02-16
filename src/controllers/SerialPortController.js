import serialPortService from '../services/serialPortService'

class SerialPortController {
  show (req, res) {
    res.json({
      ok: false
    })
  }

  async getSerialPortData (req, res) {
    res.json(serialPortService())
  }
}

export default new SerialPortController()
