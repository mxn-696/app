import request from '@/utils/request'

export function getkind() {
  return request({
    url: '/shop/getkind',
    method: 'get'
  })
}

export function upload(data) {
  return request({
    url: '/shop/upload',
    method: 'post',
    data
  })
}

export function addshop(data) {
  return request({
    url: '/shop/addshop',
    method: 'post',
    data
  })
}

export function getlist(data) {
  return request({
    url: `/shop/getlist?pagesize=${data.pagesize}&page=${data.currentpage}`,
    method: 'get'
  })
}

export function delshop(id) {
  return request({
    url: '/shop/delshop/' + id,
    method: 'delete'
  })
}

export function getthisshop(id) {
  return request({
    url: '/shop/getthisshop/' + id,
    method: 'get'
  })
}

export function putshop(data) {
  return request({
    url: '/shop/putshop',
    method: 'put',
    data
  })
}
