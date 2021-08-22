<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <cpn></cpn>
  </div>
</template>

<script>
import cpn from './Cpn'
export default {
  name: "app",
  components: {
    cpn,
  },
  data(){
    return {
      message: 'Hello Webpack',
      name: '张森云',
    }
  },
  methods: {
    btnClick() {

    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>