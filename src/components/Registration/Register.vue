<template>
  <v-main>
    <FirstStep @setShowFalse="setShowFalse" v-show="show" />
    <SecondStep :emailOrPhone="emailOrPhone" v-show="!show" />
  </v-main>
</template>

<script>
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep.vue";
export default {
  name: "RegisterPage",
  components: {
    FirstStep,
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
