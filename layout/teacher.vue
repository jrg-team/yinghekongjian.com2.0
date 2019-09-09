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

  export default {
    name: 'teacher',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperSlides: [{
          name: '张博',
          introduction: `<h3>张博</h3><h6>上海</h6>
<p>前阿里巴巴资深工程师，现任Gradle核心团队成员，日常工作就是写开源代码。过去一年有逾5000个GitHub contribution，给包括JDK/Maven在内的众多开源项目贡献过代码。</p>
<p>擅长阅读源码解决疑难问题。拥有专利一项，出版译著一部，曾受邀于硅谷进行演讲。</p>
<p>GitHub主页：<a href="https://github.com/blindpirate">@blindpirate</a></p>`,
          image: 'https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-11-16-30.png',
          mobileImage: 'https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-11-16-30.png'
        }, {
          name: '无隅',
          introduction: `<h3>无隅</h3><h6>上海</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis commodi, cupiditate earum enim explicabo facere incidunt, iusto magnam nesciunt, nostrum odio praesentium qui reiciendis repellendus sed similique tempora velit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem consequuntur et fugiat illum in molestiae nostrum nulla, omnis possimus reprehenderit sint soluta voluptatibus. Beatae inventore iure numquam pariatur veniam?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dicta distinctio exercitationem hic ipsa itaque nam officia soluta tempora.</p>`,
          image: 'https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-11-16-30.png',
          mobileImage: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-4-18-14-14-5.jpg'
        }, {
          name: 'Alex',
          introduction: `<h3>Alex</h3><h6>上海</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis commodi, cupiditate earum enim explicabo facere incidunt, iusto magnam nesciunt, nostrum odio praesentium qui reiciendis repellendus sed similique tempora velit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem consequuntur et fugiat illum in molestiae nostrum nulla, omnis possimus reprehenderit sint soluta voluptatibus. Beatae inventore iure numquam pariatur veniam?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dicta distinctio exercitationem hic ipsa itaque nam officia soluta tempora.</p>`,
          image: 'https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-11-16-30.png',
          mobileImage: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-4-18-14-14-5.jpg'
        }],
        activeIndex: 0,
        teacherSwiperOption: {},
        tabsSwiperOption: {
          slidesPerView: 3,
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
        padding: 30px 0;
      }
    }
    @media (max-width: 499px) {
      padding-bottom: 30px;
    }
    padding-bottom: 10vh;
  }
</style>
