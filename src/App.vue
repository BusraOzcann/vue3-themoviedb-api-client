<template>
    <Header />
    <Home />
</template>



<script>
import Header from "./core/header.vue";
import Home from "./pages/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home
  },
};
</script>

<style lang="scss">


</style>
