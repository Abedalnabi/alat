<template>
  <v-app>
    <div id="app">
      <v-container class="main ml-auto mr-auto pt-0">
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

<style>
.main {
  direction: rtl;
  min-width: 1170px;
}

@media only screen and (min-width: 320px) and (max-width: 667px) {
  .main {
    min-width: 100%;
  }
  .content {
    min-width: 85%;
  }
}
</style>
