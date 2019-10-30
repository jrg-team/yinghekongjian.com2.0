<template>
  <div class="wrapper" :style="{minWidth: `calc(100% / ${12/computedGrid})`}">
    <div
      class="background"
      :style="{backgroundImage: `url(${$cdn(imageUrl)})`}"
      @mouseenter="() => {hovering = true}"
      @mouseleave="() => {hovering = false}"
    >
      <div class="mask">
        <h4 class="title">{{title}}</h4>
        <transition name="fade">
          <div class="description" v-if="hovering || isMobile">{{description}}</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pictureWithMask",
  props: {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    grid: { type: Number, default: 6 }
  },
  data() {
    return {
      hovering: false,
      isMobile: document.documentElement.clientWidth < 500
    };
  },
  computed: {
    computedGrid() {
      return this.isMobile ? 12 : this.grid;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../css/vars";
div.wrapper {
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: 8px;
}
div.background {
  display: flex;
  align-items: flex-end;
  flex: 1;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  max-height: 400px;
  overflow: hidden;
}
div.mask {
  flex: 1;
  height: fit-content;
  line-height: 170%;
  padding: 40px 20px 20px;
  overflow: hidden;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  .title,
  .description {
    color: white;
  }
  .title {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
.fade-enter-active {
  max-height: 100px;
  transition: all 0.3s ease 0.2s;
}
.fade-leave-active {
  max-height: 100px;
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>