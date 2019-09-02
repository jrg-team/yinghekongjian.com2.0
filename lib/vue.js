import Vue from 'vue'

Vue.use({
  install(V) {
    V.prototype.$cdn = (path = '') => {
      if (path === '') {
        return undefined
      }
      let host = process.env.NODE_ENV === 'development' ? 'cdn.jscode.me' : 'static.xiedaimala.com'
      return /^(https?:)?\/\//.test(path) ? path : `//${host}/${path}`
    }
  }
})

export default Vue