<template>
  <div class="list">
    <ul>
      <li>
        <router-link :to="{name:'helloworld',params:{msg:'WHOS YOUR DADDY?'}}">Hello World</router-link>
      </li>
      <li>
        <router-link to="/helloearth">Hello Earth</router-link>
      </li>
      <li>
        <router-link to="/axioscomp">Axios Component</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list"
};
</script>

<style scoped>
</style>
