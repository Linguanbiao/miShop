/**
 * Storage 封装
 */
const STORAGE_KEY = 'mall'
export default {
    // 存储值
    setItem(key, value, module_name) {
        if (module_name) {
            //在指定子模块下面添加
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage() // 获取到所有的存储数据
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },
    // 获取某一个模块下面的属性 
    getItem(key, module_name) {
        // 根据值获取对象 
        if (module_name) {
            // 需要找具体的模块的 
            let val = this.getItem(module_name)
            if (val) return val[key]
        }
        return this.getStorage()[key];


    },
    // 根据值获取到所有的缓存信息
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')

    },
    clear(key, module_name) {
        let val = this.getStorage()
        if (module_name) {
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}