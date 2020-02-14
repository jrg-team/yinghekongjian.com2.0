import '../lib/init'
import Vue from '../lib/vue'
import 'swiper/dist/css/swiper.css'
import axios from '../lib/axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MyNavigator from '../layout/navigator'
import MyFooter from '../layout/footer'
import CustomVideo from '../components/CustomVideo'
import pictureTextList from '../layout/pictureTextList'
import pictureWithMask from '../components/PictureWithMask'

const TYPE = process.env.BUILD_FLAG

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
      },
      videoUrl: ''
    }
  },
  created(){
    axios.get('/settings/about').then((response) => {
      this.about = response.data.resource.items[TYPE]
    })
  },
  methods:{
    playVideo(videoUrl){
      this.videoUrl = videoUrl
      this.$refs.aboutVideo.$refs.mobileVideo.src = videoUrl
      this.$refs.aboutVideo.$refs.pcVideo.src = videoUrl
      this.$refs.aboutVideo.togglePlayStatus()
    }
  },
  components: {
    swiper,
    swiperSlide,
    MyNavigator,
    MyFooter,
    pictureTextList,
    CustomVideo,
    pictureWithMask
  }
})
