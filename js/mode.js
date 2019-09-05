import Vue from '../lib/vue'
import marked from 'marked'
import axios from '../lib/axios'
import MyNavigator from '../layout/navigator'
import MyFooter from '../layout/footer'
import pictureTextList from '../layout/pictureTextList'

const TYPE = 'yinghekongjian'

new Vue({
  el: '#app',
  data(){
    return {
      course_mode: {}
    }
  },
  created(){
    axios.get('/settings/course_modes').then((response) => {
      this.course_mode = response.data.resource.items[TYPE]
    })
  },
  components: {
    MyNavigator,
    MyFooter,
    pictureTextList
  },
  methods: {
    marked
  }
})
