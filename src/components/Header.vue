<template>
  <div style="width: 100%">
    <v-toolbar class="ma-auto fixedNavbar" flat color="heder_footer">
      <v-toolbar-title>
        <div class="">
          <img
            @click="goHome"
            style="cursor: pointer"
            class="logo"
            src="https://cdn.mos.cms.futurecdn.net/m5ADpuAdKTpadnUWmsCrHJ.jpg"
            width="50px"
          /></div
      ></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="">
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
    </v-toolbar>
    <v-content class="divClass"></v-content>
  </div>
</template>

<script>
export default {
  name: "HraderComponent",
  methods: {
    async scroll(refName) {
      if (window.location.pathname !== "/") await this.$router.push("/");
      const element = document.getElementById(refName);
      console.log("refName", refName);
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

<style>
.divClass {
  min-height: 64px;
  width: 100%;
}
.fixedNavbar {
  position: fixed !important;
  width: 1400px;
  min-height: 64px;
  z-index: 100;
}
</style>
