<template>
  <custom-video
    :poster="poster"
    :link="link"
    :disabled="disabled"
  >
    <template slot-scope="slotProps">
      <img class="poster pc" :src="$cdn(poster)" alt="封面"/>
      <div 
        class="center-icon-wrapper" 
        :class="{playing: playing}" 
        @click="() => {playing = true; slotProps.togglePlayStatus()}"
        v-if="!disabled"
      >
        <i class="iconfont hcsp-bofang controller-button"></i>
        <h5 class="text">播放影片</h5>
      </div>
      <a class="get-description" :href="descriptionUrl" target="_blank">
        获取课程图文介绍 <i class="iconfont hcsp-right"></i>
      </a>
    </template>
  </custom-video>

</template>

<script>
  import CustomVideo from '../components/CustomVideo'
  import {videoConfig} from '../lib/config'

  export default {
    name: 'myVideo',
    components: {CustomVideo},
    data() {
      return {
        ...videoConfig[process.env.BUILD_FLAG],
        playing: false,
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../css/vars";
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
    z-index: $play-button-z-index;
    h5.text {
      white-space: nowrap;
      margin-top: 20px;
      color: white;
    }
    i.controller-button {
      width: 64px;
      font-size: 64px;
      display: block;
    }
  }
  .playing {display: none}
  a.get-description {
    color: white;
    text-align: center;
    max-width: 10em;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 1;
  }
</style>