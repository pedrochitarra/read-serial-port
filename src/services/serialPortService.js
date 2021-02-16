import SerialPort from 'serialport'
import Readline from '@serialport/parser-readline'

const usbInterface = '/dev/ttyUSB0'

let weightValue = 0

async function readData () {
  return new Promise((resolve, reject) => {
    const sp = new SerialPort(usbInterface, {})
    let finalWeight = 0
    const parser = sp.pipe(new Readline({ delimiter: '\r\n' }))

    parser.on('data', data => {
      weightValue = data
      if (data.includes('PL') && data.includes(':') && data.includes('kgT')) {
        finalWeight = weightValue.split(':')
        finalWeight = finalWeight[2].split('PL')
        finalWeight = finalWeight[0].split('kgT')
        finalWeight = finalWeight[0].trim()
        finalWeight = finalWeight.replace(',', '.')

        weightValue = ''

        sp.close()
        resolve(finalWeight)
      }
    })
  })
}

export default readData
