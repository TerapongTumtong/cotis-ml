<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <!-- ทำงานมาแล้วกี่ปี  -->
          <span
            style="
              color: #2d2d2d;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
            "
            >ทำงานที่ปัจจุบันมาแล้วกี่ปี
          </span>

          <!-- ทำงานมาแล้วกี่ปี  -->
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <img
            alt=""
            src="https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/work-experience.png
            "
            width="153"
            height="189"
          />
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col >
          <table style="width: 100%">
            <tr>
             <td colspan="3">
                <input
                  class="custom-input"
                  v-model="sliderYearValue"
                />
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <input
                  v-model="sliderYearValue"
                  type="range"
                  min="1"
                  max="50"
                  class="slider"
                  step="1"
                  style="width: 100%"
                />

                <div class="d-flex">
                  <span
                    style="
                      color: #737373;
                      font-size: 12.475px;
                      font-style: normal;
                      font-weight: 400;
                    "
                    >1 ปี</span
                  >
                  <div style="flex-grow: 1"></div>
                  <span
                    style="
                      color: #737373;
                      font-size: 12.475px;
                      font-style: normal;
                      font-weight: 400;
                    "
                    >50 ปี</span
                  >
                </div>
              </td>
            </tr>
          </table>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <!-- btn select -->
          <v-btn
            variant="outlined"
            color="primary"
            v-on:click="mm()"
          >
            ถัดไป
          </v-btn>
          <!-- btn select -->
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sliderYearValue: 4,
      value1: 1,
      slider1: 1,
      value2: 4,
      slider2: 4,
      disabledValue: true,
    };
  },
  methods: {
    mm() {
      this.$router.push('/Income');
    },
    btnPlus() {
      this.value1 = this.value1 + 1;
      this.slider1 = this.slider1 + 1;
      this.disabledValue = false;
    },
    btnDePlus() {
      (this.value1 = this.value1 - 1), (this.slider1 = this.slider1 - 1);
      this.disabledValue = false;
    },

    tofix(n) {
      return n.toFixed(0);
    },
    slideCtrl1() {
      this.value1 = this.value1 * this.slider1;
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(.v-field__input) {
  text-align: right;
}
.custom-input {
  width: 100%;
  border: solid #ababab 1px;
  border-radius: 5px;
  text-align: right;
  padding: 9px;
  margin-bottom: 15px;
}
</style>
