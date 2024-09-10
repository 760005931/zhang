import request from '@/utils/http.js'
/**
 * 根据ID获取商品详情
 * 
 * 此函数发送一个请求到服务器，以获取特定商品的详细信息该函数主要通过接收一个商品ID（id）作为参数，
 * 构建一个请求对象，然后调用request函数发送HTTP请求到'/goods'接口，携带的商品ID作为查询参数
 * 
 * @param {number} id - 商品的唯一标识符
 * @returns {Promise} 返回一个Promise对象，该对象解析后的值为请求到的商品详细信息
 */
export const getDetail = (id) => {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}