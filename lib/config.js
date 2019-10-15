const titleConfig = {
    yinghekongjian: `<h1>真正的硬核<br/>是用技术开创自己的世界</h1>`,
    jirengu: `<h1>饥人谷<br/>培养有灵魂的前端工程师</h1>`
}

const navigatorConfig = {
    yinghekongjian: {
        node: [
            {
                title: "硬核空间",
                expanded: true,
                children: [
                    { title: "介绍", link: "#" },
                    { title: "课程详情", link: "#" },
                    { title: "教学模式", link: "#" },
                    { title: "真实的故事", link: "#" },
                    { title: "关于我们", link: "#" }
                ]
            },
            {
                title: "饥人谷",
                expanded: false,
                link: "https://jirengu.com"
            },
            {
                title: "写代码啦",
                expanded: false,
                link: "https://xiedaimala.com"
            },
            {
                title: "河马社区",
                expanded: false,
                link: "https://xiedaimala.com/bbs"
            }
        ],
        icon: 'hcsp-icon-white'
    },
    jirengu: {
        node: [
            {
                title: "饥人谷",
                expanded: true,
                children: [
                    { title: "介绍", link: "#" },
                    { title: "课程详情", link: "#" },
                    { title: "教学模式", link: "#" },
                    { title: "真实的故事", link: "#" },
                    { title: "关于我们", link: "#" }
                ]
            },
            {
                title: "yinghekongjian",
                expanded: false,
                link: "https://yinghekongjian.com"
            },
            {
                title: "写代码啦",
                expanded: false,
                link: "https://xiedaimala.com"
            },
            {
                title: "河马社区",
                expanded: false,
                link: "https://xiedaimala.com/bbs"
            }
        ],
        icon: 'hcsp-jrg-logo-white'
    }
}

const videoConfig = {
    yinghekongjian: {
        poster: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-18-18-0-57.png',
        link: 'https://static.xiedaimala.com/hcsp-spread.mp4',
        descriptionUrl: "https://mp.weixin.qq.com/s/GktAwEIvrtaOh6aDzZSGug",
    },
    jirengu: {
        poster: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-16-2-45.png',
        link: 'https://static.xiedaimala.com/hcsp-spread.mp4',
        descriptionUrl: "https://mp.weixin.qq.com/s/q_-KdTfGz7xowSTWcL2A3Q",
    }
}

const previewConfig = {
    yinghekongjian: {
        content: [
            {
                title: '先进教学的倡导者',
                items: ['CI机器人review代码', '所有作业严格按照真实开发流程操作']
            },
            {
                title: 'Java领域的先驱者',
                items: ['Gradle开发团队核心成员', '丰富处理复杂bug的经验']
            },
            {
                title: '不忘初衷的教育者',
                items: ['全程陪伴学生学习Java', '服务到就业、自我提升']
            },
            {
                title: '真材实料的开发者',
                items: ['全程真实项目', '开发协作打磨技能']
            }
        ]
    },
    jirengu: {
        content: [
            {
                title: '先进教学的倡导者',
                items: ['CI机器人review代码', '所有作业严格按照真实开发流程操作']
            },
            {
                title: 'Java领域的先驱者',
                items: ['Gradle开发团队核心成员', '丰富处理复杂bug的经验']
            },
            {
                title: '不忘初衷的教育者',
                items: ['全程陪伴学生学习Java', '服务到就业、自我提升']
            },
            {
                title: '真材实料的开发者',
                items: ['全程真实项目', '开发协作打磨技能']
            }
        ]
    }
}

