// import axios from '@/libs/api.request'
import axios from 'axios'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.post('api/login', data).then((response) => {
    // console.log(response)
    return response
  })
  // return axios.request({
  //   url: 'login',
  //   data,
  //   method: 'post'
  // })
}

export const getUserInfo = (token) => {
  console.log(token)
  return axios.get('api/get_info', {
    params: {
      'token': token
    }
  }).then((response) => {
    return response
  })
  // return axios.request({
  //   url: 'get_info',
  //   params: {
  //     token
  //   },
  //   method: 'get'
  // })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  // return axios.request({
  //   url: 'message/count',
  //   method: 'get'
  // })
  return axios.get('api/message/count').then((response) => {
    return response
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}
