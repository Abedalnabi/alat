<template>
  <div class="wrapper">
    <v-content align="center" class="content mt-13 mr-auto ml-auto mb-13">
      <p class="font-weight-bold text-h5">انشاء حساب</p>
      <p class="font-weight-regular text-h6">
        انشاء حساب عن طريق
        {{ emailOrPhone === "phone" ? "رقم الهاتف" : "الايميل" }}
      </p>
      <p class="font-weight-bold text-h6 mt-10">معلوماتك الشخصية</p>
      <v-divider class="mb-4"></v-divider>

      <v-form v-show="loader" v-model="valid" ref="registerForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 font-weight-bold">الاسم الاول*</span>
            </v-subheader>
            <v-text-field
              class="rounded-0 pb-0"
              v-model="firstName"
              placeholder="الاسم الاول"
              :rules="nameRules"
              required
              solo
              reverse
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 black-text font-weight-bold"
                >اسم العائلة *</span
              ></v-subheader
            >
            <v-text-field
              v-model="lastName"
              placeholder="اسم العائلة"
              :rules="nameRules"
              required
              solo
              reverse
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
            v-if="emailOrPhone === 'phone'"
            class="text-filed"
          >
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 font-weight-bold">رقم الهاتف*</span>
            </v-subheader>
            <v-text-field
              v-model="phone"
              placeholder="رقم الهاتف"
              :rules="phoneRules"
              type="text"
              required
              solo
              reverse
            ></v-text-field>
          </v-col>

          <v-col
            v-if="emailOrPhone === 'phone'"
            cols="12"
            md="6"
            class="text-filed"
          >
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 font-weight-bold"
                >تأكيد رقم الهاتف*</span
              >
            </v-subheader>
            <v-text-field
              v-model="confirmPhone"
              placeholder=" تأكيد رقم الهاتف "
              :error-messages="confirmPhoneError"
              type="text"
              :rules="confirmPhoneRules.concat(PhoneConfirmationRule)"
              required
              solo
              reverse
            ></v-text-field>
          </v-col>

          <v-col v-if="emailOrPhone === 'email'" cols="12" md="6">
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 font-weight-bold"
                >الايميل الشخصي*
              </span>
            </v-subheader>

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
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 font-weight-bold"
                >تأكيد الايميل الشخصي*</span
              >
            </v-subheader>

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

          <v-col cols="12" md="6">
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 font-weight-bold">الجنس*</span>
            </v-subheader>

            <v-select
              label="الجنس"
              v-model="gender"
              :items="genderItems"
              :rules="[(v) => !!v || 'Item is required']"
              required
              solo
            ></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 font-weight-bold">الجنسية*</span>
            </v-subheader>

            <v-select
              label="الجنسية"
              v-model="nationality"
              :items="nationalityItems"
              :rules="[(v) => !!v || 'Item is required']"
              required
              solo
            ></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 font-weight-bold">المحافظة*</span>
            </v-subheader>

            <v-select
              label="المحافظة"
              v-model="governorate"
              :items="governorateItems"
              :rules="[(v) => !!v || 'Item is required']"
              required
              solo
            ></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 font-weight-bold">المنطقة*</span>
            </v-subheader>
            <v-select
              label="المنطقة"
              v-model="region"
              :items="regionItems"
              :rules="[(v) => !!v || 'Item is required']"
              required
              solo
            ></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <v-subheader class="pr-0 text-subtitle-1 black-text">
              <span class="text-subtitle-1 font-weight-bold"
                >تاريخ الميلاد*</span
              >
            </v-subheader>
            <v-menu
              label="تاريخ الميلاد"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="0"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  solo
                  v-model="date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                locale="ar-EG"
                v-model="date"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

        <p class="font-weight-bold text-h5 mt-9">كلمة السر</p>
        <v-divider class="m"></v-divider>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="text-filed">
              <v-subheader class="pr-0 text-subtitle-1 black-text">
                <span class="text-subtitle-1 font-weight-bold">كلمة السر*</span>
              </v-subheader>
              <v-text-field
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

            <v-col cols="12" md="6" class="text-filed">
              <v-subheader class="pr-0 text-subtitle-1 black-text">
                <span class="text-subtitle-1 font-weight-bold"
                  >تأكيد كلمة السر*</span
                >
              </v-subheader>
              <v-text-field
                v-model="confirmPassword"
                :append-icon="showPasswordEya ? 'mdi-eye' : 'mdi-eye-off'"
                placeholder=" تأكيد كلمة السر "
                :type="showPasswordEya ? 'text' : 'password'"
                :rules="confirmPasswordRules.concat(PasswordConfirmationRule)"
                @click:append="showPasswordEya = !showPasswordEya"
                required
                solo
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <!-- <vue-recaptcha ref="recaptcha" /> -->
        <!-- <VueRecaptcha ref="recaptcha" sitekey="Your key here"></VueRecaptcha> -->
        <v-btn
          color="secondary"
          width="230px"
          class="mt-6 rounded-0"
          @click="validate"
        >
          انشاء حساب
        </v-btn>

        <router-link color="blue" to="/login" class="d-block my-1 router-link"
          >الرجوع الى تسجيل الدخول
        </router-link>
      </v-form>
      <div v-show="!loader">
        <div class="text-center">
          <v-progress-circular
            :size="200"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
      </div>
    </v-content>
  </div>
