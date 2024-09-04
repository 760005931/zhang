import httpInstance from '@/utils/http'

//封装banner
/**
 * 获取首页轮播图的API请求
 * 
 * 本函数通过调用HTTP实例发送GET请求来获取首页的轮播图数据
 * 轮播图通常位于网页的顶部，用于展示重要信息或推荐内容
 * 
 * @return {Promise} 返回一个Promise对象，包含请求到的首页轮播图数据
 */
export function getBannerAPI() {
    // 调用HTTP实例发送GET请求，传入轮播图的API路径
    return httpInstance({
        url: '/home/banner'
    });
}