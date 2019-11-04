<template>
  <div class="video-wrapper">
    <video :poster="$cdn(poster)" @click="togglePlaying" :controls="playing" ref="simpleVideo">
      <source :src="link" type="video/mp4">
    </video>
    <div class="center-icon-wrapper" :class="{playing: playing}" @click="togglePlaying">
      <slot>
        <i class="iconfont hcsp-bofang controller-button"></i>
      </slot>
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
      },
      index: {
        type: Number
      },
      playing: {
        type: Boolean,
        default: false
      },
      change: {
        type: Function
      }
    },
    name: 'simpleVideo',
    data() {
      return {
        isMobile: document.body.clientWidth < 500
      }
    },
    methods: {
      togglePlaying() {
        const video = this.$refs.simpleVideo
        if (this.playing) {
          video.pause()
          this.change(this.index, false)
        } else {
          video.play()
          this.change(this.index, true)
          this.isMobile && this.toFullVideo(video)
        }
      },
      stopVideo() {
        if (!this.isFullscreen() && this.isMobile) {
          this.$refs.simpleVideo.pause()
        }
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
      }
    },
    mounted() {
      document.addEventListener('fullscreenchange', this.stopVideo)
      document.addEventListener('mozfullscreenchange', this.stopVideo)
      document.addEventListener('webkitfullscreenchange', this.stopVideo)
      document.addEventListener('msfullscreenchange', this.stopVideo)
    },
    beforeDestroy() {
      document.removeEventListener('fullscreenchange', this.stopVideo)
      document.removeEventListener('mozfullscreenchange', this.stopVideo)
      document.removeEventListener('webkitfullscreenchange', this.stopVideo)
      document.removeEventListener('msfullscreenchange', this.stopVideo)
    },
    watch: {
      playing: function (newVal) {
        if (newVal) {
          this.$refs.simpleVideo.play()
        } else {
          this.$refs.simpleVideo.pause()
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .video-wrapper {
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;}
  }
</style>