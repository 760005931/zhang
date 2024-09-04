import httpInstance from "@/utils/http";

/**
 * 获取分类信息的API函数
 * 
 * 本函数通过发送HTTP请求从远程服务器获取首页的分类信息具体实现采用httpInstance发起请求，
 * 这样可以更容易地处理网络请求和响应
 * 
 * @return {Promise} 返回一个Promise对象，包含从服务器获取的分类信息
 */
export function getCategoryAPI(){
    return httpInstance({
        url:'/home/category/head'
    })
}