import request from "@/utils/http.js";

/**
 * 根据给定的id获取分类信息的API函数
 *
 * 此函数使用HTTP请求从服务器获取与特定id对应的分类信息它利用了一个HTTP客户端实例发送一个GET请求，
 * 其中包含了要查询的分类id作为查询参数
 *
 * @param {number} id - 分类的唯一标识符
 * @return {Promise} 返回一个Promise对象，该对象解析为包含分类信息的数据
 */
export function getCategoryAPI(id){
    // 发起HTTP GET请求到'/category'端点，并包含id作为查询参数
    // 使用httpInstance封装HTTP请求以提高代码的复用性和维护性
    return request({
        url:`/category`,
        params:{
            id
        }
    })
}

export const getCategoryFilterAPI = (id) => {
    return request({
        url:'category/sub/filter',
        params:{
            id
        }
    })
}