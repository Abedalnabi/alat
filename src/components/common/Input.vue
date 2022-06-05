<template>
  <v-text-field
    class="rounded-0 pb-0"
    v-model="inputFiled"
    :placeholder="this.placeholder"
    :rules="rules"
    required
    solo
    reverse
  ></v-text-field>
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      inputFiled: "",
      // rules: [this.inputRules],
      rules: [
        (v) => !!v || "1الرجاء ملء هذا الحقل",
        // this.inputRules[0],
        // (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  props: {
    placeholder: String,
    inputRules: Function,
  },
};
</script>
