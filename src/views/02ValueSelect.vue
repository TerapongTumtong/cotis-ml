<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <!-- วงเงินที่คุณต้องการ  -->
          <span
            style="
              color: #1369b0;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
            "
            >วงเงินที่คุณต้องการ ? 💵</span
          >
          <!-- วงเงินที่คุณต้องการ  -->
        </v-col>
      </v-row>

      <v-row class="d-flex align-center justify-center">
        <v-col >
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
                <!--10000 - 3000000-->
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
                  type="number"
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
                  variant="outlined"
                  color="primary"
                  v-on:click="this.$router.push('/JobSelect')"
                >
                  ถัดไป
                </v-btn>
              </td>
            </tr>
            <tr>
              <td colspan="3" style="text-align: left;padding-top:55px">
                <!-- btn ประเมินราคา -->
                <div class="d-flex">
                  <img
                    alt=""
                    src="https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/save-house.png
                        "
                    width="90"
                    height="70"
                  />
                  <div
                    class="d-flex"
                    style="flex-direction: column; justify-content: center"
                  >
                    <span
                      style="
                        color: #2d2d2d;
                        font-size: 10px;
                        font-style: normal;
                        font-weight: 500;
                      "
                      >อยากรู้ไหมว่าบ้านของคุณราคาเท่าไหร่ ?
                    </span>
                    <v-btn
                      variant="elevated"
                      color="primary"
                      v-on:click="gotoPage()"
                      style="height: 23px; width: 115px; font-size: 10px"
                    >
                      เริ่มการประเมินราคา
                    </v-btn>
                  </div>
                </div>
                

                <!-- btn ประเมินราคา -->
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
    //new function
    numberWithCommas(x) {
      var parts = x.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    },
    onChange(event) {
      const data = event.target.value;
      this.sliderValue = +data.replaceAll(',', '');
    },
    //old function
    gotoPage() {
      this.$router.push('/location');
    },
    btnPlus() {
      this.value1 = this.value1 + 100000;
      this.slider1 = this.slider1 + 1;
      this.disabledValue = false;
    },
    btnDePlus() {
      (this.value1 = this.value1 - 100000), (this.slider1 = this.slider1 - 1);
      this.disabledValue = false;
    },
    btnPlus2() {
      this.value2 = this.value2 + 1;
      this.slider2 = this.slider2 + 1;
      this.disabledValue = false;
    },
    btnDePlus2() {
      (this.value2 = this.value2 - 1), (this.slider2 = this.slider1 - 1);
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
