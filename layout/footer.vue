<template>
  <footer>
    <div class="content">
      <section class="col-wrapper pc">
        <div class="col" v-for="(col, colIndex) in pcItems" :key="colIndex">
          <div class="block" v-for="(block, blockIndex) in col" :key="blockIndex">
            <h5>{{block.title}}</h5>
            <ul>
              <li v-for="(item, itemIndex) in block.children" :key="itemIndex">
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
              <div class="footer-icon-popover">
                <img :src="wechatQrCode"/>
                <p>打开微信扫描二维码，加班主任</p>
              </div>
            </template>
          </v-popover>
        </div>
        <div class="copyright">
          Copyright © 2019 Hungervalley Inc. 保留所有权利。
          <br class="mobile" />
          <a>{{record}}</a>
          <!-- <a>隐私政策</a>
          <a>使用条款</a>
          <a>法律信息</a> -->
        </div>
        <div class="icon-wrapper">
          <v-popover>
            <i class="iconfont hcsp-weixin"></i>
            <template slot="popover">
              <div class="footer-icon-popover">
                <img :src="wechatQrCode"/>
                <p>打开微信扫描二维码，加班主任</p>
              </div>
            </template>
          </v-popover>
          <v-popover>
            <i class="iconfont hcsp-weibo"></i>
            <template slot="popover" class="footer-icon-popover">
              <div class="footer-icon-popover">
                <a href="https://weibo.com/jirengu" target="_blank">
                  <img :src="weiboQrcode"/>
                </a>
                <p>打开微博扫描二维码，关注我们</p>
              </div>
            </template>
          </v-popover>
          <v-popover>
            <i class="iconfont hcsp-dianhua"></i>
            <template slot="popover" class="footer-icon-popover">
              <div class="footer-icon-popover">
                <ul>
                  <li>联系电话: 400-618-3005</li>
                  <li>客服微信: xiedaimala03</li>
                  <li class="contact-button"><span @click="showMeqia">在线咨询</span></li>
                </ul>
              </div>
            </template>
          </v-popover>
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
      mobileItems: [],
      showWechat: false,
      ...footerConfig[process.env.BUILD_FLAG]
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
    },
    showMeqia: function () {
      window._MEIQIA('showPanel')
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