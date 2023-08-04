<template>
  <v-container style="height: 93vh" class="main">
    <v-responsive class="d-flex text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto" style="margin-top: 39px">
          <span
            style="
              color: #2d2d2d;
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
            "
            >เริ่มต้นการใช้งาน</span
          >
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <img
            alt=""
            src="https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/roof-of-life.png
            "
            width="110"
            height="110"
          />
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <img
            alt=""
            src="https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/roof-saver.png
            "
            width="226"
            height="65"
          />
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <span
            style="
              color: #2d2d2d;
              font-size: 19px;
              font-style: normal;
              font-weight: 500;
            "
            >เครื่องมือที่จะช่วยให้คุณหา<br />
            สินเชื่อบ้านแลกเงินที่เหมาะกับคุณ !</span
          >
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            block
            variant="elevated"
            color="primary"
            style="padding: 25px; width: 176px; margin-top: 31px"
            v-on:click="btnPromotion()"
          >
            ค้นหาโปรโมชั่น
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container>
    <v-responsive class="d-flex text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <span
            style="
              color: #1369b0;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
            "
            >เลือกได้ตามความต้องการ</span
          >
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-card id="test">
            <v-tabs v-model="tab" color="primary" align-tabs="center">
              <v-tab :value="1">ดอกเบี้ยต่ำ 🔻</v-tab>
              <v-tab :value="2">ค่างวดน้อย 🤏</v-tab>
              <v-tab :value="3">วงเงินสูง 💵</v-tab>
            </v-tabs>
            <v-window v-model="tab">
              <v-window-item v-for="n in 3" :key="n" :value="n">
                <v-container class="tab-data" fluid>
                  <v-row>
                    <v-col>
                      <v-card max-width="374">
                        <v-card-item style="text-align: left">
                          <v-card-subtitle class="d-flex">
                            <span
                              style="
                                color: #1369b0;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                              "
                              >โปรโมชั่นที่เหมาะกับคุณ</span
                            >
                            <v-icon
                              icon="mdi-help-circle-outline"
                              size="small"
                              style="margin-left: 3px; margin-top: 1px"
                            ></v-icon>

                            <div style="flex-grow: 1"></div>
                            <div
                              style="padding: 1px; background-color: #c2101a"
                            >
                              <span
                                style="
                                  padding: 6px;
                                  color: white;
                                  font-size: 10px;
                                "
                                >Recommened</span
                              >
                            </div>
                          </v-card-subtitle>

                          <v-card-title style="color: #1369b0; font-weight: 700"
                            >ดอกเบี้ยสามปีแรก 5.05 %</v-card-title
                          >
                        </v-card-item>

                        <v-divider class="mx-4 mb-1"></v-divider>
                        <v-card-text>
                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">กู้ได้สูงสุด</span>
                            <div style="flex-grow: 1"></div>
                            <div class="second-label">
                              <span style="color: #1369b0">90% </span>
                              <span>ของราคาประเมิน</span>
                            </div>
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">ประกันชีวิต (MRTA)</span>
                            <div style="flex-grow: 1"></div>
                            <span class="second-label">ไม่ต้องทำ</span>
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">ผ่อนต่อเดือน (บาท)</span>
                            <div style="flex-grow: 1"></div>
                            <span class="second-label" style="color: #1369b0"
                              >9,500</span
                            >
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label"
                              >ระยะเวลากู้สูงสุด (ปี)</span
                            >
                            <div style="flex-grow: 1"></div>
                            <span class="second-label">40 ปี</span>
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">ค่าใช้จ่ายอื่น ๆ</span>
                            <div style="flex-grow: 1"></div>
                            <span class="second-label">13,600</span>
                          </div>
                        </v-card-text>

                        <v-card-actions>
                          <v-btn
                            color="primary"
                            variant="outlined"
                            @click="dialog = true"
                            style="display: flex; flex: 1 0 auto"
                          >
                            รายละเอียด
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-card max-width="374">
                        <v-card-item style="text-align: left">
                          <v-card-subtitle class="d-flex">
                            <span
                              style="
                                color: #1369b0;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                              "
                              >ธนาคารแนะนำอันดับที่ 2</span
                            >
                            <v-icon
                              icon="mdi-help-circle-outline"
                              size="small"
                              style="margin-left: 3px; margin-top: 1px"
                            ></v-icon>

                            <div style="flex-grow: 1"></div>
                            <div
                              style="padding: 1px; background-color: #f8ba69"
                            >
                              <span
                                style="
                                  padding: 6px;
                                  color: white;
                                  font-size: 10px;
                                "
                                >Recommened Partner</span
                              >
                            </div>
                          </v-card-subtitle>

                          <v-card-title style="color: #1369b0; font-weight: 700"
                            >ดอกเบี้ยสามปีแรก 6.05 %</v-card-title
                          >
                        </v-card-item>

                        <v-divider class="mx-4 mb-1"></v-divider>
                        <v-card-text>
                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">กู้ได้สูงสุด</span>
                            <div style="flex-grow: 1"></div>
                            <div class="second-label">
                              <span style="color: #1369b0">90% </span>
                              <span>ของราคาประเมิน</span>
                            </div>
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">ประกันชีวิต (MRTA)</span>
                            <div style="flex-grow: 1"></div>
                            <span class="second-label">ไม่ต้องทำ</span>
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">ผ่อนต่อเดือน (บาท)</span>
                            <div style="flex-grow: 1"></div>
                            <span class="second-label" style="color: #1369b0"
                              >10,000</span
                            >
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label"
                              >ระยะเวลากู้สูงสุด (ปี)</span
                            >
                            <div style="flex-grow: 1"></div>
                            <span class="second-label">40 ปี</span>
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">ค่าใช้จ่ายอื่น ๆ</span>
                            <div style="flex-grow: 1"></div>
                            <span class="second-label">14,000</span>
                          </div>
                        </v-card-text>

                        <v-card-actions>
                          <v-btn
                            color="primary"
                            variant="outlined"
                            @click="dialog = true"
                            style="display: flex; flex: 1 0 auto"
                          >
                            รายละเอียด
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-card max-width="374">
                        <v-card-item style="text-align: left">
                          <v-card-subtitle class="d-flex">
                            <span
                              style="
                                color: #1369b0;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                              "
                              >ธนาคารแนะนำอันดับที่ 3</span
                            >
                            <v-icon
                              icon="mdi-help-circle-outline"
                              size="small"
                              style="margin-left: 3px; margin-top: 1px"
                            ></v-icon>

                            <div style="flex-grow: 1"></div>
                            <div
                              style="padding: 1px; background-color: #0d7a73"
                            >
                              <span
                                style="
                                  padding: 6px;
                                  color: white;
                                  font-size: 10px;
                                "
                                >ฟรีค่าธรรมเนียม</span
                              >
                            </div>
                          </v-card-subtitle>

                          <v-card-title style="color: #1369b0; font-weight: 700"
                            >ดอกเบี้ยสามปีแรก 7.05 %</v-card-title
                          >
                        </v-card-item>

                        <v-divider class="mx-4 mb-1"></v-divider>
                        <v-card-text>
                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">กู้ได้สูงสุด</span>
                            <div style="flex-grow: 1"></div>
                            <div class="second-label">
                              <span style="color: #1369b0">95% </span>
                              <span>ของราคาประเมิน</span>
                            </div>
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">ประกันชีวิต (MRTA)</span>
                            <div style="flex-grow: 1"></div>
                            <span class="second-label">ไม่ต้องทำ</span>
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">ผ่อนต่อเดือน (บาท)</span>
                            <div style="flex-grow: 1"></div>
                            <span class="second-label" style="color: #1369b0"
                              >8,000</span
                            >
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label"
                              >ระยะเวลากู้สูงสุด (ปี)</span
                            >
                            <div style="flex-grow: 1"></div>
                            <span class="second-label">40 ปี</span>
                          </div>

                          <div class="d-flex" style="line-height: 25px">
                            <span class="main-label">ค่าใช้จ่ายอื่น ๆ</span>
                            <div style="flex-grow: 1"></div>
                            <span class="second-label">14,000</span>
                          </div>
                        </v-card-text>

                        <v-card-actions>
                          <v-btn
                            color="primary"
                            variant="outlined"
                            @click="dialog = true"
                            style="display: flex; flex: 1 0 auto"
                          >
                            รายละเอียด
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col>
          <!-- btn select -->
          <v-btn block variant="outlined" color="primary" style="padding: 20px"  @click="btnMorePromotion()">
            ดูโปรโมชั่นเพิ่มเติม
          </v-btn>
          <!-- btn select -->
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container style="height: 100vh; background-color: #ddf3fc">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row
        class="d-flex align-center justify-center"
        style="margin-bottom: 30px"
      >
        <v-col cols="auto">
          <img
            alt=""
            src="https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/search-house.png
            "
            width="226"
            height="244"
          />
        </v-col>
      </v-row>
      <v-row
        class="d-flex align-center justify-center"
        style="margin-bottom: 20px"
      >
        <v-col cols="auto">
          <span
            style="
              color: #1369b0;
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
            "
            >อยากรู้ไหมว่าบ้านคุณราคาเท่าไหร่?</span
          >
        </v-col>
      </v-row>
      <v-row style="margin-top: 10px; margin-bottom: 20px">
        <v-col>
          <v-card max-width="374" style="text-align: left; padding: 7px">
            <v-card-item style="text-align: left">
              <div class="second-label">
                <span style="color: #1369b0">✓</span> ราคาใกล้เคียงราคาตลาด
              </div>
              <div class="second-label">
                <span style="color: #1369b0">✓</span> กรอกข้อมูลน้อย
                ประเมินแม่นยำ
              </div>
              <div class="second-label">
                <span style="color: #1369b0">✓</span>
                ยื่นกู้ได้ทันทีเมื่อต้องการใช้เงิน
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            block
            variant="elevated"
            color="primary"
            style="padding: 21px"
            v-on:click="btnHouseEstimate()"
          >
            ประเมินราคาของคุณ
          </v-btn>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" width="340">
        <v-card>
          <v-card-title style="display: flex">
            <div
              style="
                color: #1369b0;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
              "
            ></div>
            <v-spacer></v-spacer>
            <v-icon
              @click="dialog = false"
              style="font-size: 20px; margin-top: 7px"
              >mdi-close</v-icon
            >
          </v-card-title>
          <v-card-title style="color: #1369b0; font-weight: 700"
            >ดอกเบี้ยสามปีแรก 5.05 %</v-card-title
          >
          <v-card-subtitle style="color: #1369b0; font-weight: 700"
            >รายละเอียดเพิ่มเติม</v-card-subtitle
          >
          <v-card-text>
            <div class="d-flex" style="line-height: 25px">
              <span class="main-label">กู้ได้สูงสุด</span>
              <div style="flex-grow: 1"></div>
              <div class="second-label">
                <span style="color: #1369b0">90% </span>
                <span>ของราคาประเมิน</span>
              </div>
            </div>

            <div class="d-flex" style="line-height: 25px">
              <span class="main-label">ประกันชีวิต (MRTA)</span>
              <div style="flex-grow: 1"></div>
              <span class="second-label">ไม่ต้องทำ</span>
            </div>

            <div class="d-flex" style="line-height: 25px">
              <span class="main-label">ผ่อนต่อเดือน (บาท)</span>
              <div style="flex-grow: 1"></div>
              <span class="second-label" style="color: #1369b0">9,500</span>
            </div>

            <div class="d-flex" style="line-height: 25px">
              <span class="main-label">ระยะเวลากู้สูงสุด (ปี)</span>
              <div style="flex-grow: 1"></div>
              <span class="second-label">40 ปี</span>
            </div>

            <div class="d-flex" style="line-height: 25px">
              <span class="main-label">ค่าใช้จ่ายอื่น ๆ</span>
              <div style="flex-grow: 1"></div>
              <span class="second-label">13,600</span>
            </div>

            <div class="d-flex" style="line-height: 25px">
              <span class="main-label">ดอกเบี้ยสามปีแรก</span>
              <div style="flex-grow: 1"></div>
              <span class="second-label" style="color: #1369b0">5.05%</span>
            </div>

            <div class="d-flex" style="line-height: 25px">
              <span class="main-label">ดอกเบี้ยสามปีแรก</span>
              <div style="flex-grow: 1"></div>
              <span class="second-label" style="color: #1369b0">6.05%</span>
            </div>
          </v-card-text>
          <v-card-subtitle style="color: #1369b0; font-weight: 700"
            >ข้อดีของผลิตภัณฑ์ตัวนี้</v-card-subtitle
          >
          <v-card-text>
            <div class="text-subtitle-modal">✓ แจ้งสถานะการติดตามผล</div>
            <div class="text-subtitle-modal">✓ รู้ผลภายใน 48 ชั่วโมง</div>
            <div class="text-subtitle-modal">✓ ส่งเอกสารสารออนไลน์</div>
          </v-card-text>

          <v-card-subtitle style="color: #1369b0; font-weight: 700"
            >Reviews</v-card-subtitle
          >
          <v-card-text>
            <div class="d-flex" style="flex-direction: row">
              <span
                style="
                  color: #1369b0;
                  font-size: 32px;
                  font-style: normal;
                  font-weight: 700;
                "
                >8.5</span
              >
              <div
                class="d-flex"
                style="flex-direction: column; margin-left: 18px"
              >
                <div
                  style="
                    color: #1369b0;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                  "
                >
                  ระดับ ดีเยี่ยม
                </div>
                <div
                  style="
                    color: #2d2d2d;
                    font-size: 11px;
                    font-style: normal;
                    font-weight: 500;
                  "
                >
                  4330 รีวิว
                </div>
              </div>
            </div>
          </v-card-text>
          <v-checkbox
            label="คุณได้ยอมรับข้อตกลงและเงื่อนไข และ นโยบายความคุ้มครองส่วนบุคคลของ RoofSaver "
          ></v-checkbox>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="elevated"
              block
              @click="dialog = false;btnPromotion()"
              style="padding: 25px"
              >สมัครเลย !</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-responsive>
  </v-container>
