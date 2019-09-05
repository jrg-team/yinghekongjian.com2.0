import Vue from '../lib/vue'
import 'swiper/dist/css/swiper.css'
import marked from 'marked'
import axios from '../lib/axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MyNavigator from '../layout/navigator'
import MyFooter from '../layout/footer'

const TYPE = 'yinghekongjian'

new Vue({
  el: '#app',
  data(){
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30
      },
      about: {
        videos: [],
        companies: []
      }
    }
  },
  created(){
    axios.get('/settings/about').then((response) => {
      this.about = response.data.resource.items[TYPE]
    })
  },
  components: {
    swiper,
    swiperSlide,
    MyNavigator,
    MyFooter
  },
  methods: {
    marked
  }
})
