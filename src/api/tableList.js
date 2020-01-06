import request from '../aixos/index'

export function getTable () {
  return request({
    url: '/api/v1/artclelist',
    method: 'post'
  })
}