<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row
        class="d-flex align-center justify-center"
        style="margin-top: 3px; margin-bottom: 3px"
      >
        <v-col cols="auto">
          <span
            style="
              color: #1369b0;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
            "
            >วงเงินที่คุณต้องการกู้</span
          >
        </v-col>
      </v-row>

      <v-row class="d-flex align-center justify-center">
        <v-col>
          <table style="width: 100%">
            <tr>
              <td colspan="3" style="text-align: left; padding-bottom: 10px">
                <span
                  style="
                    color: #2d2d2d;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                  "
                  >วงเงินที่ต้องการกู้ (บาท)</span
                >
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <input
                  class="custom-input"
                  v-model="getNumberFromSlider"
                  @input="onChange($event)"
                />
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <input
                  v-model="sliderValue"
                  type="range"
                  min="100000"
                  max="30000000"
                  class="slider"
                  step="100000"
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
                    >100,000 บาท</span
                  >
                  <div style="flex-grow: 1"></div>
                  <span
                    style="
                      color: #737373;
                      font-size: 12.475px;
                      font-style: normal;
                      font-weight: 400;
                    "
                    >30,000,000 บาท</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td
                colspan="3"
                style="
                  text-align: left;
                  padding-bottom: 10px;
                  padding-top: 10px;
                "
              >
                <span
                  style="
                    color: #2d2d2d;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                  "
                  >ระยะเวลาในการกู้ (ปี)</span
                >
              </td>
            </tr>
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
                  max="40"
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
                    >40 ปี</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <v-btn
                  block
                  variant="elevated"
                  :color="disabledValue ? '' : 'primary'"
                  :disabled="disabledValue"
                  style="margin-top: 30px; padding: 25px"
                  v-on:click="this.$router.push('/JobSelect')"
                >
                  ถัดไป
                </v-btn>
              </td>
            </tr>
          </table>
          <!-- btn select -->

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
      sliderValue: 200000,
      sliderYearValue: 4,
      value1: 100000,
      slider1: 1,
      value2: 4,
      slider2: 4,
      disabledValue: true,
    };
  },
  computed: {
    getNumberFromSlider() {
      return this.numberWithCommas(this.sliderValue);
    },
  },
  methods: {
    numberWithCommas(x) {
      var parts = x.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    },
    onChange(event) {
      const data = event.target.value;
      this.sliderValue = +data.replaceAll(',', '');
    },
    gotoPage() {
      this.$router.push('/location');
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
