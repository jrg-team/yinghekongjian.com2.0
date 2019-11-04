import '../lib/init'
import Vue from '../lib/vue'
import 'swiper/dist/css/swiper.css'
import marked from 'marked'
import axios from '../lib/axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MyNavigator from '../layout/navigator'
import MyFooter from '../layout/footer'
import SimpleVideo from '../components/SimpleVideo'

const TYPE = process.env.BUILD_FLAG

new Vue({
  el: '#app',
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        on: {
          slideChange: () => {
            if (this.swiper) {
              if (this.shares[this.activeIndex].type === 'video') {
                this.togglePlaying(this.activeIndex, false)
              }
              this.activeIndex = this.swiper.activeIndex
            }
          }
        }
      },
      activeIndex: 0,
      shares: [],
      isMobile: document.documentElement.clientWidth < 500,
      playing: false
    }
  },
  created() {
    axios.get('/settings/shares').then((response) => {
      this.shares = response.data.resource.items[TYPE]
    })
  },
  mounted() {
  },
  components: {
    swiper,
    swiperSlide,
    MyNavigator,
    MyFooter,
    SimpleVideo
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    togglePlaying(index, status) {
      if (this.shares[index].playing === undefined)
        this.$set(this.shares, index, {playing: status, ...this.shares[index]})
      else
        this.shares[index].playing = status
    },
    marked
  }
})
