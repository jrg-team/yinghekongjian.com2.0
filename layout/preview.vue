<template>
  <div class="preview-wrapper section-margin">
    <h3 class="title title-margin">{{title}}</h3>
    <div class="items-wrapper">
      <div class="row">
        <div class="item" v-for="node in content.slice(0, this.content.length/2)">
          <h4>{{node.title}}</h4>
          <ul>
            <li v-for="item in node.items">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="item" v-for="node in content.slice(this.content.length/2, this.content.length)">
          <h4>{{node.title}}</h4>
          <ul>
            <li v-for="item in node.items">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <black-button class="button" linkTo="http://jirengu01.mikecrm.com/aJiF27K">预约试听</black-button>
  </div>
</template>

<script>
import BlackButton from "../components/BlackButton";
import { previewConfig } from "../lib/config";

export default {
  name: "preview",
  components: {
    BlackButton
  },
  data() {
    return previewConfig[process.env.BUILD_FLAG];
  }
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
  .row {
    min-width: 60vw;
  }
  .row > .item > ul {
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
      .row {
        display: flex;
      }
      .row > .item {
        max-width: 50%;
        padding: 0 5vw;
        flex: 1;
        word-break: break-word;
      }
    }
  }
}
</style>