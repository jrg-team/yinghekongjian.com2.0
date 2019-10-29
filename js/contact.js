import '../lib/init'
import Vue from '../lib/vue'
import marked from 'marked'
import axios from '../lib/axios'
import MyNavigator from '../layout/navigator'
import MyFooter from '../layout/footer'

const TYPE = process.env.BUILD_FLAG

new Vue({
    el: '#app',
    data() {
      return {
        contact: ''
      }
    },
    components: {
        MyNavigator,
        MyFooter
    },
    created() {
        axios.get('/settings/contact_us').then((response) => {
          this.contact = response.data.resource.items[TYPE]
        })
    },
    methods: {
        marked
    }
})