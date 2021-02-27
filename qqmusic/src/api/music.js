// 处理音乐相关的接口
import http from './http'
import http2 from './http2'
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

// 获取热歌榜
export const getHotSong = () => {
    return http.get('/top/playlist/highquality?limit=1&cat=华语').then(res => {
        const data = res.playlists[0]
        return http2.get('/playlist/detail?id=' + data.id).then(r => ({
            list: r.result.tracks,
            info: {
                id: data.id,
                name: data.name,
                img: data.coverImgUrl,
                time: data.trackUpdateTime
            }
        }))
    }).catch(err => {
        return Promise.reject(err)
    })
    // http://music.163.com/api/playlist/detail?id=6625598735
    // 需要转发到 music.163.com上面，不是使用本地
    // return http2.get('/playlist/detail?id=6625598735')
}
