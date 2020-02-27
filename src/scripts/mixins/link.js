export default {
  props: {
    to: String,
    replace: Boolean,
    target: String,
  },
  methods: {
    redirect (isBlank = false) {
      if (isBlank) {
        return window.open(this.to);
      }

      const { $router } = this;
      if ($router) {
        this.replace ? $router.replace(this.to) : $router.push(this.to);
      }
      else {
        window.location.href = this.to;
      }
    },
    onClick (event, isBlank = false) {
      if (!this.to) return;

      if (this.target === '_blank') {
        return false;
      }

      event.preventDefault();
      this.redirect(isBlank);
    },
  },
};
