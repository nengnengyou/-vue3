// import request from "@/utils/request";
// export const login = (data) => {
//   return request({
//     url: "api/user/mobilelogin",
//     method: "POST",
//     data,
//   });
// };
import { creatAPI } from "@/utils/request";
export const login = (data) => creatAPI("/api/user/mobilelogin", "post", data);
