const userSessionInfo = {
  id: 1,
  username: '0yuyuko0',
  nickname: 'xtt',
  avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570723081049&di=21c0db025807fc3663be49490c81fee4&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9922720e0cf3d7ca810f3732f81fbe096a63a9fd.jpg',
  isSeller: false
}
const proxy = {
  'POST /api/admin/login': (req, res) => {
    return res.json({
      code: 200,
      message: '成功',
      data: userSessionInfo
    })
  },
  'POST /api/admin/register': (req, res) => {
    return res.json({
      code: 200,
      message: '成功',
      data: null
    })
  }
}
module.exports = proxy
