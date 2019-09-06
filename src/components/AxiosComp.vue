<template>
  <div class="hello">
    <h1>我是Axios demo，用来发送请求，拦截响应</h1>
    <button @click="getData">发送请求</button>
    <hr />
    <ol class="list-data">
      <li v-for="(item, index) in items" :key="index">{{ item.title }}</li>
    </ol>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

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
        .get("https://cnodejs.org/api/v1/topics")
        .then(result => {
          this.items = result.data.data;
          console.log(result.data.data[0].id);
        })
        .catch(err => {
          console.log(err);
        });
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
