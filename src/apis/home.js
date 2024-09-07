import httpInstance from "@/utils/http";
//获取banner
export function getBannerAPI(params={}){
    //默认首页为1  商品分类为2
    const {distributionSite = '1'} = params
    return httpInstance({
        url:'/home/banner',
        params:{
            distributionSite
        }
    })
}
//获取新鲜好物
export function getNewAPI() {
    return httpInstance({
        url: '/home/new'
    })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url:'/home/hot'
    })
}
/**
 * 获取商品信息的API函数
 *
 * 此函数用于从服务器请求商品信息数据，以供前端展示使用
 * 它通过调用配置好的HTTP实例来发送网络请求，具体请求配置如下：
 * - url: 请求的路径为'/home/goods'，表示从'/home/goods'接口获取商品信息
 *
 * 之所以使用此函数，是因为需要一个专门负责商品信息获取的API调用点
 * 它能够简化代码结构，使得API调用与业务逻辑分离，便于维护和扩展
 *
 * @return {Promise} 返回一个Promise对象，该对象在请求完成后会resolve或reject
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url:'/home/goods'
    })
}

