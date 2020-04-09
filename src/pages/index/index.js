/* eslint-disable no-new */
import WaterMark from '../../utils/watermark'
import './index.scss'
new WaterMark({
  text: 'webpack多页配置'
})

const devMode = process.env.NODE_ENV !== 'production'
console.log('devMode', devMode)

function p() {
  return new Promise((resolve) => {
    resolve('success')
  })
}

p().then((res) => {
  console.log(res)
})
