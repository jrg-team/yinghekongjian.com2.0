<template>
  <section class="course-wrapper section-margin">
    <div class="title title-margin">
      <h3>课程如何开展</h3>
      <p>我们对每个教学环节进行评估，经众多富有Java经验的老师反复推敲后，制定高效Java学习模式</p>
    </div>
    <div class="image-wrapper pc">
      <div class="row" v-for="(row, rowIndex) in items">
        <transition-group name="col" tag="div">
          <div class="col" v-for="(col, colIndex) in row" v-if="col.visible" :key="colIndex">
            <div class="image" :style="{backgroundImage: `url(${col.image})`}"
                 @mouseenter="imageMouseEnter(rowIndex, colIndex)"
                 @mouseleave="imageMouseLeave(rowIndex, colIndex)"
            >
              <transition name="mask">
                <div class="mask" v-if="showDescription(rowIndex,colIndex)"></div>
              </transition>
              <div class="text">
                <h5>{{col.title}}</h5>
                <p>{{col.content}}</p>
                <transition name="description">
                  <p v-if="showDescription(rowIndex,colIndex)">{{col.description}}</p>
                </transition>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="image-wrapper mobile">
      <div v-for="row in items">
        <div class="section-wrapper" v-for="col in row" v-if="col.visible">
          <img class="image" :src="$cdn(col.image)"/>
          <div class="text">
            <p>{{col.title}}</p>
            <h5>{{col.content}}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {debounce} from 'lodash'
  export default {
    name: 'course',
    data() {
      return {
        items: [
          [{
            image: 'https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg',
            title: '任务闯关课',
            content: '夯实基础、进度可控、海量实战、code review',
            description: '张博老师亲自制作全套通关任务\n' +
              '视频、文档、博客、代码、实操、项目、架构\n' +
              'Github提交、CI机器人判题、review所有代码\n' +
              '每一份作业进行老师批改+同学互评\n',
            visible: true
          }, {
            image: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-4-24-18-1-22.png',
            title: '拓展直播课',
            content: '突破瓶颈、开阔眼界、深入学习、实时互动',
            description: '2晚/周、持续半年\n' +
              '高级知识点、课程答疑、模拟面试、就业指导\n' +
              '直播弹幕实时互动，课后录播无限期回放\n',
            visible: true
          }],
          [{
            image: 'https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg',
            title: '阶段性联考',
            content: '实时考核、查漏补缺、效果监测、班级排名',
            description: '独家考试系统，班级定期联考\n' +
              '测试真实水平，做到心中有数\n' +
              '查缺补漏，老师针对性补课\n',
            visible: true
          }, {
            image: 'https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg',
            title: '线下训练营',
            content: '发挥沟通能力，学习技术知识。',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae commodi deserunt ducimus fugit iusto laboriosam quas reiciendis, reprehenderit. Corporis repellat similique veniam? Aut dolore non optio placeat quam voluptates?',
            visible: true
          }]]
      }
    },
    methods: {
      _imageMouseEnter(rowIndex, colIndex) {
        this.items[rowIndex][1 ^ colIndex].visible = false
      },
      _imageMouseLeave(rowIndex, colIndex) {
        this.items[rowIndex][1 ^ colIndex].visible = true
      },
      showDescription(rowIndex, colIndex) {
        return this.items[rowIndex][1 ^ colIndex].visible === false
      }
    },
    created() {
      this.imageMouseEnter = debounce(this._imageMouseEnter, 500)
      this.imageMouseLeave = debounce(this._imageMouseLeave, 500)
    }
  }

</script>

<style scoped lang="scss">
  @import '../css/vars';
  .col-enter-active {max-width: 50%;transition: all .5s ease 0.3s; transform: scale(1)}
  .col-leave-active {max-width: 50%;transition: all .5s ease; transform: scale(1)}
  .col-leave-to, .col-enter {max-width: 0;}
  .description-enter-active {transition: opacity 0.5s ease 0.3s; transform: scale(1)}
  .description-leave-active {transition: opacity 0.5s ease; transform: scale(1)}
  .description-enter, .description-leave-to {opacity: 0;}
  .mask-leave-active, .mask-enter-active {transition: opacity 0.5s ease 0.3s; transform: scale(1)}
  .mask-enter, .mask-leave-to {opacity: 0;}
  .course-wrapper {
    background-color: #F2F2F2;
    @media (max-width: 499px) {
      padding: 10vh 0 5vh;
      .title {
        padding-left: 30px;
        padding-right: 30px;
      }
    }
    .image-wrapper {
      @media (max-width: 499px) {
        .section-wrapper {
          margin-bottom: 20px;
          position: relative;
          div.text {
            top: 20px;
            left: 30px;
            p, h5 {color: white;}
          }
          img.image {
            height: auto;
          }
        }
      }
      .image {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 360px;
        width: 100%;
        vertical-align: middle;
      }
      div.text {
        position: absolute;
        z-index: $mask-z-index;
        top: 40px;
        left: 60px;
        p, h5 {color: white;}
        > p {
          margin-bottom: 30px;
          max-width: 80%;
          &:first-child {
            white-space: nowrap;
          }
        }
        > h5 {
          margin-bottom: 10px;
          white-space: nowrap;
        }
      }
      max-width: 900px;
      position: relative;
      left: 0;
      right: 0;
      margin: 0 auto;
      overflow: hidden;
      > .row {
        display: flex;
        position: relative;
        > div {
          flex: 1;
          display: flex;
          position: relative;
        }
        .col {
          color: white;
          padding: 5px;
          flex: 1;
          position: relative;
          div.mask {
            position: absolute;
            top: 5px;
            bottom: 5px;
            left: 5px;
            right: 5px;
            margin: auto;
            z-index: $mask-z-index;
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
        div.mask-wrapper {
          position: absolute;
          visibility: hidden;
          z-index: $mask-z-index;
          top: 0;
          bottom: 0;
          left: 0;
          padding: 5px;
          width: 900px;
          .mask {
            width: 100%;
            height: 100%;
            background: rgba(#000, 0.7);
          }
          .text {
            color: white;
            top: 30px;
            left: 40px;
            position: absolute;
          }
        }
        &:hover {
          div.mask-wrapper {
            visibility: visible;
          }
        }
      }
    }
  }
</style>