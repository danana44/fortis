<template>
  <div id="app">
    <router-link to="/account">account</router-link><br></br>
    <router-link to="/home">home</router-link><br></br>
    <router-link to="/notice">notice</router-link><br></br>
    <router-link to="/market">market</router-link><br></br>
    <router-link to="/goods">goods</router-link><br></br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped></style>
