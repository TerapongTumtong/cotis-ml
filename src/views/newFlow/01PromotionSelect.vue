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
              color: #1369b0;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
            "
            >คุณชอบแบบไหน ?</span
          >
        </v-col>
      </v-row>
      <v-radio-group v-model="flowSelect" column>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-sheet class="d-flex flex-wrap" >
              <v-sheet class="box-shadow flex-1-0 ma-0 pa-0" >
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
                    :src="
                      flowSelect === '1'
                        ? 'src/assets/images/buttons/search-active.png'
                        : 'src/assets/images/buttons/search-default.png'
                    "
                    width="101"
                    height="90"
                  />
                  <br />
                  <span style="color: black">ให้เราเลือกให้</span>
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
                    :src="
                      flowSelect === '2'
                        ? 'src/assets/images/buttons/heart-active.png'
                        : 'src/assets/images/buttons/heart-default.png'
                    "
                    width="101"
                    height="90"
                  />
                  <br />
                  <span style="color: black">เลือกตามความชอบ</span>
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
            block
            variant="elevated"
            :color="disabledValue ? '' : 'primary'"
            :disabled="disabledValue"
            style="margin-top: 30px; padding: 25px"
            v-on:click="gogo()"
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
      value: [0, 100],
      flagbtn1: 'text',
      flagbtn2: 'text',
      disabledValue: true,
      ids: 0,
    };
  },
  methods: {
    gogo() {
      this.$router.push('/TypeHome2');
      // alert(this.ids)
      // if (this.ids == '1') {
      //   localStorage.setItem('flow', '1');
      //   //  this.$router.push('/Homevalue')
      // } else if (this.ids == '2') {
      //   localStorage.setItem('flow', '1');
      //   //   this.$router.push('/Homevalue')
      // }
      // localStorage.setItem('flow', '1');
    },
    clickBtn(n) {
      if (n == '1') {
        this.ids = 1;
        this.flagbtn1 = 'outlined';
        this.flagbtn2 = 'text';
        this.flagbtn3 = 'text';
        this.flagbtn4 = 'text';
        this.flowSelect = '1';
      }
      if (n == '2') {
        this.ids = 2;
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
