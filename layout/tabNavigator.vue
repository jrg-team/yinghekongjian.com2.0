<template>
  <div class="tab-navigator-wrapper tab-wrapper" :class="{mobile: isMobile}">
    <a v-for="item in links" :key="item.key" :href="item.href" class="swiper-slide custom swiper-slide-active" :class="{ active: item.active }">
      <div class="image-wrapper pc" :style="`background-image: url(${item.image})`"></div>
      <div class="name">{{item.name}}</div>
    </a>
  </div>
</template>

<script>
import { navigatorConfig } from "../lib/config";

const links = Object.entries(navigatorConfig).map(([key, value]) => {
  return {
    key,
    href: value.link,
    active: process.env.BUILD_FLAG === key,
    image: value.miniImage,
    name: value.alias
  };
});

export default {
  name: "TabNavigator",
  data() {
    return {
      links,
      isMobile: document.body.clientWidth < 500,
    };
  },
};
</script>

<style scoped lang="scss">

$slider-width: 260px;
$slider-name-font-size: 14px;

$mini-slider-width: 100px;
$mini-slider-margin: 7.5px;
$mini-slider-name-font-size: 12px;
@import "../css/vars";
@import "../css/slider-tab";

.tab-navigator-wrapper {
  margin-top: 20px;
  margin-bottom: -30px;
}
</style>