// 处理音乐相关的接口
import http from './http'

/*
获取推荐歌单
@params num number 获取数量
*/
export const getRecommendMusic = (num = 30) => {
    return http.get('/personalized?limit=' + num).then(res => res.result)
}
/*
获取新音乐
*/
export const getNewSong = () => {
    return http.get('/personalized/newsong').then(res => res.result)
}
