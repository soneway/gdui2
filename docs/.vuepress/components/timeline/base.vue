<template>
  <div>
    <gd-timeline>
      <gd-timeline-item>
        <div slot="time">2018-03-15 11:12:22</div>
        <div slot="content">系统自动审核通过</div>
      </gd-timeline-item>

      <gd-timeline-item :active="true">
        <div slot="time">2018-03-15 11:12:22</div>
        <div slot="content">系统自动审核通过，进入人工审核</div>
        <div slot="detail">
          <gd-button
            type="primary"
            size="small">立即补交材料
          </gd-button>
          <gd-button
            size="small">撤回办件
          </gd-button>
          <gd-button
            size="small">查看回执
          </gd-button>
        </div>
      </gd-timeline-item>

      <gd-timeline-item>
        <div slot="time">2018-03-15 11:12:22</div>
        <div slot="content">系统自动审核通过，进入人工审核系统自动审核通过，进入人工审核系统自动审核通过，进入人工审核系统自动审核通过，进入人工审核系统自动审核通过，进入人工审核系统自动审核通过，进入人工审核系统自动审核通过，进入人工审核系统自动审核通过，进入人工审核系统自动审核通过，进入人工审核</div>
      </gd-timeline-item>

      <gd-timeline-item>
        <div slot="content">系统自动审核通过，进入人工审核系统</div>
      </gd-timeline-item>
    </gd-timeline>
  </div>
</template>
