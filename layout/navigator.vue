<template>
  <header>
    <nav class="black-navigator pc">
      <div class="content" id="link-wrapper">
        <i class="iconfont" id="black-navigator-icon"></i>
        <a href="https://jirengu.com" id="jirengu-nav-item">
          <span :class="{active: buildType === 'jirengu'}">饥人谷</span>
        </a>
        <a href="https://yinghekongjian.com" id="yinghekongjian-nav-item">
          <span :class="{active: buildType === 'yinghekongjian'}">硬核空间</span>
        </a>
        <a href="https://xiedaimala.com">
          <span>写代码啦</span>
        </a>
        <a href="https://xiedaimala.com/bbs">
          <span>河码社区</span>
        </a>
      </div>
    </nav>
    <nav class="white-navigator pc">
      <div class="content">
        <a href="/">
          <h5 v-if="buildType === 'yinghekongjian'">硬核空间</h5>
		  <h5 v-else>饥人谷</h5>
        </a>
        <div class="items">
          <a v-for="link in node[0].children" :href="link.link" :key="link.title" :class="{active: getItemStatus(link.link)}">{{link.title}}</a>
        </div>
      </div>
    </nav>
    <nav class="navigator mobile" @touchmove.prevent>
      <div class="icon-wrapper">
        <a href="/"><i class="iconfont" :class="icon"></i></a>
        <a v-for="link in node[0].children.slice(1, 4)" :href="link.link" :key="link.title" :class="{active: getItemStatus(link.link)}">{{link.title}}</a>
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
                      <a :href="child.link" :class="{active: getItemStatus(child.link)}">{{child.title}}</a>
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
import {navigatorConfig} from '../lib/config'
export default {
  name: "MyNavigator",
  data() {
    return {
      modalVisible: false,
	    buildType: process.env.BUILD_FLAG,
      ...navigatorConfig[process.env.BUILD_FLAG]
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
      if (link === '/') {
        return location.pathname === link
      } else return location.pathname.includes(link)
    }
  },
  mounted() {
	document.getElementById('black-navigator-icon').classList.add(navigatorConfig[process.env.BUILD_FLAG].icon)
    if (process.env.BUILD_FLAG === "yinghekongjian") {
      let changeNode = document.getElementById("yinghekongjian-nav-item");
      let existingnode = document.getElementById("jirengu-nav-item");
      let p = document.getElementById("link-wrapper");
      p.insertBefore(changeNode, existingnode);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../css/navigator.scss";
</style>