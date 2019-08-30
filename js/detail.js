import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import marked from 'marked'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

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
      activeIndex: 1
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    renderMd(){
      return marked(text)
    }
  }
})
