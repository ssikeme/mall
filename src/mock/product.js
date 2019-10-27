const product = {
  id: 0,
  shopInfo: {
    id: 0,
    name: '雪花秀官方旗舰店',
    description: 'Combine traditional ancient law with modern technology',
    avatar: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=ca8f3539272eb938f86072a0b40bee50/b2de9c82d158ccbff2e983e211d8bc3eb0354194.jpg',
    location: '上海',
    productCount: 1,
    likeCount: 0,
    star: 4,
    productRate: 4.9,
    logisticsRate: 4.6,
    afterSalesRate: 4.5,
    timeCreate: '2019-8-1'
  },
  brandId: 0,
  categoryId: 0,
  name: '雪花秀顺行柔和洁面泡沫200ml 洗面奶 深层清洁保湿',
  price: 199,
  stock: 399,
  avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571415949214&di=5b700a55cc23408482ada14e8d9fcf6b&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1158575589%2C2826216399%26fm%3D214%26gp%3D0.jpg',
  sales: 0,
  commentCount: 0,
  goodCommentCount: 0
}
const proxy = {
  'GET /api/product/get': (req, res) => {
    return res.json({
      code: 200,
      message: '成功',
      data: product
    })
  }
}
module.exports = proxy
