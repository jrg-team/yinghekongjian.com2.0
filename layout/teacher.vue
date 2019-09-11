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
          image: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-11-9-46-7.png',
          mobileImage: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-10-16-10-42.png'
        }, {
          name: '无隅',
          introduction: `<h3>无隅</h3><h6>从这里开始 带你开启一线大厂工程师之路</h6>
<p>你好，我是无隅，欢迎加入硬核空间。在接下来的几个月，我会与你一道，一起探索Java与系统架构设计的世界。</p>
<p>我目前在Amazon担任软件工程师。团队所从事的是公司核心业务，对于大规模的分布式系统，如何更快更稳定尽量不出错永远是技术人孜孜不倦乐此不疲追求的目标。我们不需要那些“差不多”或“还行”的代码，而是需要达到一定水准的高质量设计与实现。</p>
<p>去一线大厂工作是很多同学梦寐以求的事情，大家缺乏的有时候并不是机会（现在只要用心搜索一下，会看到无数的大厂招聘内推信息），往往缺乏的是通过面试的经验与信心。所以我希望能够将一线研发的一些经验规范和需要掌握的知识体系在大家初入后端世界的时候就带给大家，让这些经验与理念深入到你的脑海里，有个良好的开端。</p>
<p>我在硬核空间会开设如下的一些课程，通过这些模块化的课程，希望能帮助大家系统且有体系地掌握核心知识</p>
<h6>1. 程序员的算法课</h6>
<p>一个优秀的程序员怎么能不了解算法和数据结构？而且算法面试是大厂面试必不可缺的环节。通过这门课程，我将和大家先理清基础算法原理，继而实际应用讲解面试中的算法真题。快速地掌握常见的数据结构与算法的原理，系统地掌握面试技巧。帮助大家轻松通过算法面试考核</p>
<h6>2. 从零开始设计模式</h6>
<p>随着经验的增加，你不再只限于实现功能，而是会更多地考虑代码的性能与结构，逐渐专注于代码架构的设计。那么设计模式就是你不可或缺的武器。通过这门课程，你会掌握面向对象设计的基本原则，了解常见设计模式的应用场景、原理以及实现步骤，对于每个设计模式，能画类图又能写代码。让感觉高大上的设计模式不再困扰你</p>
<h6>3. 微服务架构实战</h6>
<p>如果常关注技术的发展，那么微服务无疑是近几年最为火爆的技术名词之一。课程将由多个模块化课程组成，以Spring Cloud框架为基础， 每个模块专注讲解一个微服务核心组件，帮助大家快速掌握微服务核心组件的使用场景、架构原理和相应的开发实战与源码剖析</p>
<h6>4. Java8新特性</h6>
<p>Java 8中的新增功能是自Java 1.0发布1以来Java发生的最大变化。与此同时，也成为现在大多数大厂的使用版本。它的出现提供了强大的新语汇和新设计模式，能帮助我们编写更清楚、更简洁的代码。本课程通过全面的示例讲解与源码分析带领大家快速掌握Java 8 新特性，带你开启函数式编程的大门。在这里，不仅仅是用，而是深入源码剖析原理，让你知道背后的故事</p>
<h6>5. 未完待续...</h6>
<p>最后我想给大家说的是，学习是一件漫长的事情。自然界的一项根本法则就是为了赢得力量，必须努力突破极限，而这是痛苦的。我们可以选择健康并痛苦的事实，也可以选择不健康但舒适的幻觉。可能在短短的几个月并不能感觉到差别，当你放到很长的时间维度里面，坚持一年两年，五年十年.....最后的成就绝对是指数级的差距。所以我希望你能和我坚持下来，一起学习，一起交流，一同成长。遇到问题选择的不是逃避，而是努力探寻答案与解决方法。这一次，就让我们一起来探索后端世界的奥秘，一起开启一线大厂工程师之路！</p>
`,
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
        h6 {font-weight: $font-bold}
        padding: 30px 0;
      }
    }
    @media (max-width: 499px) {
      padding-bottom: 30px;
    }
    padding-bottom: 10vh;
  }
</style>
