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
            >เลือกประเภทที่อยู่ของคุณ</span
          >
        </v-col>
      </v-row>
      <v-radio-group v-model="homeSelect" column>
        <v-row
          class="d-flex align-center justify-center"
          style="margin-top: 3px; margin-bottom: 3px"
        >
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
                    :src="
                      homeSelect === '1'
                        ? 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/single-house-active.png'
                        : 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/single-house-default.png'
                    "
                    width="101"
                    height="90"
                  />
                  <br />
                  <span style="color: black">บ้านเดี่ยว</span>
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
                      homeSelect === '2'
                        ? 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/town-house-active.png'
                        : 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/town-house-default.png'
                    "
                    width="101"
                    height="90"
                  />
                  <br />
                  <span style="color: black">ทาวน์เฮ้าส์ / ตึกแถว</span>
                  <v-radio value="2" v-on:click="clickBtn('2')"></v-radio>
                </v-btn>
                <!-- item 2-->
              </v-sheet>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-sheet class="d-flex flex-wrap">
              <v-sheet class="box-shadow ma-0 pa-0">
                <!-- item 3-->
                <v-btn
                  :variant="flagbtn3"
                  v-on:click="clickBtn('3')"
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
                      homeSelect === '3'
                        ? 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/condo-active.png'
                        : 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/condo-default.png'
                    "
                    width="101"
                    height="90"
                  />
                  <br />
                  <span style="color: black">คอนโดมิเนียม</span>
                  <v-radio value="3" v-on:click="clickBtn('3')"></v-radio>
                </v-btn>
                <!-- item 3-->
              </v-sheet>

              <v-sheet class="box-shadow ma-0 pa-0">
                <!-- item 4-->
                <v-btn
                  :variant="flagbtn4"
                  v-on:click="clickBtn('4')"
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
                      homeSelect === '4'
                        ? 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/land-active.png'
                        : 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/buttons/land-default.png'
                    "
                    width="101"
                    height="90"
                  />
                  <br />
                  <span style="color: black">ที่ดิน</span>
                  <v-radio value="4" v-on:click="clickBtn('4')"></v-radio>
                </v-btn>
                <!-- item 4-->
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
import liff from '@line/liff';
export default {
  created() {
    let liffIdData = '';
    liffIdData = { liffId: '1661053996-DM6wOEgR' }; // offline
    //  liffIdData = { liffId: "1661053996-85PKey2w" }; // online

    liff
      .init(liffIdData)
      .then(async () => {
        if (liff.isLoggedIn()) {
          console.log((await liff.getProfile()).userId);
          localStorage.setItem('profileId', (await liff.getProfile()).userId);
        } else {
          liff.login();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  data() {
    return {
      homeSelect: '',
      value: [0, 100],
      flagbtn1: 'text',
      flagbtn2: 'text',
      flagbtn3: 'text',
      flagbtn4: 'text',
      disabledValue: true,
      ids: 0,
      navigate: localStorage.getItem('homeFlow'),
    };
  },
  methods: {
    gogo() {
      // alert(this.ids)
      // if (this.ids == '1') {
      //   localStorage.setItem('flow', '1');
      //   //  this.$router.push('/Homevalue')
      // } else if (this.ids == '2') {
      //   localStorage.setItem('flow', '1');
      //   //   this.$router.push('/Homevalue')
      // } else if (this.ids == '3') {
      //   localStorage.setItem('flow', '1');
      //   //   this.$router.push('/Condovalue')
      // } else if (this.ids == '4') {
      //   localStorage.setItem('flow', '1');
      //   //  this.$router.push('/Deedlandvalue')
      // }
      // localStorage.setItem('flow', '1');
      if (this.navigate === 'houseEstimate') {
        this.$router.push('/Address');
      } else {
        this.$router.push('/ValueSelect2');
      }
    },
    clickBtn(n) {
      if (n == '1') {
        this.ids = 1;
        this.flagbtn1 = 'outlined';
        this.flagbtn2 = 'text';
        this.flagbtn3 = 'text';
        this.flagbtn4 = 'text';
        this.homeSelect = '1';
        localStorage.setItem('flow', '1');
      }
      if (n == '2') {
        this.ids = 2;
        this.flagbtn1 = 'text';
        this.flagbtn2 = 'outlined';
        this.flagbtn3 = 'text';
        this.flagbtn4 = 'text';
        this.homeSelect = '2';
        localStorage.setItem('flow', '2');
      }

      if (n == '3') {
        this.ids = 3;
        this.flagbtn1 = 'text';
        this.flagbtn2 = 'text';
        this.flagbtn3 = 'outlined';
        this.flagbtn4 = 'text';
        this.homeSelect = '3';
        localStorage.setItem('flow', '3');
      }

      if (n == '4') {
        this.ids = 4;
        this.flagbtn1 = 'text';
        this.flagbtn2 = 'text';
        this.flagbtn3 = 'text';
        this.flagbtn4 = 'outlined';
        this.homeSelect = '4';
        localStorage.setItem('flow', '4');
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
