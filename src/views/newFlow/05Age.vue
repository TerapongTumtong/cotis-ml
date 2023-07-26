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
            >อายุ / ระยะเวลาการทำงาน</span
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
                  >อายุของคุณ (ปี)</span
                >
              </td>
            </tr>
            <tr>
              <td colspan="3">
                  <input
                    class="custom-input"
                    placeholder="กรุณาระบุอายุของคุณ"
                    :v-model="age"
                  />
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
                  >อายุงานล่าสุดของคุณ (ปี)</span
                >
              </td>
            </tr>
            <tr>
              <td colspan="3">
                  <input
                    class="custom-input"
                    placeholder="กรุณาระบุอายุงานของคุณ"
                    :v-model="experience"
                  />
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
      age: '',
      experience: '',
    };
  },
  computed: {

    isDisabled(){
      return this.age !== '' && this.experience !== ''
    }
  },
  methods: {

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
  content: 'บาท';
  padding-top: 7px;
}
</style>
