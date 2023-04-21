import Mock from "mockjs";
//通过Mock来模拟一个api的接口
Mock.mock("/api/user/mobilelogin", "post", (data) => {
  let body = JSON.parse(data.body);
  console.log(body);

  let dataList = {
    data: {
      id: 1,
      username: "",
      password: "",
      mobile: "",
      email: "",
    },
    meta: {
      msg: "",
      state: 0,
    },
  };
  if (body.username == "admin" && body.password == "admin") {
    dataList.data.username = body.username;
    dataList.data.password = body.password;
    dataList.data.token = 123455465657676767;
    dataList.meta.msg = "登录成功";
    dataList.meta.state = 200;
  } else {
    dataList.meta.msg = "参数不正确";
    dataList.meta.state = 0;
  }
  return {
    dataList,
  };
});
