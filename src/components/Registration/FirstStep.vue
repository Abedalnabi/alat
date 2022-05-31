<template>
  <v-main class="my-10">
    <v-col align="center">
      <p class="font-weight-bold">انشاء حساب</p>
      <p class="font-weight-regular">يرجى اختيار الطريقة التي ترغب بها</p>
      <p class="font-weight-thin">
        هذه الخطوة مخصصة للذين ليس لديهم حساب على منصة نحن
      </p>

      <v-btn
        width="300px"
        class="my-5"
        color="secondary"
        elevation="6"
        @click="$emit('setShowFalse', false, 'phone')"
      >
        تسجيل الدخول عن طريق رقم الهاتف
      </v-btn>
      <br />
      <v-btn
        width="300px"
        class=""
        color="secondary"
        elevation="6"
        @click="$emit('setShowFalse', false, 'email')"
        >تسجيل عن طريق البريد الالكتروني</v-btn
      >
      <br />
      <router-link custom class="router-link" to="/login">
        الرجوع الى تسجيل الدخول
      </router-link>
    </v-col>
  </v-main>
</template>

<script>
export default {
  name: "FirstStep",
};
</script>

<style scoped>
.router-link {
  color: #707070;
  position: relative;
  top: 15px;
}
</style>
