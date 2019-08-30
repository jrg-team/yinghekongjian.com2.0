import Vue from 'vue'
import MyNavigator from './layout/navigator'
import MyFooter from './layout/footer'
import Preview from './layout/preview'
import CustomVideo from './components/CustomVideo'
import Course from './layout/course'

new Vue({
  el: '#app',
  components: {
    MyNavigator, MyFooter, CustomVideo, Preview, Course
  }
})