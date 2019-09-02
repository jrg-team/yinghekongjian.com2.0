<template>
  <div class="video-wrapper">
    <div class="video-background-wrapper">
      <img class="poster pc" :src="poster" alt="封面"/>
      <div class="center-icon-wrapper">
        <i class="iconfont hcsp-bofang controller-button"
           @click="toggleModalVisible"></i>
        <h3 class="text">播放影片</h3>
      </div>
      <a class="get-description" href="#">
        获取文字描述 <i class="iconfont hcsp-right"></i>
      </a>
    </div>
    <div class="video-modal pc" v-show="modalVisible">
      <div class="video-mask"></div>
      <div class="video-container">
        <video id="introduction-video" :poster="poster">
          <source :src="link" type="video/mp4">
        </video>
        <i class="iconfont hcsp-bofang controller-button" @click="toggleModalVisible"></i>
        <i id="hide-modal-button" class="iconfont hcsp-wentixuanzhong" @click="toggleModalVisible"></i>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    props: {
      poster: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      }
    },
    name: 'CustomVideo',
    data() {
      return {
        modalVisible: false
      }
    },
    methods: {
      toggleModalVisible() {
        this.modalVisible = !this.modalVisible
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../css/vars';
  .video-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    .video-background-wrapper {
      max-width: 80vw;
      flex: 1;
      position: relative;
      img.poster {
        width: 100%;
      }
      div.center-icon-wrapper {
        height: 64px;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        h3.text {
          white-space: nowrap;
          margin-top: 20px;
        }
        i.controller-button {
          width: 64px;
          font-size: 64px;
          display: block;
        }
      }
      a.get-description {
        color: white;
        text-align: center;
        max-width: 8em;
        position: absolute;
        bottom: 40px;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
  }

  .video-modal {
    > .video-mask {
      position: fixed;
      z-index: $mask-z-index;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(#000, 0.7);
    }
    > .video-container {
      position: fixed;
      z-index: 12;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      max-width: 80vw;
      max-height: 80vh;
      text-align: center;
      video {
        max-width: 80vw;
        max-height: 80vh;
      }
      .playing {
        display: none;
      }
      .controller-button {
        width: 64px;
        height: 64px;
        font-size: 64px;
        color: white;
        cursor: pointer;
        filter: drop-shadow(0 0 4px #2f4672);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
      .hcsp-wentixuanzhong {
        font-size: 48px;
        color: grey;
        opacity: 0.5;
        position: absolute;
        top: -36px;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
    }
  }

</style>