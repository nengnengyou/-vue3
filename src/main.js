import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.scss";
import SvgIcon from "@/icons";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 导入mock
import "@/mock/mock"; //切换到线上链接时，这个注释，baseURL要解开注释

import '@/router/permission'

// import api from "@/api/api";
// import { Vue } from "vue";

const app = createApp(App);
app.use(ElementPlus);
// app.config.globalProperties.$api = api;
SvgIcon(app);

app.use(store).use(router).mount("#app");
