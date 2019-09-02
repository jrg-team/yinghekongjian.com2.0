import Vue from '../lib/vue'
import marked from 'marked'
import axios from '../lib/axios'
import MyNavigator from '../layout/navigator'
import MyFooter from '../layout/footer'

const TYPE = 'yinghekongjian'
const content = `
#### 终于来了，面向未来的全栈开发体系课

你有没有经常看到这句话：“前端开发低端人才饱和，高端人才紧缺！” 
我还经常听群里的阿里巴巴员工抱怨：“想招一个 P6、P7 好难，收到的简历根本不能看

[image.png](//static.xiedaimala.com/xdml/image/02c5b19d-3b0e-47a8-a93b-301578c0f039/2019-8-29-16-45-36.png)
`
new Vue({
  el: '#app',
  data(){
    return {
      course_mode: {
        imageUrl: 'http://picsum.photos/1280/600',
        imageUrlPhone: 'http://picsum.photos/375/619',
        arrangements: [
          {
            content: content,
            image_url: 'http://picsum.photos/501/500'
          },
          {
            content: content,
            image_url: 'http://picsum.photos/500/501'
          }
        ],
        additions: [
          {
            content: content,
            image_url: 'http://picsum.photos/499/300'
          },
          {
            content: content,
            image_url: 'http://picsum.photos/500/299'
          }
        ],
        protections: [content, content, content, content]
      }
    }
  },
  created(){
    // axios.get('/settings/course_mode').then((response) => {
    //   this.course_mode = response.data.resource.items[TYPE]
    // })
  },
  components: {
    MyNavigator,
    MyFooter
  },
  methods: {
    marked
  }
})
