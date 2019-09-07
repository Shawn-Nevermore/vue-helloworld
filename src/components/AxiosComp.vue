<template>
  <div class="hello">
    <h1>我是Axios demo，用来发送请求，拦截响应</h1>
    <button @click="getData">发送get请求</button>
    <button @click="postData">发送post请求</button>
    <hr />
    <ol class="list-data">
      <li v-for="(item, index) in items" :key="index">{{ item.title }}</li>
    </ol>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
// 引入qs才能使用 form-data 发送post请求，否则就是 x-www-form-urlencoded 形式
// 而Axios发送post请求必须是 form-data形式
import qs from "qs";

Vue.prototype.$http = axios;

export default {
  name: "axioscomp",
  data() {
    return {
      items: []
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            // 以下是cnode官方api
            page: 1,
            tab: "job",
            limit: 20
          }
        })
        .then(result => {
          this.items = result.data.data;
          console.log(result.data.data[0].id);
        })
        .catch(err => {
          console.log(err);
        });
    },
    postData() {
      this.$http
        .post(
          "/",
          qs.stringify({
            account: "john60155",
            password: "something"
          })
        )
        .then(result => {})
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  padding: 0.5rem;
}
.list-data {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
}
</style>
