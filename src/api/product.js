import request from '@/utils/request'

export function getProduct (productId) {
  return request({
    url: '/product/get',
    method: 'GET',
    params: {
      productId
    }
  })
}
