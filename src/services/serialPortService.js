import SerialPort from 'serialport'
import Readline from '@serialport/parser-readline'
import logger from '../shared/logger'

const usbInterface = '/dev/ttyUSB0'

function readData () {
  const sp = new SerialPort(usbInterface, {})
  let weightValue = 0
  let finalWeight = 0
  const parser = sp.pipe(new Readline({ delimiter: '\r\n' }))
  parser.on('data', data => {
    logger.warn(data)
    weightValue = data
  })
  logger.info(sp)
  logger.warn(weightValue)
  if (weightValue === undefined || weightValue === '' || weightValue === 0) {
    logger.debug('UNDEFINEDDDDD')
  }

  if (weightValue !== undefined && weightValue !== '') {
    finalWeight = weightValue.split(':')
    finalWeight = finalWeight[2].split('PL')
    finalWeight = finalWeight[0].split('kgT')
    finalWeight = finalWeight[0].trim()
    finalWeight = finalWeight.replace(',', '.')
    logger.error('finalWeight:::', finalWeight)
    weightValue = ''
  }

  // return finalWeight
}
export default readData