const teacherConfig = {
    yinghekongjian: {
        teacherList: [{
            name: '张博',
            introduction: `<h3>张博</h3><h6>种一棵树最好的时间是十年前，其次是现在</h6>
  <p>你好，我叫张博，前阿里巴巴资深工程师，现任Gradle核心团队成员，日常工作就是写开源代码。我给包括JDK/Maven在内的众多开源项目都贡献过代码，如果你是写Java的，那么你多半在用我写的代码。</p>
  <p>很多人会问我如何学习——如何学习编程，学习Java，学习英语，我总是回答他们，其实只有两个字：坚持。这个世界上有谁一生下来就是什么都会的呢？</p>
  <p>没有。每个人的知识都是一点一滴积攒起来的。无他，唯手熟尔。你要做的，就只是坚持不懈而已。</p>
  <p>下定决心之后，接下来要做的，就是寻找一个努力的方向。这就是我存在的意义，我指给你正确的方向，并且在你最无力的时候推你一把。</p>
  <p>在硬核空间，你有非常清晰、方向明确的学习路径，有海量的真实代码练手，有业界最顶尖的专家辅导。你还在等什么呢？</p>
  <p>我的GitHub主页是<a href="https://github.com/blindpirate">@blindpirate</a>，欢迎follow我！</p>`,
            image: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-11-9-46-7.png',
            mobileImage: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-10-16-10-42.png'
        }, {
            name: '无隅',
            introduction: `<h3>无隅</h3><h6>从这里开始 带你开启一线大厂工程师之路</h6>
  <p>你好，我是无隅，欢迎加入硬核空间。在接下来的几个月，我会与你一道，一起探索Java与系统架构设计的世界。</p>
  <p>我目前在Amazon担任软件工程师。团队所从事的是公司核心业务，对于大规模的分布式系统，如何更快更稳定尽量不出错永远是技术孜孜不倦乐此不疲追求的目标。我们不需要“差不多”或“还行”的代码，而是需要达到高质量设计与实现的水准。</p>
  <p>一线大厂是很多同学梦寐以求的岗位，大家缺乏的并不是机会，而是通过面试的经验与信心。所以我希望能够将一线研发的经验规范和需要掌握的知识体系在大家初入后端世界的时候就带给大家，让这些经验与理念深入到你的脑海里，有个良好的开端。</p>
  <p>最后我想给大家说的是，学习是一件漫长的事情。自然界的一项根本法则就是为了赢得力量，必须努力突破极限，而这是痛苦的。我们可以选择健康并痛苦的事实，也可以选择不健康但舒适的幻觉。段时间并不能感觉到差别，当你放到很长时间维度里面，坚持一年两年，五年十年.....最后的成就绝对是指数级的差距。所以我希望你能和我坚持下来，共同成长。遇到问题选择的不是逃避，而是努力探寻答案与解决方法。这一次，就让我们一起来探索后端世界的奥秘，一起开启一线大厂工程师之路！</p>
  <p>我在硬核空间会开设如下的一些课程，通过这些模块化的课程，希望能帮助大家系统且有体系地掌握核心知识：
    <a href="https://xiedaimala.com/courses/118b5d4e-c080-4ed7-ab55-9e7b8d175d2f" target="_blank">《程序员的算法课》</a>、
    <a href="https://xiedaimala.com/courses/82f9fd03-2528-4e68-ba42-f3fd7820535d" target="_blank">《从零开始设计模式》</a>、
    <a href="https://xiedaimala.com/courses/730db4a0-6927-467d-b725-589017848952" target="_blank">《微服务架构实战》</a>、
    <a href="https://xiedaimala.com/courses/297dd624-50a3-435a-9e0c-5fa8f79042fd" target="_blank">《Java 8特性实战》</a> 
    未完待续...</p>
  `,
            image: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-16-21-34-20.png',
            mobileImage: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-18-18-10-14.png'
        }]
    },
    jirengu: {
        teacherList: [{
            name: '方方老师',
            introduction: `<h3>方方</h3><h6>方方老师，资深前端开发、饥人谷资深前端讲师。华中科技大学毕业，毕业后先后在腾讯、阿里巴巴和彩程任职</h6>`,
            image: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-15-56-59.png',
            mobileImage: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-15-56-59.png'
        },
        {
            name: '若愚老师',
            introduction: `<h3>若愚</h3><h6>前百度、阿里巴巴工程师，饥人谷最受欢迎的讲师之一，擅长 Node.js、Vue.js技术栈 ，善于把复杂的问题简单化</h6>`,
            image: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-15-57-5.png',
            mobileImage: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-15-57-5.png'
        }
        ]
    }
}

export { titleConfig, navigatorConfig, videoConfig, previewConfig, teacherConfig }