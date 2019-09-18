<template>
  <custom-video
    :poster="poster"
    :link="link"
  >
    <template slot-scope="slotProps">
      <img class="poster pc" :src="$cdn(poster)" alt="封面"/>
      <div class="center-icon-wrapper" :class="{playing: playing}" @click="() => {playing = true; slotProps.togglePlayStatus()}">
        <i class="iconfont hcsp-bofang controller-button"></i>
        <h5 class="text">播放影片</h5>
      </div>
      <a class="get-description" href="#" :class="{playing: playing}">
        获取文字描述 <i class="iconfont hcsp-right"></i>
      </a>
    </template>
  </custom-video>

</template>

<script>
  import CustomVideo from '../components/CustomVideo'

  export default {
    name: 'myVideo',
    components: {CustomVideo},
    data() {
      return {
        poster: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-18-18-0-57.png',
        link: 'https://static.xiedaimala.com/hcsp-spread.mp4',
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
    max-width: 8em;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>