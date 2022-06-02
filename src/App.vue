<template>
  <v-app>
    <div id="app">
      <v-container class="main ml-auto mr-auto pt-0 ma-0 pa-0">
        <Header />
        <router-view />
        <Footer />
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.main {
  direction: rtl;
  max-width: 1400px;
}
@media only screen and (min-width: 0px) and (max-width: 600px) {
  .main {
    min-width: 100%;
  }
  .content {
    width: 90% !important;
  }
}
</style>
