<template>
    <Header />
    <Home />
</template>



<script>
import Header from "./components/core/header.vue";
import Home from "./components/pages/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home
  },
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
