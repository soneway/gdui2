<template>
  <div>
    <gd-timeline placement="left" :time-width="110">
      <gd-timeline-item>
        <div slot="dot" class="finish-bg"></div>
        <div class="title" slot="content">结束</div>
      </gd-timeline-item>

      <gd-timeline-item>
        <div slot="time">
          <div>2018-03-15</div>
          <div>11:12:22</div>
        </div>
        <div class="desc" slot="content">已完成</div>
      </gd-timeline-item>

      <gd-timeline-item>
        <div slot="dot" class="finish-bg"></div>
        <div class="title" slot="content">签发</div>
      </gd-timeline-item>

      <gd-timeline-item>
        <div slot="detail">
          <div class="header desc">
            <div class="status">修改工单</div>
            <div class="operator">操作人员：张志文（243634424）</div>
          </div>
          <div class="detail">
            <p>修改拟派意见：广东省举报处理中心；</p>
            <p>修改拟派意见：广东省举报处理中心；</p>
            <p>修改拟派意见：广东省举报处理中心；</p>
            <p>修改拟派意见：广东省举报处理中心；</p>
          </div>
        </div>
      </gd-timeline-item>

      <gd-timeline-item>
        <div slot="dot" class="finish-bg"></div>
        <div class="title" slot="content">开始</div>
      </gd-timeline-item>

      <gd-timeline-item>
        <div slot="time">
          <div>2018-03-15</div>
          <div>11:12:22</div>
        </div>
        <div class="desc" slot="content">结束</div>
      </gd-timeline-item>

    </gd-timeline>
  </div>
</template>

<style lang="css" scoped>
.finish-bg {
  width: 18px;
  height: 18px;
  background-image: url('./assets/finish.png');
  background-size: 100%;
}
.title {
  font-size: 14px;
  color: #0D1C28;
  line-height: 24px;
}

.desc {
  font-size: 12px;
  color: #6E777E;
  letter-spacing: 0;
  line-height: 22px;
}
.header::after {
  content: '';
  display: block;
  clear: both;
}

.status {
  display: inline-block;
}

.operator {
  float: right;
}

.detail {
  opacity: 0.5;
  background: #F1F2F3;
  padding: 12px 16px;
}
</style>
