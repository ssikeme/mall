const userInfo = {
  id: 1,
  like_product_count: 2,
  like_shop_count: 0,
  browse_history_count: 0,
  cart_item_count: 0,
  wait_pay_count: 5,
  wait_send_count: 4,
  wait_receive_count: 0,
  wait_rate_count: 0
}

const proxy = {
  'GET /api/user/info/get': {
    code: 200,
    message: '成功',
    data: userInfo
  }
}

module.exports = proxy
