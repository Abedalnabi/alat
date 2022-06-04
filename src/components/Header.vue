<template>
  <div style="width: 100%">
    <v-toolbar class="ma-auto fixedNavbar" flat color="heder_footer">
      <v-toolbar-title>
        <div class="">
          <img
            wi
            @click="goHome"
            style="cursor: pointer"
            class="logo"
            src="https://cdn.mos.cms.futurecdn.net/m5ADpuAdKTpadnUWmsCrHJ.jpg"
            width="50px"
            height="50px"
          /></div
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-md-flex">
        <v-btn text @click="scroll('hussein-award')">
          جائزة الحسين للعمل التطوعي
        </v-btn>
        <v-btn text @click="scroll('volunteer-guide')"> دليل التطوع </v-btn>
        <v-btn text @click="scroll('charter')">
          ميثاق العمل التطوعي الاردني
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn height="40px" color="secondary" @click="goLogin" class="rounded-0">
        تسجيل الدخول
      </v-btn>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <v-navigation-drawer
        v-model="drawer"
        class="mt-14"
        absolute
        temporary
        height=""
        width="100%"
      >
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item>
              <v-btn text @click="scroll('hussein-award')">
                جائزة الحسين للعمل التطوعي
              </v-btn>
            </v-list-item>
            <v-btn text @click="scroll('volunteer-guide')"> دليل التطوع </v-btn>
            <v-list-item>
              <v-btn text @click="scroll('charter')">
                ميثاق العمل التطوعي الاردني
              </v-btn>
            </v-list-item>

            <v-list-item> </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
    <v-content class="divClass"></v-content>
  </div>
</template>

<script>
export default {
  name: "HraderComponent",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    async scroll(refName) {
      if (window.location.pathname !== "/") await this.$router.push("/");
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
    goHome() {
      this.$router.push("/");
    },
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.divClass {
  height: 64px;
  width: 100%;
}
.fixedNavbar {
  position: fixed !important;
  top: 0 !important;
  width: 1400px;
  min-height: 64px;
  z-index: 100;
}
</style>
