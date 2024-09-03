import httpInstance from "@/utils/http";
//测试axios发起请求函数
export function getCategory() {
    //返回的是一个Promise对象
    return httpInstance({
        //请求的url参数
        url: '/home/category/head'
    })
}