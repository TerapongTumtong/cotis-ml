<template>
  <v-container style="height: 100vh" class="main">
    <v-responsive class="d-flex text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <span
            style="
              color: #2d2d2d;
              font-size: 24px;
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
            src="src/assets/images/roof-of-life.png
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
            src="src/assets/images/roof-saver.png
            "
            width="200"
            height="55"
          />
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <span
            style="
              color: #2d2d2d;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
            "
            >เปลี่ยนบ้านเป็นเงินไม่ใช่เรื่องยากอีกต่อไป</span
          >
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
              color: #1369B0;
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
          <v-card>
            <v-tabs
              v-model="tab"
              color="primary"
              align-tabs="center"
            >
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
                            @click="detail"
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
                            @click="detail"
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
                            @click="detail"
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
          <v-btn block variant="outlined" color="primary" style="padding: 20px">
            ดูโปรโมชั่นเพิ่มเติม
          </v-btn>
          <!-- btn select -->
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container style="height: 100vh; background-color: #ddf3fc">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center" style="margin-bottom: 30px;">
        <v-col cols="auto">
          <img
            alt=""
            src="src/assets/images/search-house.png
            "
            width="226"
            height="244"
          />
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center" style="margin-bottom: 20px;">
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
      <v-row style="margin-top: 10px;margin-bottom: 20px;">
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
          <v-btn block variant="elevated" color="primary" style="padding: 21px">
            ประเมินราคาของคุณ
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import liff from '@line/liff';
export default {
  data() {
    return {
      tab: null,
    };
  },
  async created() {
    let liffIdData = '';
    liffIdData = { liffId: '1661053996-qZXnM4oG' }; // offline
    //  liffIdData = { liffId: "1661053996-ypbnDgve" }; // online

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
    btn() {
      this.$router.push('/TypeHome');
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  background-image: url('src/assets/images/main-body.png');
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
</style>
