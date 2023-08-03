<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row
        class="d-flex align-center justify-center"
        style="margin-top: 6px; margin-bottom: 6px"
      >
        <v-col cols="auto">
          <!-- ธุรกิจคุณมีเอกสารอะไรบ้าง  -->
          <span
            style="
              color: #2d2d2d;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
            "
            >ธุรกิจคุณมีเอกสารอะไรบ้าง
          </span>
          <!-- ธุรกิจคุณมีเอกสารอะไรบ้าง  -->
        </v-col>
      </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-sheet class="d-flex flex-wrap">
              <v-sheet class="box-shadow flex-1-0 ma-0 pa-0">
                <!-- item 1 รับเงินผ่านบัญชี Payroll -->
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
                    :src="
                      isFlowselect1
                        ? 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/trade-license-active.png'
                        : 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/trade-license-default.png'
                    "
                    width="101"
                    height="110"
                  />
                  <br />
                  <span style="color: black">ให้เราเลือกให้</span>
                  <v-checkbox-btn
                    v-model="flowSelect"
                    value="1"
                    v-on:click="clickCheckbox('1')"
                  ></v-checkbox-btn>
                  <!-- <v-radio value="1" v-on:click="clickBtn('1')"></v-radio> -->
                </v-btn>
                <!-- item 1-->
              </v-sheet>

              <v-sheet class="box-shadow flex-1-0 ma-0 pa-0">
                <!-- item 2 เงินสด -->
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
                    :src="
                      isFlowselect2
                        ? 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/account-statement-active.png'
                        : 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/account-statement-default.png'
                    "
                    width="101"
                    height="110"
                    style="margin-top: 14px;"
                  />
                  <br />
                  <span style="color: black">เลือกตามความชอบ</span>
                  <v-checkbox
                    v-model="flowSelect"
                    value="2"
                    v-on:click="clickCheckbox('2')"
                    hide-details
                  ></v-checkbox>
                  <!-- <v-radio value="2" v-on:click="clickBtn('2')"></v-radio> -->
                </v-btn>
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
            :disabled="isDisabled"
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
import { isProxy, toRaw } from 'vue';
export default {
  data() {
    return {
      flowSelect: [],
      nn: '0',
      value: [0, 100],
      flagbtn1: 'text',
      flagbtn2: 'text',
      flagbtn3: 'text',
      flagbtn4: 'text',
      disabledValue: true,
    };
  },
  computed: {
    isFlowselect1() {
      const index = this.flowSelect.findIndex((element) => element === '1');
      return index !== -1;
    },
    isFlowselect2() {
      const index = this.flowSelect.findIndex((element) => element === '2');
      return index !== -1;
    },
    isDisabled(){
      return this.flowSelect.length === 0
    }
  },
  methods: {
    mm() {
      this.$router.push('/Income');
    },
    clickBtn(n) {
      this.clickCheckbox(n);
    },
    clickCheckbox(n) {
      const interval = setInterval(() => {
        console.log(toRaw(this.flowSelect));
        const index = this.flowSelect.findIndex(
          (element) => element === n + '',
        );
        if (index === -1) {
          this.flowSelect.push(n);
          if (n === '1') {
            this.flagbtn1 = 'outlined';
          } else if (n === '2') {
            this.flagbtn2 = 'outlined';
          }
        } else {
          this.flowSelect.splice(index, 1);
          if (n === '1') {
            this.flagbtn1 = 'text';
          } else if (n === '2') {
            this.flagbtn2 = 'text';
          }
        }
        console.log(index);
        clearInterval(interval);
      }, 100);
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
