export const hasEveryProperties = {
    install(Vue) {
        Vue.hasEveryProperties = (object, properties) => {
            return properties.every((property) => {
                return Object.prototype.hasOwnProperty.call(object, property);
            })
        }
    }
}