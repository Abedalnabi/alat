<template>
  <v-app id="app">
    <v-container class="main ml-auto mr-auto ma-0 pa-0">
      <Header />
      <router-view />
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import colors from "@/assets/config/colors";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      routerLinkColor: colors.primary,
    };
  },
};
</script>

<style lang="scss">
.main {
  direction: rtl;
  max-width: 1400px;
  .router-link {
    color: var(--colors) !important;
    position: relative;
    top: 15px;
  }
}
@media only screen and (min-width: 0px) and (max-width: 600px) {
  .main {
    min-width: 100%;
    .content {
      width: 90% !important;
    }
  }
}
</style>
