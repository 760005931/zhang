//封装分类数据业务代码
import {getCategoryAPI} from "@/apis/category.js";
import {ref,onMounted} from 'vue'
import {useRoute} from "vue-router";
import {onBeforeRouteUpdate} from "vue-router";
export function useCategory(){
    //获取数据
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())
    //目标:路由参数变化时候,可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) =>{
        //存在文件:使用最新的路由参数请求最新的数据
        getCategory(to.params.id)
    })

    return{categoryData}

}