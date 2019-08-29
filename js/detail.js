import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import marked from 'marked'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const text = `
你有没有经常看到这句话：“前端开发低端人才饱和，高端人才紧缺！” 

我还经常听群里的阿里巴巴员工抱怨：“想招一个 P6、P7 好难，收到的简历根本不能看

#### 为什么高级工程师难以培养

如果你仔细分析上面两句话，你会发现两个事实： 
1. 前端开发从业者中，有众多初级前端
2. 这些初级前端，没办法升到高级

![image.png](//static.xiedaimala.com/xdml/image/02c5b19d-3b0e-47a8-a93b-301578c0f039/2019-8-29-16-45-36.png)
>备注备注备注
<table border=1>
    <thead>
      <tr>
        <th>学习主题</th>
        <th>学习目标</th>
        <th>技能点</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>短文本</td>
        <td rowspan="5" class="multLine">能使用 Git 进行基本的版本管理 <br/>能使用 Git 进行基本的版本管理 <br/>能使用 Git 进行基本的版本管理 <br/>能使用 GitHub 进行基本的团队协作 <br/>能使用Markdown编写文档</td>
        <td rowspan="5">Git <br/>GitHub<br/> Markdown</td>
      </tr>
      <tr>
        <td>稍微长一点的文本</td>
      </tr>
      <tr>
        <td>稍微长一点的文本</td>
      </tr>
      <tr>
        <td>稍微长一点的文本</td>
      </tr>
      <tr>
        <td>稍微长一点的文本</td>
      </tr>
    </tbody>
  </table>
`

new Vue({
  el: '#app',
  data(){
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        on: {
          slideChange: () => {
            if(this.swiper){
              this.activeIndex = this.swiper.activeIndex
            }
          }
        }
      },
      activeIndex: 1
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    renderMd(){
      return marked(text)
    }
  }
})
