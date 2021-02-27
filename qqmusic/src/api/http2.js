import axios from 'axios'

const http = axios.create({
    baseURL:'/qq',
    timeout: 10000
})

// 添加响应拦截，返回数据
http.interceptors.response.use(function(response){
    response = response.data
    if(response.code === 200){
        // 数据返回正确
        return response
    } else {
        // 数据返回错误
        return Promise.reject(new Error('获取失败'))
    }
}, function(error){
    return Promise.reject(error)
});

export default http