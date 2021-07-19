<template>
  <header>
    <nav class="black-navigator pc">
      <div class="content" id="link-wrapper">
        <i class="iconfont" id="black-navigator-icon" :class="icon"></i>
        <a :href="links[0].href" target="_blank">
          <span class="active">{{links[0].name}}</span>
        </a>
        <a href="https://xiedaimala.com" target="_blank">
          <span>课程平台</span>
        </a>
        <a href="https://blog.jirengu.com/?cat=11" target="_blank">
          <span>就业数据</span>
        </a>
        <a href="https://www.zhihu.com/question/41845934" target="_blank">
          <span>学员评价</span>
        </a>
        <a href="https://xiedaimala.com/bbs" target="_blank">
          <span>河码社区</span>
        </a>
        <a :href="link.href" target="_blank" v-for="link in links.slice(1)" :key="link.name">
          <span>{{link.name}}</span>
        </a>
      </div>
    </nav>
    <nav class="white-navigator pc">
      <div class="content">
        <a :href="link">
          <h5>{{name}}</h5>
        </a>
        <div class="items">
          <template v-for="link in node[0].children">
            <v-popover class="wechat" v-if="/交流群/.test(link.title)">
              <span class="title">{{link.title}}<i class="iconfont hcsp-hot"/></span>
              <template slot="popover">
                <div class="navigator-icon-popover">
                  <img :src="link.link" />
                  <p v-html="link.text"></p>
                </div>
              </template>
            </v-popover>
            <a
              :href="link.link"
              :key="link.title"
              :class="{active: getItemStatus(link.link)}"
              v-else
            >{{link.title}}</a>
          </template>
        </div>
      </div>
    </nav>
    <nav class="navigator mobile" @touchmove.prevent>
      <div class="icon-wrapper">
        <a href="/">
          <i class="iconfont" :class="icon"></i>
        </a>
        <a
          v-for="link in node[0].children.slice(1, 4)"
          :href="link.link"
          :key="link.title"
          :class="{active: getItemStatus(link.link)}"
        >{{link.title}}</a>
        <i class="iconfont hcsp-zhankai" @click="toggleModalVisible"></i>
      </div>
      <transition name="menu">
        <section class="black-modal" v-show="modalVisible">
          <div class="items-wrapper">
            <ul>
              <li v-for="(item,index) in node" :class="{active: item.expanded}">
                <a
                  :href="item.link || 'javascript:void(0);'"
                  @click="toggleSubmenu(index)"
                >{{item.title}}</a>
                <transition name="submenu">
                  <ul v-if="item.expanded && item.children && item.children.length > 0">
                    <li v-for="child in item.children">
                      <a
                        :href="child.link"
                        :class="{active: getItemStatus(child.link)}"
                      >
                      {{child.title}}
                      <i class="iconfont hcsp-hot" v-if="/交流群/.test(child.title)"/></a>
                    </li>
                  </ul>
                </transition>
              </li>
            </ul>
          </div>
        </section>
      </transition>
    </nav>
    <div class="mobile" style="background: transparent;height: 5vh;"></div>
  </header>
</template>
<script>
import { navigatorConfig as allConfig } from "../lib/config";
const navigatorConfig = allConfig[process.env.BUILD_FLAG]
export default {
  name: "MyNavigator",
  data() {
    return {
      modalVisible: false,
      buildType: process.env.BUILD_FLAG,
      ...navigatorConfig,
    };
  },
  methods: {
    toggleModalVisible() {
      this.modalVisible = !this.modalVisible;
    },
    toggleSubmenu(index) {
      if (this.node[index].children && this.node[index].children.length > 0) {
        this.node[index].expanded = !this.node[index].expanded;
      }
    },
    getItemStatus(link) {
      if (link === "/") {
        return location.pathname === link;
      } else return location.pathname.includes(link);
    }
  },
  computed: {
    links() {
      const baseLinks = Object.entries(allConfig).map(([key, value]) => ({
        key: key,
        name: value.name,
        href: value.link
      }))
      return baseLinks.sort((_, b) => b.key === process.env.BUILD_FLAG ? 1 : -1 )
    }
  }
};
</script>

<style scoped lang="scss">
@import "../css/navigator.scss";
</style>