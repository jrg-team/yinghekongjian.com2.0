<template>
  <div class="video-wrapper">
    <div class="video-background-wrapper">
      <slot :togglePlayStatus="togglePlayStatus"></slot>
      <video :poster="$cdn(poster)" ref="mobileVideo" class="mobile mobile-video"
             :class="{active: isMobile && playing, hide: !posterVisible}">
        <source :src="link" type="video/mp4">
      </video>
    </div>
    <transition name="modal">
      <div class="video-modal pc" v-show="modalVisible">
        <div class="video-mask"></div>
        <div class="video-container">
          <video :poster="$cdn(poster)" controls ref="pcVideo">
            <source :src="link" type="video/mp4">
          </video>
          <i id="hide-modal-button" class="iconfont hcsp-wentixuanzhong" @click="togglePlayStatus"></i>
        </div>
      </div>
    </transition>
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
      },
      posterVisible: {
        type: Boolean,
        default: true
      }
    },
    name: 'CustomVideo',
    data() {
      return {
        modalVisible: false,
        playing: false,
        isMobile: document.body.clientWidth < 500
      }
    },
    methods: {
      togglePlayStatus() {
        const video = this.isMobile ? this.$refs.mobileVideo : this.$refs.pcVideo
        if (this.modalVisible) {
          this.playing = false
          video.pause()
        } else {
          this.playing = true
          video.controls = true
          video.play()
          this.isMobile && this.toFullVideo(video)
        }
        this.modalVisible = !this.modalVisible
      },
      toFullVideo(videoDom) {
        if (videoDom.requestFullscreen) {
          return videoDom.requestFullscreen()
        } else if (videoDom.webkitRequestFullScreen) {
          return videoDom.webkitRequestFullScreen()
        } else if (videoDom.mozRequestFullScreen) {
          return videoDom.mozRequestFullScreen()
        } else if (videoDom.msRequestFullscreen) {
          return videoDom.msRequestFullscreen()
        } else
          return false
      },
      isFullscreen() {
        return document.fullscreenElement ||
          document.msFullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement || false
      },
      stopMobileVideo(e) {
        if (!this.isFullscreen() && this.isMobile) {
          this.$refs.mobileVideo.pause()
        }
      }
    },
    mounted() {
      document.addEventListener('fullscreenchange', this.stopMobileVideo)
      document.addEventListener('mozfullscreenchange', this.stopMobileVideo)
      document.addEventListener('webkitfullscreenchange', this.stopMobileVideo)
      document.addEventListener('msfullscreenchange', this.stopMobileVideo)
      this.$on('togglePlayStatus', this.togglePlayStatus)
    },
    beforeDestroy() {
      document.removeEventListener('fullscreenchange', this.stopMobileVideo)
      document.removeEventListener('mozfullscreenchange', this.stopMobileVideo)
      document.removeEventListener('webkitfullscreenchange', this.stopMobileVideo)
      document.removeEventListener('msfullscreenchange', this.stopMobileVideo)
    },
    watch: {
      modalVisible: function (newVal, oldVal) {
        if (newVal) {
          document.body.classList.add('show-modal')
        } else {
          document.body.classList.remove('show-modal')
        }
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
    }
    video.active {
      display: block;
    }
    video.hide {
      height: 0;
      width: 0;
      opacity: 0;
    }
    @media (max-width: 499px) {
      .video-background-wrapper {
        max-width: 90vw;
        div.center-icon-wrapper {
          h3.text {
            margin-top: 10px;
            font-size: 14px;
          }
          i.controller-button {
            width: 32px;
            font-size: 32px;
          }
          &.playing {display: none}
        }
        .mobile-video {
          width: 100%;
        }
        .playing {
          display: none;
        }
        a.get-description {
          padding: 10px 0;
          bottom: 0;
          &, .iconfont {
            font-size: 12px;
          }
        }
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
        outline: none;
      }
      .playing {
        opacity: 0;
      }
      .controller-button {
        width: 64px;
        height: 64px;
        font-size: 64px;
        color: white;
        cursor: pointer;
        filter: drop-shadow(0 0 4px #2F4672);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        transition: opacity .8s ease;
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
  .modal-leave-active, .modal-enter-active {transition: opacity 0.3s ease-in-out;}
  .modal-enter, .modal-leave-to {opacity: 0;}
</style>