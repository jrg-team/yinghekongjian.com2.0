<template>
  <section class="pictureTextList">
    <template v-if="listdata && listdata.length !== 0">
      <h2 class="pc">{{title}}</h2>
      <h3 class="mobile">{{title}}</h3>
    </template>
    <section class="pc">
      <div :key="index" :class="{reverse: index % 2 === 0}" v-for="data,index in listdata" class="row">
        <div class="image" :style="{backgroundImage: `url(${$cdn(data.image_url)})`}" alt=""></div>
        <div class="content">
          <div class="md-wrapper" v-html="marked(data.content)"></div>
          <a v-if="data.link" :href="data.link">{{data.link_text}}</a>
        </div>
      </div>
    </section>
    <section class="mobile">
      <div :key="index" v-for="data,index in listdata" class="row">
        <div class="imageWrapper">
          <img :src="$cdn(data.image_url)" alt=""/>
          <div class="imgCover"></div>
        </div>
        <div class="content">
          <div class="md-wrapper" v-html="marked(data.content)"></div>
          <a v-if="data.link" :href="data.link">{{data.link_text}}</a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import marked from 'marked'

  export default {
    name: 'pictureTextList',
    props: {
      listdata: Array,
      title: String
    },
    methods: {
      marked
    }
  }
</script>

<style lang="scss" scoped>
  h2,h3,h4{
    &.pc{
      text-align: center;
      margin-top: 100px;
      margin-bottom: 100px;
    }
    &.mobile{
      text-align: center;
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }

  .mobile {
    display: none;
  }
  .pc{
    .row{
      display: flex;
      min-height: 360px;
      &.reverse{
        flex-direction: row-reverse;
        .content{
          padding: 60px 100px 60px 120px;
        }
      }
      .image,.content{width: 50%}
      .image{
        background-position: center;
        background-size: cover;
      }
      .content{
        background: #FAFAFA;
        padding: 60px 120px 60px 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        a{color: #3475C6;}
      }
    }
  }
  .mobile{
    .row{
      margin-bottom: 50px;
      position: relative;
      .imageWrapper{
        position: relative;
        img{width: 100%;vertical-align: center;}
        .imgCover{
          position: absolute;
          background: linear-gradient(360deg, #FFFFFF 0%, #FFFFFF 23.96%, rgba(255, 255, 255, 0) 100%);
          bottom: 0;left: 0;right: 0;top: 0;
        }
      }
      .content{
        position: relative;
        margin-top: -120px;
        padding: 0 10px;
        .md-wrapper{
          h1,h2,h3,h4,h5 {
            &:first-child {margin-top: 50px;}
          }
        }
        >a{
          display: block;
          text-align: center;
          background: #333333;
          padding: 5px 0;
          color: #FFF;
          margin: 40px 0 50px 0;
        }
      }
    }
  }
  @media (max-width: 499px) {
    .pc {
      display: none!important;
    }
    .mobile {
      display: block;
    }
  }
</style>