</template>

<script>
import liff from '@line/liff';
export default {
  data() {
    return {
      tab: null,
      dialog: false,
    };
  },
  async created() {
    console.log('The id is: ' + this.$route.query.isDialogActive);
    const isDialogActive = this.$route.query.isDialogActive;
    let liffIdData = '';
    if (isDialogActive) {
      this.dialog = true;
      // liffIdData = { liffId: '1661053996-leP7JVXD' }; // offline
      liffIdData = { liffId: '1661053996-5l7ngqMJ' }; // online
    } else {
      // liffIdData = { liffId: '1661053996-o26EmVjA' }; // offline
      liffIdData = { liffId: '1661053996-ob21KOkQ' }; // online
    }

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
  methods: {
     btnMorePromotion() {
      this.$router.push('/Result3');
    },
    btnPromotion() {
      localStorage.setItem('homeFlow', 'promotion');
      this.$router.push('/PromotionSelect');
    },
    btnHouseEstimate() {
      localStorage.setItem('homeFlow', 'houseEstimate');
      this.$router.push('/TypeHomeEstimate');
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  background-image: url('https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
:deep(.v-card--variant-elevated) {
  box-shadow: none;
}
.tab-data .v-card {
  border-width: 1px !important;
}
.main-label {
  color: #737373;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.second-label {
  color: #2d2d2d;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
}
.text-subtitle-modal {
  font-size: 13px;
  font-weight: normal;
  line-height: 1.25rem;
  letter-spacing: 0.009375em !important;
  font-family: 'Roboto', sans-serif !important;
  text-transform: none !important;
}
:deep(.v-label) {
  margin-top: 20px !important;
  font-size: 12px !important;
}
</style>
