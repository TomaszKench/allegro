import { endpoints } from '../endpoints';
const replaceParams = (endpoint, params = {}) => {
    for (const property in params) {
        endpoint = endpoint.replace(`{${property}}`, params[property]);
    }
    return endpoint;
}

export const endpoint = {
    install(Vue) {
        Vue.endpoint = function (endpoint, params = {}) {
            return endpoints.API_LOCATION + replaceParams(endpoints[endpoint], params);
        }
    }
}