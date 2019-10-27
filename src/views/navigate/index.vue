<template>
  <div class="main">
    <div class="functions">
      <div class="threeFunc">
        <div class="search func"><i class="icon el-icon-thirdoriginalimage"></i></div>
        <div class="cart func"><i class="icon el-icon-thirdcart"></i></div>
        <div class="personal func"><i class="icon el-icon-thirdaccount"></i></div>
      </div>
      <div class="functionsTip">
        <div class="tip">首页</div>
        <div class="tip">购物车</div>
        <div class="tip">我的</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  .main {
    position: relative;
    .functions {
      height: 44px;
      position: fixed;
      bottom: 0;
      right: 0;
      width: 100%;
      .threeFunc{
        overflow: hidden;
        .icon {
          width: 33%;
          float: left;
          @include fonts(19px, black);
        }
      }
    }

    .functionsTip {
      overflow: hidden;

      .tip {
        padding-top: 5px;
        width: 33%;
        float: left;
        @include fonts(13px, black);
      }
    }
  }
</style>