</template>

<script>
// import { VueRecaptcha } from "vue-recaptcha";
import axios from "axios";
export default {
  name: "SecondStep",
  props: {
    emailOrPhone: String,
  },
  components: {
    // VueRecaptcha,
  },
  data: () => ({
    loader: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu2: false,
    valid: false,
    firstName: "",
    lastName: "",
    nameRules: [
      (v) =>
        !!v ||
        "يمكنك فقط إدخال أحرف. يرجى إدخال اسمك كما هو على الوثائق الرسمية",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
      // extra validate
      // function name(v) {
      //   const validUser = new RegExp("");
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
    password: "",
    passwordRules: [
      (v) => !!v || "password is required",
      (v) => (v && v.length >= 8) || "password must be valid",
    ],
    confirmEmail: "",
    confirmEmailRules: [(v) => !!v || "E-mail is required"],
    confirmPassword: "",
    confirmPasswordRules: [(v) => !!v || "password is required"],
    phone: "",
    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length >= 10) || "Phone must be valid",
    ],
    confirmPhone: "",
    confirmPhoneRules: [(v) => !!v || "password is required"],
    showPasswordEya: false,
    gender: null,
    genderItems: ["ذكر", "انثى"],
    nationality: null,
    nationalityItems: ["a", "b"],
    governorate: null,
    governorateItems: ["a", "b"],
    region: null,
    regionItems: ["a", "b", "c"],
  }),
  methods: {
    validate() {
      if (this.$refs.registerForm.validate()) {
        console.log("regester");
        // submit form to server/API here...
      }
    },
    allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
  },
  async mounted() {
    console.log("mounted Register");

    try {
      const nationality = await axios.get(
        // text API
        "https://api.github.com/repos/tannerlinsley/react-query"
      );
      // setTimeout(() => {
      this.loader = !this.loader;
      // }, 2000);
      this.nationalityItems.push(nationality);
    } catch (error) {
      console.log("das");
    }
  },
  computed: {
    EmailConfirmationRule() {
      return () => this.email === this.confirmEmail || "email must match";
    },
    PasswordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "password must match";
    },
    PhoneConfirmationRule() {
      return () => this.phone === this.confirmPhone || "Phone must match";
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  .content {
    width: 70%;
  }
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
    > .v-input__control
    > .v-input__slot {
    border: solid 1px;
    box-shadow: 0 0 0 0 !important;
  }
  .v-text-field.v-text-field--enclosed .v-text-field__details {
    margin-bottom: 0px !important;
  }
  .col-md-6 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .v-input__slot {
    margin-bottom: 2px !important;
  }
  .v-messages__message {
    position: absolute;
    right: 0px;
  }
  .v-label {
    position: relative !important;
  }
  .v-application--is-ltr .v-messages {
    text-align: start !important;
  }
  .theme--light.v-divider {
    border-color: rgba(0, 0, 0) !important;
  }
  .theme--light.v-subheader {
    color: rgba(0, 0, 0) !important;
  }
  .v-divider {
    border-width: 3px 0 0 0 !important;
  }
}
</style>
