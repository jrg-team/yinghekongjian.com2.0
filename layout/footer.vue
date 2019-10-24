<template>
  <footer>
    <div class="content">
      <section class="col-wrapper pc">
        <div class="col" v-for="col in pcItems">
          <div class="block" v-for="block in col">
            <h5>{{block.title}}</h5>
            <ul>
              <li v-for="item in block.children">
                <a :href="item.link">{{item.text}}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="col-wrapper-mobile mobile">
        <div class="col" v-for="(col, colIndex) in mobileItems" :key="colIndex">
          <h6 @click="expandedList(colIndex)" :class="{active: col.expanded}">{{col.title}}</h6>
          <transition name="slide-fade" tag="div">
            <ul v-if="col.expanded">
              <li v-for="(item, itemIndex) in col.children" :key="itemIndex">
                <a :href="item.link">{{item.text}}</a>
              </li>
            </ul>
          </transition>
        </div>
      </section>
      <section class="tip-wrapper">
        <div class="contact">
          任何问题请致电
          <span @click="onPhoneClick" class="phone">400-618-3005</span> ,
          <br class="mobile" />或者添加客服微信:
          <v-popover class="wechat" trigger="manual" :open="showWechat">
            <span @mouseover="() => {showWechat = true}" @mouseout="() => {showWechat = false}">xiedaimala03</span>
            <template slot="popover">
              <img src="http://static.xiedaimala.com/xdml/image/f40ceb64-df08-4420-9226-7f76dbff15d5/2018-12-5-13-40-23.png"/>
            </template>
          </v-popover>
        </div>
        <div class="copyright">
          Copyright © 2019 Hungervalley Inc. 保留所有权利。
          <br class="mobile" />
          <a>隐私政策</a>
          <a>使用条款</a>
          <a>销售政策</a>
          <a>法律信息</a>
          <a>网站地图</a>
        </div>
      </section>
    </div>
  </footer>
</template>
<script>
import {footerConfig} from '../lib/config'
export default {
  name: "MyFooter",
  data() {
    return {
      pcItems: footerConfig[process.env.BUILD_FLAG].items,
      mobileItems: [],
      showWechat: false
    };
  },
  methods: {
    expandedList: function(colIndex) {
      if (this.mobileItems.length) {
        this.$set(this.mobileItems, colIndex, {
          ...this.mobileItems[colIndex],
          expanded: !this.mobileItems[colIndex].expanded
        });
      }
    },
    onPhoneClick: function() {
      window.location.href = "tel:400-618-3005";
    }
  },
  mounted() {
    let resultList = [];
    this.pcItems.map(item => {
      return item.map(col => {
        resultList.push({ ...col, expanded: false });
      });
    });
    this.mobileItems = resultList;
  }
};
</script>

<style scoped lang="scss">
@import "../css/footer.scss";
</style>