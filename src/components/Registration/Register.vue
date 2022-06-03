<template>
  <v-main>
    <SelectMethod @setShowFalse="setShowFalse" v-show="show" />
    <SecondStep :emailOrPhone="emailOrPhone" v-show="!show" />
  </v-main>
</template>

<script>
import SelectMethod from "./SelectMethod";
import SecondStep from "./RegisterPage.vue";
export default {
  name: "RegisterPage",
  components: {
    SelectMethod,
    SecondStep,
  },
  data() {
    return {
      show: true,
      emailOrPhone: "",
    };
  },
  methods: {
    setShowFalse(show, emailOrPhone) {
      this.show = show;
      this.emailOrPhone = emailOrPhone;
    },
  },
};
</script>
