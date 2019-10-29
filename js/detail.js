import '../lib/init'
import Vue from '../lib/vue'
import 'swiper/dist/css/swiper.css'
import marked from 'marked'
import axios from '../lib/axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MyNavigator from '../layout/navigator'
import MyFooter from '../layout/footer'

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
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        on: {
          slideChange: () => {
            if (this.swiper) {
              this.activeIndex = this.swiper.activeIndex
            }
          }
        }
      },
      tabsSwiperOption: {
        slidesPerView: 2,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        virtualTranslate: true
      },
      phoneSwiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChange: () => {
            if (this.swiper) {
              this.activeIndex = this.phoneSwiper.activeIndex
            }
          }
        }
      },
      activeIndex: 0,
      course_details: [],
      isFirstPage: true,
      isMobile: document.documentElement.clientWidth < 500
    }
  },
  created() {
    axios.get('/settings/course_details').then((response) => {
      this.course_details = response.data.resource.items[TYPE]
    })
  },
  mounted() {
    this.$nextTick(() => {
      const mySwiper = this.$refs.mySwiper.swiper
      const swiperTabs = this.$refs.swiperTabs.swiper
      mySwiper.controller.control = swiperTabs
      swiperTabs.controller.control = mySwiper
    })
    window.addEventListener("scroll", this.scrollPassFirstPage)
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
    phoneSwiper() {
      return this.$refs.myPhoneSwiper.swiper
    }
  },
  methods: {
    prevIndex(current, key) {
      if (this.course_details) {
        let index = current === 0 ? this.course_details.length - 1 : current - 1
        return this.course_details[index] && this.course_details[index][key]
      }
    },
    nextIndex(current, key) {
      if (this.course_details) {
        let index = current >= this.course_details.length - 1 ? 0 : current + 1
        return this.course_details[index] && this.course_details[index][key]
      }
    },
    scrollPassFirstPage() {
      let offsetTotop = document.querySelector("#scroller-indicator").getBoundingClientRect().top;
      let currentStatus
      if (offsetTotop <= 0) {currentStatus = false}
      else {currentStatus = true}
      if (this.isFirstPage === currentStatus)
        return
      else {
        this.isFirstPage = currentStatus
        console.log(currentStatus)
      }
    },
    miniTabTop() {
      if (this.isMobile) {
        let node = document.querySelector("nav.navigator")
        return `${node && node.clientHeight}px`
      } else return 0
    },
    marked
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollPassFirstPage)
  }
})
