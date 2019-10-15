<template>
  <section class="teacher-wrapper">
    <swiper :options="teacherSwiperOption" ref="swiperImages">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <div class="image-wrapper">
          <img :src="$cdn(customImage(index))" :alt="slide.name"/>
        </div>
      </swiper-slide>
    </swiper>
    <div class="tab-wrapper">
      <swiper :options="tabsSwiperOption" ref="swiperTabs" class="tab">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <div>{{slide.name}}</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="article-wrapper">
      <transition name="fade">
        <article v-for="(slide, index) in swiperSlides" :key="index" v-if="index === activeIndex">
          <div v-html="slide.introduction" class="teacher-introduction"/>
        </article>
      </transition>
    </div>
  </section>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  import {teacherConfig} from '../lib/config'

  export default {
    name: 'teacher',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperSlides: teacherConfig[process.env.BUILD_FLAG].teacherList,
        activeIndex: 0,
        teacherSwiperOption: {},
        tabsSwiperOption: {
          slidesPerView: 2,
          centeredSlides: true,
          touchRatio: 0.2,
          slideToClickedSlide: true,
          virtualTranslate: true,
          on: {
            slideChange: () => {
              if (this.tabSwiper) this.activeIndex = this.tabSwiper.activeIndex
            }
          }
        },
        isMobile: document.body.clientWidth < 500
      }
    },
    computed: {
      tabSwiper() {
        return this.$refs.swiperTabs.swiper
      },
      customImage() {
        return function (index) {
          return this.isMobile && this.swiperSlides[index].mobileImage || this.swiperSlides[index].image
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperImages = this.$refs.swiperImages.swiper
        const swiperTabs = this.$refs.swiperTabs.swiper
        swiperImages.controller.control = swiperTabs
        swiperTabs.controller.control = swiperImages
      })
    }
  }
</script>

<style lang="scss">
  @import "../css/vars";
  section.teacher-wrapper {
    .image-wrapper {
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .tab-wrapper {
      max-width: 1200px;
      position: relative;
      @media (min-width: 500px) {
        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: #C9C9C9;
          height: 1px;
        }
      }
      margin: 0 auto;
      .tab {
        max-width: 800px;
        position: relative;
        margin: 0 auto;
        .swiper-slide-active {
          border-bottom: 1px solid #3475C6;
          font-weight: $font-bold;
        }
        .swiper-slide {
          height: 100%;
          opacity: 0.4;
          text-align: center;
          font-size: 20px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          @media (max-width: 499px) {
            margin-top: 10px;
            height: 40px;
            font-size: 16px;
          }
        }
        .swiper-slide-active {
          opacity: 1;
        }
      }
    }
    .article-wrapper {
      @media (max-width: 499px) {
        max-width: 80vw;
      }
      max-width: 60vw;
      position: relative;
      margin: 0 auto;
      .fade-enter-active {
        transition: opacity .5s;
      }
      .fade-enter {
        opacity: 0;
      }
      .fade-leave-active {
        display: none;
      }
      article > .teacher-introduction {
        h3, h6 {
          max-width: 40vw;
          position: relative;
          margin: 0 auto;
          text-align: center;
        }
        h3 {
          margin-top: 20px;
        }
        h6, p {
          margin-top: 30px;
        }
        h6 {font-weight: $font-bold}
        a {display: inline-block; color: #6699CC}
        padding: 30px 0;
      }
    }
    @media (max-width: 499px) {
      padding-bottom: 30px;
    }
    padding-bottom: 10vh;
  }
</style>
