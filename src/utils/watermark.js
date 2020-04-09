let uuid = 0
class waterMark {
  constructor(opt) {
    if (window.navigator.userAgent.indexOf('MSIE') >= 1) {
      console.warn('不支持ie10及一下')
      return false
    }
    const defaultOptions = {
      el: '#watemark',
      text: '版权所有',
      font: '12px 微软雅黑',
      canvasWidth: 400,
      canvasHeight: 200,
      textAlign: 'center',
      textStyle: 'rgba(100,100,100,0.15)',
      degree: 40,
    }
    this.option = Object.assign(defaultOptions, opt)
    this.drawCanvas()
  }

  drawCanvas() {
    const waterMarkDom = this.getWaterMarkDom()
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = this.option.canvasWidth
    canvas.height = this.option.canvasHeight
    context.font = this.option.font
    context.textAlign = this.option.textAlign
    context.fillStyle = this.option.textStyle
    context.translate(canvas.width / 2, canvas.height / 2)
    context.rotate((this.option.degree * Math.PI) / 180)
    context.fillText(this.option.text, 0, 0)

    const backgroundUrl = canvas.toDataURL('image/png')
    const styles = this.objToStyleStr({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      'z-index': '9999',
      'pointer-events': 'none',
      'background-repeat': 'repeat',
      'background-image': `url('${backgroundUrl}')`,
    })

    waterMarkDom.setAttribute('style', styles)
    document.body.appendChild(waterMarkDom)
  }

  getWaterMarkDom() {
    const waterMarkDom = document.querySelector(this.option.el) || document.createElement('div')
    waterMarkDom.setAttribute('data-id', ++uuid)
    return waterMarkDom
  }

  objToStyleStr(obj) {
    let str = ''
    Object.keys(obj).forEach((key) => {
      str += `${key}:${obj[key]};`
    })
    return str
  }
}

export default waterMark
