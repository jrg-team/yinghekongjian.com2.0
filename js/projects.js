import Vue from '../lib/vue'
import marked from 'marked'
import axios from '../lib/axios'
import MyNavigator from '../layout/navigator'
import MyFooter from '../layout/footer'

const TYPE = 'yinghekongjian'

new Vue({
  el: '#app',
  data(){
    return {
      projects: []
    }
  },
  created(){
    axios.get('/settings/course_modes').then((response) => {
      this.projects = response.data.resource.items[TYPE].projects
    })
  },
  components: {
    MyNavigator,
    MyFooter
  },
  methods: {
    marked
  }
})
