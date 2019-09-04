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
        spaceBetween: 30,
        on: {
          slideChange: () => {
            if(this.swiper){
              this.activeIndex = this.swiper.activeIndex
            }
          }
        }
      },
      phoneSwiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChange: () => {
            if(this.swiper){
              this.activeIndex = this.phoneSwiper.activeIndex
            }
          }
        }
      },
      activeIndex: 0,
      course_details: []
    }
  },
  created(){
    axios.get('/settings/course_details').then((response) => {
      this.course_details = response.data.resource.items[TYPE]
    })
  },
  components: {
    swiper,
    swiperSlide,
    MyNavigator,
    MyFooter
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    phoneSwiper(){
      return this.$refs.myPhoneSwiper.swiper
    }
  },
  methods: {
    marked
  }
})
