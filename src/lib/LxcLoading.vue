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
      `
    "
  >
    <div v-if="type === 'bounce'" class="loading-bounce loading-positon">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-if="type === 'line'" class="loading-line loading-positon">
      <span></span>
    </div>
    <div v-if="type === 'semicircle'" class="loader-semicircle loading-positon">
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LxcLoading",
  props: {
    type: {
      type: String,
      default: "bounce"
    },
    loading: {
      type: Boolean,
      default: false
    },
    offsetTop: {
      type: String,
      default: "0px"
    },
    showBg: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: "rgba(0,0,0,.9)"
    },
    zIndex: {
      type: [String, Number],
      default: "9999"
    }
  }
};
</script>

<style lang="scss" scoped>
$bg-color-start: #4715d8;
$bg-color-end: #e94960;
.loadings {
  position: fixed;
  left: 0;
  width: 100%;
  .loading-positon {
    user-select: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    // text-align: center;
  }

}
/**loading-bounce start**/
.loading-bounce {
  width: 80px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  span {
    display: inline-block;
    user-select: none;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: #4715d8;
    -webkit-animation: load 1s ease infinite;
  }
  span:nth-child(2) {
    -webkit-animation-delay: 0.2s;
  }
  span:nth-child(3) {
    -webkit-animation-delay: 0.4s;
  }
  span:nth-child(4) {
    -webkit-animation-delay: 0.6s;
  }
  span:nth-child(5) {
    -webkit-animation-delay: 0.8s;
  }
}
@-webkit-keyframes load {
  0%,
  100% {
    height: 40px;
    background: $bg-color-start;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: $bg-color-end;
  }
}
/**loading-bounce end**/

/**loading-line start**/
.loading-line {
  width: 150px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
  position: relative;
  background: $bg-color-start;
  -webkit-animation: changeBgColor 1.04s ease-in infinite alternate;
  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: $bg-color-start;
    position: absolute;
    margin-top: -7px;
    margin-left: -8px;
    -webkit-animation: changePosition 1.04s ease-in infinite alternate;
  }
}
@-webkit-keyframes changeBgColor {
  0% {
    background: $bg-color-start;
  }
  100% {
    background: $bg-color-end;
  }
}
@-webkit-keyframes changePosition {
  0% {
    background: $bg-color-start;
  }
  100% {
    margin-left: 142px;
    background: $bg-color-end;
  }
}
/**loading-line end**/

/**loader-semicircle start**/
.loader-semicircle {
  .loader-inner {
    height: 60px;
    width: 100px;
  }

  .loader-line-wrap {
    animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
    box-sizing: border-box;
    height: 50px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    transform-origin: 50% 100%;
    width: 100px;
  }
  .loader-line {
    border: 4px solid transparent;
    border-radius: 100%;
    box-sizing: border-box;
    height: 100px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
  }
  .loader-line-wrap:nth-child(1) {
    animation-delay: -50ms;
  }
  .loader-line-wrap:nth-child(2) {
    animation-delay: -100ms;
  }
  .loader-line-wrap:nth-child(3) {
    animation-delay: -150ms;
  }
  .loader-line-wrap:nth-child(4) {
    animation-delay: -200ms;
  }
  .loader-line-wrap:nth-child(5) {
    animation-delay: -250ms;
  }

  .loader-line-wrap:nth-child(1) .loader-line {
    border-color: hsl(0, 80%, 60%);
    height: 90px;
    width: 90px;
    top: 7px;
  }
  .loader-line-wrap:nth-child(2) .loader-line {
    border-color: hsl(60, 80%, 60%);
    height: 76px;
    width: 76px;
    top: 14px;
  }
  .loader-line-wrap:nth-child(3) .loader-line {
    border-color: hsl(120, 80%, 60%);
    height: 62px;
    width: 62px;
    top: 21px;
  }
  .loader-line-wrap:nth-child(4) .loader-line {
    border-color: hsl(180, 80%, 60%);
    height: 48px;
    width: 48px;
    top: 28px;
  }
  .loader-line-wrap:nth-child(5) .loader-line {
    border-color: hsl(240, 80%, 60%);
    height: 34px;
    width: 34px;
    top: 35px;
  }
}
@keyframes spin {
  0%,
  15% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
/**loader-semicircle end**/

</style>
