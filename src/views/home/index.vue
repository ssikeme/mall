<template>
  <div class="main">
    <div class="head">
      <img :src="this.avatar"
        style="width: 68px;height: 68px">
      <b class="username">xt_189165jlq</b>
      <div class="myConcern">
        <div class="myConcernNumber">
          <span class="goodsConcerned">{{this.userInfo.like_product_count}}</span>
          <span class="shopConcerned">{{this.userInfo.like_shop_count}}</span>
          <span class="myTrack ">{{this.userInfo.browse_history_count}}</span>
        </div>
        <div class="myConcernName">
          <span>商品关注</span>
          <span>店铺关注</span>
          <span>我的足迹</span>
        </div>
      </div>
    </div>
    <div class="myAllOrders">
      <span class="myOrders">我的订单</span>
      <span class="seeAllOrders">查看全部订单<i class="icon el-icon-thirdmore"></i></span>
    </div>
    <div class="orderCategories">
      <div class="orderCategoriesIcons">
        <span><i class="icon el-icon-thirdshuffling-banner"><b class="orderNum" v-if="waitPayCount">{{this.userInfo.wait_pay_count}}</b></i></span>
        <span><i class="icon el-icon-thirdtraining"><b class="orderNum" v-if="waitSendCount">{{this.userInfo.wait_send_count}}</b></i></span>
        <span><i class="icon el-icon-thirdpacking-labeling"><b class="orderNum" v-if="waitReceiveCount">{{this.userInfo.wait_receive_count}}</b></i></span>
        <span><i class="icon el-icon-thirdsurvey1"><b class="orderNum" v-if="waitRateCount">{{this.userInfo.wait_rate_count}}</b></i></span>
      </div>
      <div class="orderCategoriesItems">
        <span class="unpaid-order">待付款</span>
        <span class="undelivered-order">待发货</span>
        <span class="unreceived-order">待收货</span>
        <span class="unevaluated-order">待评价</span>
      </div>
    </div>
    <navigate></navigate>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getUserInfo} from '@/api/user'
import navigate from '@/views/navigate/index'
export default {
  components: {
    navigate
  },
  data () {
    return {
      userInfo: {
        id: null,
        like_product_count: null,
        like_shop_count: null,
        browse_history_count: null,
        cart_item_count: null,
        wait_pay_count: null,
        wait_send_count: null,
        wait_receive_count: null,
        wait_rate_count: null
      },
      id: null,
      avatar: null
    }
  },
  computed: {
    ...mapGetters([
      'userSessionInfo'
    ]),
    waitPayCount () {
      return this.userInfo.wait_pay_count !== 0
    },
    waitSendCount () {
      return this.userInfo.wait_send_count !== 0
    },
    waitReceiveCount () {
      return this.userInfo.wait_rate_count !== 0
    },
    waitRateCount () {
      return this.userInfo.wait_rate_count !== 0
    }
  },
  created () {
    this.id = this.userSessionInfo.id
    this.avatar = this.userSessionInfo.avatar
    alert(this.id)
    getUserInfo().then(response => {
      let {data} = response.data
      this.userInfo.like_product_count = data.like_product_count
      this.userInfo.like_shop_count = data.like_shop_count
      this.userInfo.browse_history_count = data.browse_history_count
      this.userInfo.cart_item_count = data.cart_item_count
      this.userInfo.wait_pay_count = data.wait_pay_count
      this.userInfo.wait_send_count = data.wait_send_count
      this.userInfo.wait_receive_count = data.wait_receive_count
      this.userInfo.wait_rate_count = data.wait_rate_count
    }).catch((err) => {
      alert(err)
    })
  }
}
</script>

<style scoped lang="scss">
  .main {
    background:white;
    .head {
      height: 155px;
      background: -webkit-linear-gradient($quaternary-orange, $tertiary-orange);

      img {
        border-radius: 100px;
        margin-left: 14px;
        margin-top: 14px;
      }

      b {
        position: absolute;
        @include fonts(22px, white);
        margin-top: 35px;
        margin-left: 16px;
      }

      .myConcern {
        margin-top: 5px;
        height: 65px;
        span {
          margin-top: 5px;
          float: left;
          width: 33%;
          @include fonts(18px, white);
        }
        .myConcernName span{
          font-family: '幼圆',sans-serif;
          font-size: 15px;
        }
      }
    }
    .myAllOrders{
      padding-top: 10px;
      height: 30px;
      border-bottom:0.5px solid lightgray;
      .myOrders{
        @include fonts(16px,$quaternary-orange);
        margin-left: 10px;
      }
      .seeAllOrders{
        float: right;
        @include fonts(15px,gray);
      }
    }
    .orderCategoriesIcons{
      margin-top: 12px;
      height: 32px;
      span{
        float: left;
        width: 25%;
        font-size: 25px;
        text-align: center;
        .icon{
          font-size: 24px;
          color: $quaternary-orange;
          .orderNum{
            width: 8px;
            height: 8px;
            @include fonts(10px,$quaternary-orange,$weight:normal);
            vertical-align: top;
            border: 1px solid $tertiary-orange;
            border-radius: 30px;
            background-color: white;
            padding:0 3px;
          }
        }
      }
    }
    .orderCategoriesItems{
      height: 20px;
      padding-bottom: 10px;
      span{
        float:left;
        width: 25%;
        @include fonts(13px,gray);
      }
    }
  }
</style>
