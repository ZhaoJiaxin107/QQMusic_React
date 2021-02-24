import http from './http'

/* 
  获取banner数据
  type:资源类型,对应以下类型,默认为 0 即PC
  0: pc  
  1: android
  2: iphone
  3: ipad
*/
export const getBanner = (type = 2) => {
    return http.get('/banner?type=' + type).then(res => res.banners)
}