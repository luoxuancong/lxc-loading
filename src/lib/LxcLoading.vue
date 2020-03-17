<template>
  <div
    v-if="loading"
    class="loadings"
    :style="
      `
      height:calc(100% - ${offsetTop});
      top:${offsetTop};
      ${showBg ? 'background:' + bgColor : ''};
      z-index:${zIndex}
      `"
  >
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LxcLoading',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    offsetTop: {
      type: String,
      default: '0px'
    },
    showBg: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: 'rgba(0,0,0,.9)'
    },
    zIndex: {
      type: String,
      default: '9999'
    }
  }
}
</script>

<style lang="scss" scoped>
.loadings {
  position: fixed;
  left: 0;
  width: 100%;
  .loading {
    user-select: none;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -20px 0 0 -40px;
    text-align: center;
  }
}
.loading {
  width: 80px;
  height: 40px;
  margin: 0 auto;
  margin-top: 100px;
}
.loading span {
  display: inline-block;
  user-select: none;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: #4715d8;
  -webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load {
  0%,
  100% {
    height: 40px;
    background: #4715d8;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: #e94960;
  }
}
.loading span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  -webkit-animation-delay: 0.4s;
}
.loading span:nth-child(4) {
  -webkit-animation-delay: 0.6s;
}
.loading span:nth-child(5) {
  -webkit-animation-delay: 0.8s;
}
</style>
