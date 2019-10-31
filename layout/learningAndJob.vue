<template>
  <section class="learning-wrapper section-margin">
    <div class="title title-margin">
      <h3>学习与就业保障</h3>
      <p>尽我们所能，想学生之所想，让学生在轻松真实的环境下开展学习，同时保障学习的效果，学生个人权益，承诺服务至就业</p>
    </div>
    <div class="text-wrapper">
      <div class="row">
        <div class="col">
          <h5>课程服务</h5>
          <ul>
            <li>任课老师无时差答疑，有问题随时call老师</li>
            <li>大量学习资料，视频主导、文章辅助、作业练习，实时更新</li>
            <li>课程1V1作业批改指导，查漏补缺</li>
            <a href="/new/mode" class="pc">
              进一步了解
              <i class="iconfont hcsp-right"></i>
            </a>
          </ul>
        </div>
        <div class="col">
          <h5>班级服务</h5>
          <ul>
            <li>班主任定期检查进度，关注每位学生的学习</li>
            <li>班级活动，堪比线下的超活跃学习氛围</li>
            <li class="tips">
              <v-popover v-for="(tooltip,index) in tooltips" :key="index">
                <span class="text">{{tooltip.text}}</span>
                <span v-if="index < (tooltips.length -1)">，</span>
                <template slot="popover">
                  <p>{{ tooltip.tip }}</p>
                </template>
              </v-popover>
            </li>
            <a href="/new/mode#class-indicator" class="pc">
              进一步了解
              <i class="iconfont hcsp-right"></i>
            </a>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>就业服务</h5>
          <ul>
            <li>模拟面试，模拟真实面试场景，打有准备的帐</li>
            <li>简历指导，不造假简历，只需最真实的项目描述</li>
            <li>内推岗位，国内一线大厂皆可内推</li>
            <li>面试押题，涵盖大多数企业面试题，提前准备</li>
            <a href="/new/mode#job-indicator" class="pc">
              进一步了解
              <i class="iconfont hcsp-right"></i>
            </a>
          </ul>
        </div>
        <div class="col">
          <h5>学习保障</h5>
          <ul>
            <li>承诺一周且5个任务内退全款，4个月内且高级任务前可申请退款（扣除已经学习的费用）</li>
            <li>退费条款写入合同，具有法律效应，真实保障</li>
            <a href="/new/mode#promise-indicator" class="pc">
              进一步了解
              <i class="iconfont hcsp-right"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <black-button class="mobile" linkTo='mode'>进一步了解</black-button>
  </section>
</template>

<script>
import BlackButton from "../components/BlackButton";

export default {
  name: "learningAndJob",
  components: {
    BlackButton
  },
  data() {
    return {
      tooltips: [
        {
          text: "结伴小组",
          tip:
            "寻找谷内学习进度相近的小伙伴一起学习，每天进步一点点！或是寻找毕业的学长学姐带领学习，老司机带带我！"
        },
        {
          text: "3天班长制",
          tip:
            "班级群内成员轮流当小班长，带领同学们一起学习，活跃班级氛围，分享学习重点、分享生活经验！"
        },
        {
          text: "吃鸡赢大奖",
          tip:
            "活动参与者需要每2天完成一个任务，每天奖金池中增加5元现金，未完成任务者淘汰！直至剩下最后一位同学吃鸡赢得奖金池内所有奖金！"
        },
        {
          text: "每周对赌计划",
          tip:
            "周一定下本周目标与未完成需发红包金额，下周一检查目标完成情况，未完成者需发定下的红包金额！"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../css/vars";
.learning-wrapper {
  background-color: $v-popover-white;
  .text-wrapper {
    max-width: 980px;
    position: relative;
    left: 0;
    right: 0;
    margin: 0 auto;
    @media (min-width: 500px) {
      .row {
        display: flex;
        .col {
          max-width: 50%;
          flex: 1;
        }
        .col + .col {
          margin-left: 50px;
        }
      }
    }
    ul {
      margin: 24px 20px;
      min-height: 8em;
    }
    li {
      list-style: disc outside none;
      font-size: 14px;
      line-height: 200%;
      &.tips > .v-popover {
        display: inline-block;
        cursor: pointer;
        span.text {
          text-decoration: underline;
        }
      }
    }
    a {
      display: block;
      font-size: 14px;
      color: $blue;
      padding-top: 10px;
    }
  }
}
</style>