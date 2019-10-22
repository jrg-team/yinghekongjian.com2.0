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
            <span @mouseover="() => {showWechat = true}" @mouseout="() => {showWechat = false}">hungervalley</span>
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
export default {
  name: "MyFooter",
  data() {
    return {
      pcItems: [
        [
          {
            title: "前端系统课",
            children: [
              { text: "从入门到工作", link: "#" },
              { text: "前端精进", link: "#" },
              { text: "全栈课", link: "#" }
            ]
          },
          {
            title: "Java系统课",
            children: [{ text: "从入门到工作", link: "#" }]
          }
        ],
        [
          {
            title: "前端专题课",
            children: [
              { text: "JavaScript系列", link: "#" },
              { text: "CSS系列", link: "#" },
              { text: "TypeScript系列", link: "#" },
              { text: "Http", link: "#" },
              { text: "Vue", link: "#" },
              { text: "React", link: "#" },
              { text: "移动端系列", link: "#" },
              { text: "设计模式系列", link: "#" },
              { text: "算法系列", link: "#" }
            ]
          }
        ],
        [
          {
            title: "Java专题课",
            children: [
              { text: "算法系列", link: "#" },
              { text: "微服务", link: "#" },
              { text: "Java8", link: "#" }
            ]
          }
        ],
        [
          {
            title: "旗下产品",
            children: [
              { text: "硬核空间", link: "#" },
              { text: "饥人谷", link: "#" },
              { text: "写代码啦", link: "#" },
              { text: "Hunger Works", link: "#" }
            ]
          },
          {
            title: "合作伙伴",
            children: [{ text: "leanote", link: "https://leanote.com/" }]
          }
        ],
        [
          {
            title: "关于 饥人谷",
            children: [{ text: "关于我们", link: "about" }]
          }
        ]
      ],
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