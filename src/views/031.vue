<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row
        class="d-flex align-center justify-center"
        style="margin-top: 6px; margin-bottom: 6px"
      >
        <v-col cols="auto">
          <span
            style="
              color: #2d2d2d;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
            "
            >ปกติรับเงินเดือนผ่านช่องทางไหน</span
          >
        </v-col>
      </v-row>
      <v-radio-group v-model="flowSelect" column>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-sheet class="d-flex flex-wrap">
              <v-sheet class="box-shadow flex-1-0 ma-0 pa-0">
                <!-- item 1-->

                <v-btn
                  :variant="flagbtn1"
                  v-on:click="clickBtn('1')"
                  color="primary"
                  class="d-flex align-center justify-center"
                  style="
                    width: 165px;
                    height: 213px;
                    margin: 0.3em;
                    padding: 0.3em;
                  "
                >
                  <img
                    alt=""
                    src="src/assets/images/buttons/payroll.png"
                    width="101"
                    height="90"
                  />
                  <br />
                  <span style="color: black; font-size: 11px"
                    >รับเงินผ่านบัญชี Payroll</span
                  >
                  <v-radio value="1" v-on:click="clickBtn('1')"></v-radio>
                </v-btn>

                <!-- item 1-->
              </v-sheet>

              <v-sheet class="box-shadow flex-1-0 ma-0 pa-0">
                <!-- item 2-->
                <v-btn
                  :variant="flagbtn2"
                  v-on:click="clickBtn('2')"
                  color="primary"
                  class="d-flex align-center justify-center"
                  style="
                    width: 165px;
                    height: 213px;
                    margin: 0.3em;
                    padding: 0.3em;
                  "
                >
                  <img
                    alt=""
                    src="src/assets/images/buttons/cash.png
                    "
                    width="101"
                    height="90"
                  />
                  <br />
                  <span style="color: black">เงินสด</span>
                  <v-radio value="2" v-on:click="clickBtn('2')"></v-radio>
                </v-btn>
                <!-- item 2-->
              </v-sheet>
            </v-sheet>
          </v-col>
        </v-row>
      </v-radio-group>
      <v-row class="d-flex align-center justify-center">
        <v-col>
          <!-- btn select -->
          <v-btn
            variant="outlined"
            color="primary"
            :disabled="disabledValue"
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
      flowSelect: '',
      nn: '0',
      value: [0, 100],
      flagbtn1: 'text',
      flagbtn2: 'text',
      flagbtn3: 'text',
      flagbtn4: 'text',
      disabledValue: true,
    };
  },
  methods: {
    mm() {
      if (this.nn == '1') {
        this.$router.push('/HowDoYouWork');
      }
      if (this.nn == '2') {
        this.$router.push('/HowDoYouWork');
      }
    },
    clickBtn(n) {
      if (n == '1') {
        this.nn = '1';
        this.flagbtn1 = 'outlined';
        this.flagbtn2 = 'text';
        this.flagbtn3 = 'text';
        this.flagbtn4 = 'text';
        this.flowSelect = '1';
      }
      if (n == '2') {
        this.nn = '2';
        this.flagbtn1 = 'text';
        this.flagbtn2 = 'outlined';
        this.flagbtn3 = 'text';
        this.flagbtn4 = 'text';
        this.flowSelect = '2';
      }

      this.disabledValue = false;
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(.v-btn__content) {
  flex-direction: column;
}
.box-shadow {
  fill: var(--base-white, #fff);
  stroke-width: 0.826px;
  stroke: var(--base-muted-background, #f4f4f4);
  filter: drop-shadow(
      0px 2.4767441749572754px 7.430233001708984px rgba(49, 49, 49, 0.02)
    )
    drop-shadow(
      0px 2.4767441749572754px 2.4767441749572754px rgba(73, 73, 73, 0.02)
    )
    drop-shadow(
      0px 0.825581431388855px 12.383721351623535px rgba(214, 214, 214, 0.02)
    );
}
</style>
