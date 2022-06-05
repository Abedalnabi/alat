<template>
  <v-content align="center" class="content mt-13 mr-auto ml-auto mb-13 wrapper">
    <v-flex v-if="!showRestPassword">
      <p class="text-h5 font-weight-bold">تسجيل الدخول</p>
      <p class="font-weight-bold subtile-1 mt-10">
        الرجاء ادخال بريدك او رقمك وكلمة السر المسجلين على منصة نحن
      </p>
      <v-form
        class="content login-form"
        v-show="loader"
        v-model="valid"
        ref="loginForm"
      >
        <v-row class="ml-0 mr-0">
          <v-col cols="12" md="12" class="pa-0 mt-6">
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 black-text font-weight-medium"
                >بريد الكتروني او رقم هاتف مسجل</span
              >
            </v-subheader>
            <Input
              placeholder="بريد الكتروني او رقم هاتف مسجل"
              :inputRules="this.InputRule"
            />
            <!-- <v-text-field
              class="rounded-0 pb-0"
              v-model="emailOrPhone"
              placeholder="بريد الكتروني او رقم هاتف مسجل"
              :rules="emailOrPhoneRules"
              required
              solo
              reverse
            ></v-text-field> -->
          </v-col>
          <v-col cols="12" md="12" class="pa-0">
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 black-text font-weight-medium"
                >كلمة السر</span
              >
            </v-subheader>
            <v-text-field
              class="rounded-0 pb-0"
              v-model="password"
              :append-icon="showPasswordEya ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPasswordEya ? 'text' : 'password'"
              placeholder="كلمة السر"
              :rules="passwordRules"
              @click:append="showPasswordEya = !showPasswordEya"
              required
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <p
          @click="showRestPassword = !showRestPassword"
          style="cursor: pointer"
          class="d-block my-1 router-link"
        >
          نسيت كلمة المرور ؟
        </p>
        <v-btn
          color="secondary"
          width="100%"
          elevation="0"
          class="mt-6 d-block ma-auto rounded-0"
          @click="validate"
        >
          تسجيل الدخول
        </v-btn>
        <v-btn
          color="white"
          width="100%"
          elevation="0"
          :style="`border:solid 2px ${colors.secondary} !important;`"
          class="mt-6 d-block ma-auto rounded-0"
          @click="goRegister"
        >
          انشاء حساب على منصة نحن
        </v-btn>
      </v-form>
    </v-flex>
    <v-flex v-else>
      <div class="rest-img ma-auto"></div>
      <p class="text-h5 font-weight-bold mt-16">طلب كلمة سر جديدة</p>
      <v-form
        class="content login-form ma-auto"
        v-model="validRestPassword"
        ref="restPasswordForm"
      >
        <v-row class="ml-0 mr-0">
          <v-col cols="12" md="12" class="pa-0 mt-6">
            <Input
              placeholder="بريد الكتروني او رقم هاتف مسجل"
              :inputRules="this.InputRule"
            />
            <!-- <v-text-field
              class="rounded-0 pb-0"
              v-model="restPasswordEmailOrPhone"
              placeholder="بريد الكتروني او رقم هاتف مسجل"
              :rules="restPasswordEmailOrPhoneRules"
              required
              solo
              reverse
            ></v-text-field> -->
          </v-col>
        </v-row>

        <v-btn
          color="secondary"
          width="100%"
          elevation="0"
          class="mt-6 d-block ma-auto rounded-0"
          @click="validateRestPassword"
        >
          ارسال
        </v-btn>
      </v-form>
    </v-flex>
  </v-content>
</template>

<script>
import colors from "@/assets/colors/colors";
import Input from "@/components/common/Input.vue";
export default {
  name: "LoginPage",
  components: {
    Input,
  },
  data: () => ({
    showRestPassword: false,
    colors: colors,
    loader: true,
    valid: false,
    validRestPassword: false,
    showPasswordEya: false,
    emailOrPhone: "",
    // emailOrPhoneRules: [
    // (v) => !!v || "الرجاء ملء هذا الحقل",
    // (v) => /.+@.+/.test(v) || "E-mail must be valid",
    // ],
    restPasswordEmailOrPhone: "",
    InputRule: [(v) => !!v || "dsadsad"],
    restPasswordEmailOrPhoneRules: [
      (v) => !!v || "الرجاء ملء هذا الحقل",
      // (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "الرجاء ملء هذا الحقل",
      (v) => (v && v.length >= 8) || "6 احرف على الاقل",
    ],
  }),
  methods: {
    validate() {
      console.log("this.$refs", this.$refs.loginForm);
      if (this.$refs.loginForm.validate()) {
        console.log("Login");
        // submit form to server/API here...
      }
    },
    validateRestPassword() {
      if (this.$refs.restPasswordForm.validate()) {
        console.log("Rest");
        // submit form to server/API here...
      }
    },
    goRegister() {
      this.$router.push("register");
    },
  },
};
</script>

<style scoped>
.content {
  width: 70%;
}
.login-form {
  margin: auto;
  width: 300px;
  /* border: 3px solid green; */
}
.rest-img {
  height: 100px;
  width: 100px;
  background-color: black;
}
</style>
