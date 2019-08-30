import Vue from 'vue'
import MyNavigator from './layout/navigator'
import MyFooter from './layout/footer'
import CustomVideo from './components/CustomVideo'

new Vue({
  el: '#app',
  components: { MyNavigator, MyFooter, CustomVideo }
})