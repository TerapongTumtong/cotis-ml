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
            >ขนาดและพื้นที่ใช้สอย</span
          >
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col>
          <img
            alt=""
            src="src/assets/images/size-home.png
            "
            width="290"
            height="163"
          />
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
                  >ที่ดินทั้งหมด (ตารางวา)</span
                >
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <div class="input-suffix ms">
                  <input
                    class="custom-input"
                    placeholder="ระบุพื้นที่ดิน"
                    :value="getNumberFromSalary"
                    @input="onChangeSalary($event)"
                  />
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
                  >พื้นที่ใช้สอยภายในบ้าน (ตารางเมตร)</span
                >
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <div class="input-suffix mm">
                  <input
                    class="custom-input"
                    placeholder="ระบุพื้นที่ใช้สอย"
                    :value="getNumberFromExpenses"
                    @input="onChangeExpenses($event)"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <v-btn
                  block
                  variant="elevated"
                  :color="!isDisabled ? '' : 'primary'"
                  :disabled="!isDisabled"
                  style="margin-top: 30px; padding: 25px"
                  v-on:click="gogo"
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
      salary: '',
      expenses: '',
    };
  },
  computed: {
    getNumberFromSalary() {
      return this.numberWithCommas(this.salary);
    },
    getNumberFromExpenses() {
      return this.numberWithCommas(this.expenses);
    },
    isDisabled() {
      return this.salary !== '' && this.expenses !== '';
    },
  },
  methods: {
    numberWithCommas(x) {
      var parts = x.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    },
    onChangeSalary(event) {
      const data = event.target.value;
      this.salary = +data.replaceAll(',', '');
    },
    onChangeExpenses(event) {
      const data = event.target.value;
      this.expenses = +data.replaceAll(',', '');
    },
    gogo() {
      this.$router.push('/LoadingHouse');
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
  padding: 9px;
  margin-bottom: 15px;
}

.input-suffix {
  display: inline-block;
  position: relative;
  width: 100%;
}

.input-suffix::after {
  position: absolute;
  top: 2px;
  right: 0.5em;
  transition: all 0.05s ease-in-out;
}

.ms::after {
  content: 'ตารางวา';
  padding-top: 7px;
}

.mm::after {
  content: 'ตารางเมตร';
  padding-top: 7px;
}
</style>
