<template>
  <div class="main">
    <div class="head">
      <i class="icon el-icon-thirdback left"></i>
      <i class="icon el-icon-thirdcart right"></i>
    </div>
    <div class="productInfo">
      <div class="productImg">
        <div class="productImgContainer">
          <img :src='this.product.avatar' style="width:17rem;height:17rem;">
        </div>
      </div>
      <div class="productPrice">
        ￥{{this.product.price}}
        <span class="productStock">库存{{this.product.stock}}</span>
      </div>
      <div class="productName">
        {{this.product.name}}
      </div>
      <div class="locationAndSales">
        <span class="deliveryLocationTip">发货</span>
        <i class="icon el-icon-thirdmap"></i>
        <span class="deliveryLocation">{{this.product.shopInfo.location}}</span>
        <span class="sales">已销 {{this.product.sales}}</span>
      </div>
    </div>
    <div class="shopInfo">
      <img class="shopImg" :src="this.product.shopInfo.avatar" style="width:45px;height: 45px;">
      <div>
      <span class="shopName">{{shopName}}</span>
      <span class="allProduct">全部宝贝</span>
      <span class="toShop">进入店铺</span>
      </div>
      <div class="left">
        店铺星级
        <span class="shopStar">{{shopStar}}</span>
      </div>
    </div>
    <div class="shopComment">
      <div>宝贝描述<span class="rate productRate">{{this.product.shopInfo.productRate}}</span></div>
      <div>物流服务<span class="rate logisticRate">{{this.product.shopInfo.logisticsRate}}</span></div>
      <div>售后服务<span class="rate afterSalesRate">{{this.product.shopInfo.afterSalesRate}}</span></div>
    </div>
    <div class="operation">
      <div class="left">
        <div>
          <span class="toShop el-icon-thirdstore"></span>
          <span class="addToLike el-icon-thirdfavorite"></span>
        </div>
        <div class="shopAndLikeTip">
          <span>店铺</span>
          <span>收藏</span>
        </div>
      </div>
      <div class="right">
        <span class="addToCart">加入购物车</span>
        <span class="buyNow">立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
import {getProduct} from '@/api/product'

export default {
  data () {
    return {
      productId: 0,
      product: {
        id: null,
        shopInfo: {
          id: null,
          name: null,
          description: '',
          avarar: '',
          location: '',
          productCount: null,
          likeCount: null,
          star: null,
          productRate: null,
          logisticsRate: null,
          afterSalesRate: null,
          timeCreate: ''
        },
        brandId: null,
        categoryId: null,
        name: '',
        price: null,
        stock: null,
        avatar: '',
        sales: null,
        commentCount: null,
        goodCommentCount: null
      }
    }
  },
  computed: {
    shopName () {
      if (this.product.shopInfo.name.length > 8) {
        return this.product.shopInfo.name.substring(0, 8) + '...'
      } else return this.product.shopInfo.name
    },
    shopStar () {
      let str = ''
      for (let i = 0; i < parseInt(this.product.shopInfo.star); i++) { str += '★' }
      return str
    }
  },
  beforeCreate () {
    getProduct(this.productId).then(response => {
      let {data} = response.data
      this.product.avatar = data.avatar
      this.product.price = data.price
      this.product.name = data.name
      this.product.stock = data.stock
      this.product.sales = data.sales
      this.product.shopInfo.location = data.shopInfo.location
      this.product.shopInfo.name = data.shopInfo.name
      this.product.shopInfo.avatar = data.shopInfo.avatar
      this.product.shopInfo.productRate = data.shopInfo.productRate
      this.product.shopInfo.logisticsRate = data.shopInfo.logisticsRate
      this.product.shopInfo.afterSalesRate = data.shopInfo.afterSalesRate
      this.product.shopInfo.star = data.shopInfo.star
    })
  }
}
</script>

<style scoped lang="scss">
  .main {
    background: white;

    .head {
      height: 35px;
      background: whitesmoke;

      .icon {
        font-size: 24px;
        margin-left: 12px;
        margin-right: 15px;
      }
    }

    .productPrice {
      @include fonts(23px, red, $align: left);
      padding-left: 6px;

      .productStock {
        @include fonts(10px, gray, $align: left);
        @include button(36px, $background-color: #f1f1f1, $border-radius: 4px)
      }
    }

    .productImg {
      .productImgContainer {
        width: 17rem;
        margin: 0 auto;
      }
    }

    .productName {
      padding: 6px;
    }

    .locationAndSales {
      border-top: 9px #f1f1f1 solid;
      padding-top: 6px;
      padding-bottom: 6px;

      .deliveryLocationTip {
        margin-left: 6px;
        @include fonts(13px, gray);
      }

      .icon {
        margin-left: 12px;
        font-size: 13px;
      }

      .deliveryLocation {
        @include fonts(13.5px, black);
      }

      .sales {
        @include fonts(13px, gray);
        float: right;
        margin-right: 5px;
      }
    }

    .shopInfo {
      border-top: 9px #f1f1f1 solid;
      padding: 6px;
      height: 50px;
      text-align: right;
      .shopImg{
        float: left;
      }
      .shopName{
        float: left;
        margin-left: 10px;
      }
      .allProduct, .toShop {
        width: 50px;
        border: 1px solid $quaternary-orange;
        @include fonts(13.5px, $quaternary-orange);
        padding: 1.5px 4px;
        border-radius: 10px;
        margin-left: 8px;
      }

      .toShop {
        border: none;
        color: white;
        background: linear-gradient(to right, $quaternary-orange, $tertiary-orange);
      }
      .left{
        @include fonts(12px,gray);
        padding: 6px 10px;
        .shopStar{
          color: red;
        }
      }
    }
    .shopComment{
      @include fonts(13px,#a9a9a2,$align:left);
      padding: 6px;
      overflow: hidden;
      div{
        width: 33%;
        float: left;
        text-align: center;
      }
      .rate{
        padding-left: 4px;
        color: $quaternary-orange;
      }
    }
    .operation {
      padding: 6px 6px 20px 6px;
      border-top: 9px #f1f1f1 solid;
      .toShop, .addToLike {
        @include fonts(17px, $quaternary-orange);
        margin-right: 20px;
      }

      .toShop {
        padding-left: 3px;
      }

      .addToLike {
        color: gray;
      }

      .shopAndLikeTip {
        padding-top: 2px;
        padding-bottom: 6px;
        @include fonts(11px, gray, $align: left);
        width: 100px;

        span {
          margin-right: 16px;
        }
      }
      .right{
        padding-top: 9px;
        .addToCart{
          padding:8px 6px 8px 8px;
          border-top-left-radius: 13px;
          border-bottom-left-radius:13px;
          background:linear-gradient(to right,#ffcb27,#ffa823);
          @include fonts(16px,white);
        }
        .buyNow{
          padding: 8px 10px;
          margin-left: -5px;
          border-top-right-radius: 13px;
          border-bottom-right-radius:13px;
          background-color: $quaternary-orange;
          @include fonts(16px,white);
        }
      }
    }
  }
</style>
