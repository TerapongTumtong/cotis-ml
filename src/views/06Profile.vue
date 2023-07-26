<template>
  <v-form v-model="disabledValue" @submit.prevent="onSubmit">
    <v-container class="fill-height">
      <v-responsive class="d-flex align-center text-center fill-height">
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <!-- สวัสดีบ้านของคุณเป็นแบบไหน  -->
             <span
            style="
              color: #2D2D2D;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
            "
            >รบกวนขอข้อมูลเพิ่มเติม<br>
เพื่อส่งให้ผลการประเมินให้กับคุณ</span
          >

            <!-- สวัสดีบ้านของคุณเป็นแบบไหน  -->
          </v-col>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-sheet class="d-flex flex-wrap">
              <v-sheet class="flex-1-0 ma-0 pa-0">
                <!-- item 1-->
                <v-text-field
                  style="width: 170px"
                  clearable
                  label="ชื่อ"
                  v-model="name"
                  placeholder="กรุณาระบุชื่อ"
                  :rules="[required]"
                  variant="filled"
                ></v-text-field>

                <!-- item 1-->
              </v-sheet>
              <v-sheet class="flex-1-0 ma-1 pa-0"> </v-sheet>
              <v-sheet class="flex-1-0 ma-0 pa-0">
                <v-text-field
                  style="width: 170px"
                  clearable
                  label="นามสกุล"
                  v-model="surname"
                  placeholder="กรุณาระบุนามสกุล"
                  :rules="[required]"
                  variant="filled"
                ></v-text-field>
              </v-sheet>
            </v-sheet>
          </v-col>
        </v-row>

        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-sheet class="d-flex flex-wrap">
              <v-sheet class="flex-1-0 ma-0 pa-0">
                <!-- item 1-->
                <v-text-field
                  style="width: 380px"
                  clearable
                  label="เบอร์โทรติดต่อ"
                  v-model="mobile"
                  type="number"
                  placeholder="กรุณาระบุเบอร์โทรติดต่อ"
                  :rules="[required]"
                  variant="filled"
                ></v-text-field>

                <!-- item 1-->
              </v-sheet>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <!-- btn select -->
            <v-btn
              variant="outlined"
              color="primary"
              :disabled="!disabledValue"
              v-on:click="this.$router.push('/Loading')"
            >
              ถัดไป
            </v-btn>
            <!-- btn select -->
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    disabledValue: false,
    mobile: null,
    surname: null,
    name: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;

      //this.loading = true

      this.loading = false;
    },
    required(v) {
      return !!v || 'Field is required';
    },
  },
};
</script>
