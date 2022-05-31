<template>
  <v-content align="center" class="content mt-13 mr-auto ml-auto mb-13">
    <!-- <v-col align="center"> -->

    <p class="font-weight-bold">انشاء حساب</p>
    <p class="font-weight-regular">انشاء حساب عن طريق رقم الهاتف</p>
    <p class="font-weight-bold">معلوماتك الشخصية</p>
    <v-divider class="m"></v-divider>
    <!-- </v-col> -->
    <v-form v-model="valid">
      <v-container>
        <p>{{ emailOrPhone }}</p>

        <v-row>
          <v-col cols="12" md="6">
            <v-subheader>الاسم الاول*</v-subheader>
            <v-text-field
              v-model="firstname"
              placeholder="الاسم الاول"
              :error-messages="nameRules"
              :rules="nameRules"
              required
              solo
              reverse
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-subheader>اسم العائلة*</v-subheader>
            <v-text-field
              v-model="lastname"
              placeholder="اسم العائلة"
              :rules="nameRules"
              required
              solo
              reverse
            ></v-text-field>
          </v-col>

          <v-col v-if="emailOrPhone === 'phone'" cols="12" md="6">
            <v-subheader>رقم الهاتف*</v-subheader>
            <v-text-field
              v-model="firstname"
              placeholder="رقم الهاتف"
              :rules="nameRules"
              required
              solo
              reverse
            ></v-text-field>
          </v-col>

          <v-col v-if="emailOrPhone === 'phone'" cols="12" md="6">
            <v-subheader>رقم الهاتف*</v-subheader>
            <v-text-field
              v-model="firstname"
              placeholder="رقم الهاتف"
              :rules="nameRules"
              required
              solo
              reverse
            ></v-text-field>
          </v-col>

          <v-col v-if="emailOrPhone === 'email'" cols="12" md="6">
            <v-subheader>الايميل الشخصي*</v-subheader>
            <v-text-field
              v-model="email"
              placeholder="الايميل الشخصي"
              :rules="emailRules"
              type="email"
              required
              solo
              reverse
            ></v-text-field>
          </v-col>

          <v-col v-if="emailOrPhone === 'email'" cols="12" md="6">
            <v-subheader> تأكيد الايميل الشخصي*</v-subheader>
            <v-text-field
              v-model="confirmEmail"
              placeholder=" تأكيد الايميل الشخصي "
              :error-messages="confirmEmailError"
              type="email"
              :rules="confirmEmailRules.concat(EmailConfirmationRule)"
              required
              solo
              reverse
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-content>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

// import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(4) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { sameAsPassword: sameAs("password") },
  },

  name: "SecondStep",
  props: {
    emailOrPhone: String,
  },
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    confirmEmailError: "",
    nameRules: [
      (v) =>
        !!v ||
        "يمكنك فقط إدخال أحرف. يرجى إدخال اسمك كما هو على الوثائق الرسمية",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
      // extra validate
      // function name(v) {
      //   const validUser = new RegExp("^[a-z0-9.]+[a-z0-9]$");
      //   if (!validUser.test(v)) {
      //     return "nummm";
      //   }
      // },
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    confirmEmail: "",
    confirmEmailRules: [(v) => !!v || "E-mail is required"],
  }),

  computed: {
    EmailConfirmationRule() {
      console.log(this.confirmEmailRules.length);
      return () => this.email === this.confirmEmail || "email must match";
    },
  },
};
</script>

<style lang="scss">
.content {
  width: 50%;
}
.v-messages__message {
  position: relative;
  right: 0px;
  // position: absolute !important;
}

.main-container {
  .select-text-p {
    margin-top: 30px;
  }
  .hr {
    overflow: visible;
    height: 3px;
    width: 70%;
    background-color: black;
  }
  .inputs-container {
    text-align: end;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 10px;
    column-gap: 15px;
    .input-container {
      width: 45%;
    }
  }
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    text-align: right;
    box-sizing: border-box;
    border: 2px solid black;
  }
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    text-align: right;
    box-sizing: border-box;
    border: 2px solid black;
  }

  @media only screen and (min-width: 320px) and (max-width: 667px) {
  }
}
</style>
