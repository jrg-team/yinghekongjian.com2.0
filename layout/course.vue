<template>
  <section class="course-wrapper section-margin">
    <div class="title title-margin">
      <h3>课程如何开展</h3>
      <p v-html="description" class="long"></p>
    </div>
    <div class="image-wrapper pc">
      <div class="row" v-for="(row, rowIndex) in items" :key="rowIndex">
        <transition-group name="col" tag="div">
          <div class="col" v-for="(col, colIndex) in row" v-if="col.visible" :key="colIndex">
            <div class="image" :style="{backgroundImage: `url(${col.image})`}"
                 :class="{active: showDescription(rowIndex,colIndex)}"
                 @mouseenter="imageMouseEnter(rowIndex, colIndex)"
                 @mouseleave="imageMouseLeave(rowIndex, colIndex)"
            >
                <div class="mask"></div>
              <div class="text">
                <h5>{{col.title}}</h5>
                <p class="one-line">{{col.content}}</p>
                <transition name="description">
                  <ul v-if="showDescription(rowIndex,colIndex)" class="description">
                    <li v-for="item in col.description">{{item}}</li>
                  </ul>
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
            <p>{{col.content}}</p>
            <h5>{{col.title}}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {debounce} from 'lodash'
  import { courseConfig } from "../lib/config";

  export default {
    name: 'course',
    data() {
      return courseConfig[process.env.BUILD_FLAG];
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
      this.imageMouseEnter = debounce(this._imageMouseEnter, 100)
      this.imageMouseLeave = debounce(this._imageMouseLeave, 100)
    }
  }

</script>

<style scoped lang="scss">
  @import '../css/vars';
  .col-enter-active {max-width: 50%;transition: all .2s ease .2s; transform: scale(1)}
  .col-leave-active {max-width: 50%;transition: all .2s ease; transform: scale(1)}
  .col-leave-to, .col-enter {max-width: 0; width: 0; margin: 0 !important;}
  .description-enter-active {transition: opacity 0.2s ease 0.2s; transform: scale(1)}
  .description-leave-active {transition: opacity 0.2s ease; transform: scale(1)}
  .description-enter, .description-leave-to {opacity: 0;}
  .mask-leave-active, .mask-enter-active {transition: opacity 0.4s ease 0.2s; transform: scale(1)}
  .mask-enter, .mask-leave-to {opacity: 0;}
  .course-wrapper {
    background-color: $v-popover-white;
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
        &:after{
          content: "";
          width:100%;
          height:100%;
          position: absolute;
          left:0;
          top:0;
          background: inherit;
          opacity: 0;
          filter: blur(3px);
          z-index: 1;
          transition: opacity .3s ease;
        }
        &.active:after {
          opacity: 1;
        }
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
        ul.description {
          list-style: disc inside none;
          min-width: 40em;
          > li {line-height: 180%;}
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
          margin: 5px;
          flex: 1;
          overflow: hidden;
          position: relative;
          div.mask {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
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