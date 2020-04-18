import Vue from 'vue'
import WaterMark from '../../utils/watermark'
import './index.scss'


new Vue({
  el:'#app',
  data(){
    return {
      msg: 'vue msg'
    }
  },
  mounted(){
    new WaterMark({
      text: 'webpack多页配置'
    })
  }
})
