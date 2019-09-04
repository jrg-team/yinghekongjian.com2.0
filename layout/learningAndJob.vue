<template>
  <section class="learning-wrapper section-margin">
    <div class="title title-margin">
      <h3>学习与就业保障</h3>
      <p>我们提供尽可能好的教学服务，让学生轻松、真实的环境下学习。保障学习效果，保障就业</p>
    </div>
    <div class="text-wrapper">
      <div class="row">
        <div class="col">
          <h5>课程服务</h5>
          <ul>
            <li>任务制的学习模式，把课程拆解为一个个的任务，完成任务批改通过才可进行下一关卡，把大目标分解为一个个小目标。</li>
            <li>学习更有阶段成就感，学习效果更扎实</li>
            <a href="#">进一步了解 <i class="iconfont hcsp-right"></i></a>
          </ul>
        </div>
        <div class="col">
          <h5>班级服务</h5>
          <ul>
            <li>分班管理，老师每天12小时在线随时答疑；课程平台自动记录班级学生学习进度曲线；班主任定期检查进度，关注每位学生的学习动态。</li>
            <li>结伴小组、3天班长制、吃鸡赢大奖、每周对赌计划</li>
            <a href="#">进一步了解 <i class="iconfont hcsp-right"></i></a>
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
            <a href="#">进一步了解 <i class="iconfont hcsp-right"></i></a>
          </ul>
        </div>
        <div class="col">
          <h5>学习保障</h5>
          <ul>
            <li>承诺一周且5个任务内退全款，4个月内且高级任务前可申请退款（扣除已经学习的费用）</li>
            <li>退费条款写入合同，具有法律效应，真实保障</li>
            <a href="#">进一步了解 <i class="iconfont hcsp-right"></i></a>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'learningAndJob'
  }
</script>

<style lang="scss" scoped>
  @import "../css/vars";
  .learning-wrapper {
    background-color: #F2F2F2;
    padding-top: 0;
    .text-wrapper {
      max-width: 980px;
      position: relative;
      left: 0;
      right: 0;
      margin: 0 auto;
      .row {
        display: flex;
        .col {
          max-width: 50%;
          flex: 1;
        }
        .col + .col {margin-left: 50px;}
      }
      ul {
        margin: 16px 20px;
        min-height: 8em;
      }
      li {
        list-style: disc outside none;
        font-size: 14px;
        line-height: 200%;
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