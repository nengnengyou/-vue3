import axios from "axios";
import { ElMessage } from "element-plus";
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,//如果模拟了假数据就不用baseURL
  timeout: 5000,
});
// export default service;
export const creatAPI = (url, method, data) => {
  let config = {};
  if (method.toUpperCase === "GET") {
    config.params = data;
  } else {
    config.data = data;
  }
  return service({
    url,
    method,
    ...config,
  });
};
// 请求拦截
service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    console.log(response);
    const { data, meta } = response.data.dataList;
    if (meta.state === 200 || meta.status == 201) {
      ElMessage.success(meta.msg);
      return data;
    } else {
      ElMessage.error(meta.msg);
      return Promise.reject(new Error(meta.msg));
    }
    // console.log(data, meta);
  },
  (error) => {
    error.response && ElMessage.error(error.response.data);
    return Promise.reject(new Error(error.response.data));
  }
);
