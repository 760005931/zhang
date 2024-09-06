//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
// 定义懒加载插件
export const lazyPlugin = {
    install(app){
        //懒加载指令逻辑
        app.directive('img-lazy', {
            /**
             * 当元素进入视口时，加载指令绑定的图片URL
             * 使用useIntersectionObserver钩子来观察元素是否进入视口
             * 当元素进入视口时，将指令绑定的图片URL赋值给元素的src属性
             * 
             * @param {HTMLElement} el 指令绑定的元素，这里是img元素
             * @param {Object} binding 绑定对象，binding.value 指令等于号后面绑定表达式的值，即图片URL
             */
            mounted(el, binding) {
                // 打印指令绑定的元素和图片URL
                //console.log(el, binding.value);
                // 使用useIntersectionObserver钩子，观察元素是否进入视口
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // 打印元素是否进入视口
                        // console.log(isIntersecting)
                        // 如果元素进入视口
                        if (isIntersecting) {
                            //图片进入视口区域
                            // 将指令绑定的图片URL赋值给元素的src属性
                            el.src = binding.value
                            // 停止观察元素
                            stop()
                        }
                    },
                )
            }
        })
    }
}