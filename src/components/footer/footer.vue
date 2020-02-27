<template>
  <footer class="footer footer-tiny">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-contact">
          <div class="contact-right">
            <a
              @click="onFeedbackClick"
              class="support-link"
              target="_blank"><span>政府网站找错</span></a>
            <a
              class="support-party"
              href="http://bszs.conac.cn/sitename?method=show&id=61643BF620EB1A7AE053022E1AAC1CB6"
              target="_blank"><span>党政机关</span></a>
          </div>
          <div
            class="contact-left"
            v-if="telphone">
            <p class="contact-title">联系我们</p>
            <p class="contact-content">热线电话：{{ telphone }}</p>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="footer-copyright-top">
            <span
              class="footer-copyright--block"
              v-for="(item, index) in copyrightTop"
              :key="index">
              {{ item.label }}
              <a
                v-if="item.url"
                target="_blank"
                :href="item.url">{{ item.value }}</a>
              <a v-else>{{ item.value }}</a>
            </span>
          </div>
          <div class="footer-copyright-bottom">
            <span
              class="footer-copyright--block"
              v-for="(item, index) in copyrightBottom"
              :class="item.className"
              :key="index">
              {{ item.label }}
              <a
                v-if="item.url"
                target="_blank"
                :href="item.url">{{ item.value }}</a>
              <span v-else>{{ item.value }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  const name = 'gd-footer';

  export default {
    name,
    components: {},
    props: {
      telphone: {
        type: String,
        default () {
          return '12345';
        },
      },
      copyrightTop: {
        type: Array,
        default () {
          return [
            {
              label: '主办：',
              value: '广东省人民政府办公厅',
              url: 'http://www.gd.gov.cn/',
            },
            {
              label: '承办：',
              value: '数字广东网络建设有限公司',
              url: 'http://www.soneway.com.cn',
            }, {
              label: '版权所有：',
              value: '广东政务服务网',
              url: 'http://www.gd.gov.cn/',
            },
          ];
        },
      },
      copyrightBottom: {
        type: Array,
        default () {
          return [
            {
              label: '粤ICP备',
              value: '05070829号-2',
              url: 'http://www.miitbeian.gov.cn/',
            },
            {
              className: 'footer-beian',
              label: '粤公网安备',
              value: '44010402001768号',
              url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010402001768',
            },
            {
              label: '网站标识码',
              value: '4400000084',
            },
          ];
        },
      },
    },
    data () {
      return {};
    },
    methods: {
      onFeedbackClick () {
        let currentUrl = encodeURIComponent(location.href);
        const url = `http://121.43.68.40/exposure/jiucuo.html?site_code=4400000084&url=${currentUrl}`;
        window.open(url);
      },
    },
  };
</script>
