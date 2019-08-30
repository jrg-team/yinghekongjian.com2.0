<template>
  <div class="video-wrapper">
    <div class="video-background-wrapper">
      <img class="poster pc" :src="poster" alt="封面" />
      <i class="iconfont hcsp-bofang controller-button" @click="toggleModalVisible"></i>
    </div>
    <div class="video-modal pc" v-show="modalVisible">
      <div class="video-mask"></div>
      <div class="video-container">
        <video id="introduction-video" :poster="poster">
          <source :src="link" type="video/mp4">
        </video>
        <i class="iconfont hcsp-bofang controller-button" @click="toggleModalVisible"></i>
        <i id="hide-modal-button" class="iconfont hcsp-wentixuanzhong"></i>
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
    name: "CustomVideo",
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
  .video-wrapper {
    position: relative;

  }
  .controller-button {
    filter: drop-shadow(0 0 4px #2f4672);
    position: absolute;
    width: 40px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }

</style>