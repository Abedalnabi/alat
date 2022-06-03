<template>
  <v-main class="my-10">
    <v-col align="center">
      <p class="font-weight-bold text-h6">انشاء حساب</p>
      <p class="font-weight-regular mb-1">يرجى اختيار الطريقة التي ترغب بها</p>
      <p class="font-weight-thin">
        هذه الخطوة مخصصة للذين ليس لديهم حساب على منصة نحن
      </p>

      <v-btn
        width="300px"
        class="my-5 rounded-0"
        color="secondary"
        elevation="0"
        @click="$emit('setShowFalse', false, 'phone')"
      >
        تسجيل الدخول عن طريق رقم الهاتف
      </v-btn>
      <br />
      <v-btn
        width="300px"
        class="rounded-0 mb-6"
        color="secondary"
        elevation=""
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
