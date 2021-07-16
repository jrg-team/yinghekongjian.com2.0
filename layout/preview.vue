<template>
  <div class="preview-wrapper section-margin">
    <h3 class="title title-margin">{{ title }}</h3>
    <div class="items-wrapper">
      <div
        class="item"
        v-for="node in content"
        :key="node.title"
        :style="node.style"
      >
        <h4>{{ node.title }}</h4>
        <ul>
          <li v-for="item in node.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <black-button class="button" :linkTo="appointmentUrl"
      >预约试听</black-button
    >
  </div>
</template>

<script>
import BlackButton from "../components/BlackButton";
import { previewConfig } from "../lib/config";

export default {
  name: "preview",
  components: {
    BlackButton,
  },
  data() {
    return previewConfig[process.env.BUILD_FLAG];
  },
};
</script>

<style scoped lang="scss">
@import "../css/vars";
.preview-wrapper {
  .button {
    margin-top: 40px;
    letter-spacing: 2px;
    font-size: 14px;
    color: white;
  }
  .item > ul {
    margin-top: 1em;
    min-height: 5em;
    list-style: disc inside none;
    li {
      line-height: 180%;
      margin-left: 20px;
      text-indent: -20px;
    }
  }
}
@media (min-width: 500px) {
  .preview-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .items-wrapper {
      max-width: 70vw;
      flex: 1;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .item {
        width: 50%;
        padding: 0 5vw;
        flex-shrink: 0;
        word-break: break-word;
      }
    }
  }
}
</style>