<template>
  <section class="course-wrapper section-margin">
    <div class="title title-margin">
      <h3>课程如何开展</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, sint?</p>
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
                <p>{{col.title}}</p>
                <h5>{{col.content}}</h5>
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
  export default {
    name: 'course',
    data() {
      return {
        items: [
          [{
            image: 'https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg',
            title: '闯关式任务',
            content: '是什么在激励我们？',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae commodi deserunt ducimus fugit iusto laboriosam quas reiciendis, reprehenderit. Corporis repellat similique veniam? Aut dolore non optio placeat quam voluptates?',
            visible: true
          }, {
            image: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-4-24-18-1-22.png',
            title: '实战项目',
            content: '找到你所热爱的事业。',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae commodi deserunt ducimus fugit iusto laboriosam quas reiciendis, reprehenderit. Corporis repellat similique veniam? Aut dolore non optio placeat quam voluptates?',
            visible: true
          }],
          [{
            image: 'https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg',
            title: '拓展直播',
            content: '打造不凡体验。',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae commodi deserunt ducimus fugit iusto laboriosam quas reiciendis, reprehenderit. Corporis repellat similique veniam? Aut dolore non optio placeat quam voluptates?',
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
      imageMouseEnter(rowIndex, colIndex) {
        this.items[rowIndex][1 ^ colIndex].visible = false
      },
      imageMouseLeave(rowIndex, colIndex) {
        this.items[rowIndex][1 ^ colIndex].visible = true
      },
      showDescription(rowIndex, colIndex) {
        return this.items[rowIndex][1 ^ colIndex].visible === false
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '../css/vars';
  .col-enter-active {max-width: 50%;transition: all .5s ease 0.3s;}
  .col-leave-active {max-width: 50%;transition: all .5s ease;}
  .col-leave-to, .col-enter {max-width: 0;}
  .description-enter-active {transition: opacity 0.5s ease 0.3s;}
  .description-leave-active {transition: opacity 0.5s ease;}
  .description-enter, .description-leave-to {opacity: 0;}
  .mask-leave-active, .mask-enter-active {transition: opacity 0.5s ease 0.3s;}
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
          margin-bottom: 10px;
          max-width: 80%;
          &:first-child {
            white-space: nowrap;
          }
        }
        > h5 {
          margin-bottom: 30px;
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