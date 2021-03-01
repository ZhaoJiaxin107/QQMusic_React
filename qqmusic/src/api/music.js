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
    return http.get('/top/playlist/highquality?cat=华语').then(res => {
        let index = Math.floor(Math.random() * 20)
        const data = res.playlists[index]
        let date = new Date(data.trackUpdateTime)
        let month =  date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth() + 1
        let day = date.getDate() < 10 ? '0' + date.getDate(): date.getDate()
        return http2.get('/playlist/detail?id=' + data.id).then(r => ({
            list: r.result.tracks,
            info: {
                id: data.id,
                name: data.name,
                img: data.coverImgUrl,
                month,
                day
            }
        }))
    }).catch(err => {
        return Promise.reject(err)
    })
    // http://music.163.com/api/playlist/detail?id=6625598735
    // 需要转发到 music.163.com上面，不是使用本地
    // return http2.get('/playlist/detail?id=6625598735')
}

// 获取搜索建议
export const getSearchSuggest = (keyword) => {
    return http.get('/search/suggest?keywords=' + keyword).then(res => {
      res = res.result
      let data = []
      if(res.artists && res.artists.length > 0){
          const arr = res.artists.map(item => item.name)
          data = [...data, ...arr]
      }
      if(res.playlists && res.playlists.length > 0){
        const arr = res.playlists.map(item => item.name)
        data = [...data, ...arr]
      }
      return data
    })
}
