const userSessionInfo = {
  id: 1,
  username: 'qwe123',
  nickname: 'xtt',
  avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570726212465&di=cbde805871eaed7df7ec195065662fcd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F20%2F20151220235323_3ZxEu.jpeg',
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
