<template>
  <v-footer width="1400px" class="ma-auto" absolute bottom color="heder_footer">
    <v-col class="text-center">
      <strong>Footer</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  background-color: red;
  width: 100%;
  height: 200px;
}
</style>
