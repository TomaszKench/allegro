import { lang } from '../lang';

export const translate = {
    install(Vue) {
        Vue.prototype.translate = function (key) {
            return lang[key];
        }
    }
}