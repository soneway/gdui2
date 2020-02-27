module.exports = {
  host: '127.0.0.1',
  port: '8405',
  title: 'gdui2',
  base: '/gdui2/docs-dist/',
  lastUpdated: 'Last Updated',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/start' },
      { text: '表单引擎', link: 'https://soneway.github.io/form-engine/docs-dist/guide/start.html' },
    ],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          ['/guide/start', '快速上手'],
        ],
      },
      {
        title: '基础',
        collapsable: false,
        children: [
          ['/base/color', 'Color 颜色'],
          ['/base/font', 'Font 字体'],
        ],
      },
      {
        title: '布局',
        collapsable: false,
        children: [
          ['/layout/grid', 'Grid 栅格'],
        ],
      },
      {
        title: '提示',
        collapsable: false,
        children: [
          ['/notice/page-loading', 'PageLoading 全屏加载中'],
          ['/notice/alert', 'Alert 警示框'],
          ['/notice/confirm', 'Confirm 确认框'],
          ['/notice/toast', 'Toast 弱提示'],
        ],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          ['/components/icon', 'Icon 图标'],
          ['/components/input', 'Input 输入框'],
          ['/components/loading', 'Loading 加载中'],
          ['/components/button', 'Button 按钮'],
          ['/components/checkbox', 'Checkbox 复选框'],
          ['/components/radio', 'Radio 单选框'],
          ['/components/modal', 'Modal 模态框'],
          ['/components/form', 'Form 表单'],
          ['/components/select', 'Select 选择器'],
          ['/components/check-list', 'CheckList 选项列表'],
          ['/components/region-picker', 'RegionPicker 地区选择器'],
          ['/components/tabs', 'Tabs 标签页'],
          ['/components/tag', 'Tag 标签'],
          ['/components/poptip', 'Poptip 气泡提示'],
          ['/components/table', 'Table 表格'],
          ['/components/pagination', 'Pagination 分页'],
          ['/components/steps', 'Steps 步骤条'],
          ['/components/tree', 'Tree 树形组件'],
          ['/components/tree-x', 'TreeX 树形组件增强版'],
          ['/components/datepicker', 'Datepicker 日期选择器'],
          ['/components/timeline', 'Timeline 时间轴'],
          ['/components/breadcrumb', 'Breadcrumb 面包屑'],
          ['/components/confirm-poptip', 'ConfirmPoptip 确认气泡提示'],
          ['/components/rate', 'Rate 评分'],
          ['/components/upload', 'Upload 文件上传'],
        ],
      },
    ],
  },
};
