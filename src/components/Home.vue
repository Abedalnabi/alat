<template>
  <div>
    <v-carousel
      class=""
      cycle
      height="350"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      </v-carousel-item>
    </v-carousel>
    <div>
      <v-row class="mb-6">
        <v-col id="hussein-award" cols="12" md="12" class="pl-12 pr-12">
          <v-row class="ma-0 pt-10" justify="space-between">
            <v-col
              class="d-flex flex-column justify-space-between pa-0"
              cols="12"
              md="6"
            >
              <p class="text-h6 font-weight-bold">جائزة الحسين للعمل التطوعي</p>
              <p class="mb-10" outlined tile>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos repellendus corrupti illum quae ea, ipsam totam
                nostrum consectetur, sit, at laborum? Quasi totam voluptate
                delectus aspernatur quam exercitationem, numquam reiciendis!
              </p>
              <v-btn width="250px" color="secondary">
                Application - طلب تقديم
              </v-btn>
            </v-col>
            <v-col
              style="background-color: black; min-height: "
              class="d-flex justify-end"
              cols="12"
              md="5"
            >
            </v-col>
          </v-row>
        </v-col>

        <v-col
          id="volunteer-guide"
          class="d-flex flex-column justify-center align-center grey lighten-2 mt-6 pl-12 pr-12"
          cols="12"
          md="12"
          outlined
          tile
        >
          <p outlined class="mt-5 text-h6 font-weight-bold">دليل التطوع</p>
          <p class="mt-4 mb-5 text-subtitle-1" outlined tile>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae exercitationem consequatur quisquam rerum, corporis
            eveniet dicta eos iure. Id tenetur earum aut quam recusandae laborum
            consequatur, illo veniam vel. Laudantium! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Repudiandae exercitationem
            consequatur quisquam rerum, corporis eveniet dicta eos iure. Id
            tenetur earum aut quam recusandae laborum consequatur, illo veniam
            vel. Laudantium!
          </p>
          <v-btn :href="pdfUrl" width="250px" class="mb-6" color="secondary">
            تحميل الدليل(Download PDF)
          </v-btn>
        </v-col>

        <v-col
          id="charter"
          class="d-flex flex-column mt-6 pl-12 pr-12"
          cols="12"
          md="12"
          outlined
          tile
        >
          <p outlined class="mt-5 text-h6 font-weight-bold">
            ميثاق العمل التطوعي
          </p>
          <p class="mt-4 mb-5 text-subtitle-1" outlined tile>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae exercitationem consequatur quisquam rerum, corporis
            eveniet dicta eos iure. Id tenetur earum aut quam recusandae laborum
            consequatur, illo veniam vel. Laudantium! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Repudiandae exercitationem
            consequatur quisquam rerum, corporis eveniet dicta eos iure. Id
            tenetur earum aut quam recusandae laborum consequatur, illo veniam
            vel. Laudantium!
          </p>
          <v-btn :href="pdfUrl" width="250px" class="mb-6" color="secondary">
            تحميل الميثاق(Download PDF)
          </v-btn>
        </v-col>
        <v-carousel
          class=""
          cycle
          height="450"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(inte, i) in items" :key="i">
            <v-sheet color="sliderColor" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <v-col cols="12" md="12" class="pl-16 pr-16">
                  <v-row class="ma-0 pt-10" justify="space-between">
                    <v-col
                      class="d-flex flex-column justify-space-between pa-0"
                      cols="12"
                      md="6"
                    >
                      <p class="text-h6 font-weight-bold">
                        جائزة الحسين للعمل التطوعي
                      </p>
                      <p class="mb-10" outlined tile>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos repellendus corrupti illum quae ea, ipsam
                        totam nostrum consectetur, sit, at laborum? Quasi totam
                        voluptate delectus aspernatur quam exercitationem,
                        numquam reiciendis!
                      </p>
                      <v-btn width="250px" color="secondary">
                        Application - طلب تقديم
                      </v-btn>
                    </v-col>
                    <v-col
                      style="background-color: black; min-height: "
                      class="d-flex justify-end"
                      cols="12"
                      md="5"
                    >
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      pdfUrl:
        "https://files.smallpdf.com/files/9f7db9f8f1d7493f81ca8e88e468c030-compressed-728b22c6c71e282756277c09b0fb2834.pdf?name=Get_Started_With_Smallpdf-compressed.pdf",
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style scoped>
.row {
  margin: 0px !important;
}
</style>
