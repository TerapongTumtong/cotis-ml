<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center" style="margin-top: 3px">
        <v-col cols="auto">
          <span
            style="
              color: #1369b0;
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            "
            >โปรโมชั่นพิเศษที่เหมาะกับคุณ</span
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col col="auto">
          <v-card >
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
                <div style="padding: 1px; background-color: #c2101a">
                  <span style="padding: 6px; color: white; font-size: 10px"
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
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="primary"
                variant="outlined"
                @click="dialog_detail = true"
                style="display: flex; flex: 1 0 auto; width: 78px"
              >
                รายละเอียด
              </v-btn>
              <v-btn
                color="primary"
                variant="elevated"
                @click="dialog = true"
                style="display: flex; flex: 1 0 auto"
              >
                สมัครเลย
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-row style="margin-top: 10px">
            <v-col col="auto">
              <v-card
                style="text-align: left; background-color: rgb(211 235 255)"
              >
                <v-card-item style="text-align: left">
                  <span class="second-label" style="color: #1369b0"
                    >ทำไมถึงเลือกโปรโมขั่นนี้ ?</span
                  >
                  <br />
                  <span class="main-label"
                    >เนื่องจากคุณทำงานเป็นฟรีแลนซ์
                    และมีรายได้ค่อนข้างสูงเราจึงคิดว่าบ้านแลกเงินที่สามารถโปะและถอนได้น่าจะเหมาะกับคนที่มีกระแสเงินสดเยอะ
                    ทำให้สามารถประหยัดดอกเบี้ยได้เยอะมากขึ้น</span
                  >
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row style="margin-top: 10px">
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row style="margin-top: 10px">
        <v-col>
          <span
            style="
              color: #1369b0;
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
            "
            >โปรโมชั่นแนะนำเพิ่มเติม</span
          >
        </v-col>
      </v-row>
      <!-- โปรโมชั่นที่ ๅ -->
      <v-row>
        <v-col col="auto">
          <v-card >
            <v-card-item style="text-align: left">
              <v-card-subtitle class="d-flex">
                <span
                  style="
                    color: #1369b0;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                  "
                  >ธนาคารแนะนำอันดับที่ 1</span
                >
                <v-icon
                  icon="mdi-help-circle-outline"
                  size="small"
                  style="margin-left: 3px; margin-top: 1px"
                ></v-icon>

                <div style="flex-grow: 1"></div>
                <div style="padding: 1px; background-color: #f8ba69">
                  <span style="padding: 6px; color: white; font-size: 10px"
                    >Recommened Partner</span
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
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="primary"
                variant="outlined"
                @click="dialog_detail = true"
                style="display: flex; flex: 1 0 auto; width: 78px"
              >
                รายละเอียด
              </v-btn>
              <v-btn
                color="primary"
                variant="elevated"
                @click="dialog = true"
                style="display: flex; flex: 1 0 auto"
              >
                สมัครเลย
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- โปรโมชั่นที่ 2 -->
      <v-row>
        <v-col col="auto">
          <v-card >
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
                <div style="padding: 1px; background-color: #f8ba69">
                  <span style="padding: 6px; color: white; font-size: 10px"
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
                <span class="second-label" style="color: #1369b0">10,000</span>
              </div>

              <div class="d-flex" style="line-height: 25px">
                <span class="main-label">ระยะเวลากู้สูงสุด (ปี)</span>
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
                @click="dialog_detail = true"
                style="display: flex; flex: 1 0 auto; width: 78px"
              >
                รายละเอียด
              </v-btn>
              <v-btn
                color="primary"
                variant="elevated"
                @click="dialog = true"
                style="display: flex; flex: 1 0 auto"
              >
                สมัครเลย
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- โปรโมชั่นที่ 3 -->
      <v-row>
        <v-col col="auto">
          <v-card >
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
                <div style="padding: 1px; background-color: #0d7a73">
                  <span style="padding: 6px; color: white; font-size: 10px"
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
                <span class="second-label" style="color: #1369b0">8,000</span>
              </div>

              <div class="d-flex" style="line-height: 25px">
                <span class="main-label">ระยะเวลากู้สูงสุด (ปี)</span>
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
                @click="dialog_detail = true"
                style="display: flex; flex: 1 0 auto; width: 78px"
              >
                รายละเอียด
              </v-btn>
              <v-btn
                color="primary"
                variant="elevated"
                @click="dialog = true"
                style="display: flex; flex: 1 0 auto"
              >
                สมัครเลย
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col>
          <!-- btn select -->
          <v-btn block variant="outlined" color="primary" style="padding: 25px">
            ดูโปรโมชั่นเพิ่มเติม
          </v-btn>
          <!-- btn select -->
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
            >
              สมัครสินเชื่อฟรี ไม่เสียค่าบริการ
            </div>
            <v-spacer></v-spacer>
            <v-icon
              @click="dialog = false"
              style="font-size: 20px; margin-top: 7px"
              >mdi-close</v-icon
            >
          </v-card-title>
          <v-card-text>
            <div class="text-subtitle-modal">✓ แจ้งสถานะการติดตามผล</div>
            <div class="text-subtitle-modal">✓ รู้ผลภายใน 48 ชั่วโมง</div>
            <div class="text-subtitle-modal">✓ ส่งเอกสารสารออนไลน์</div>

            <div
              style="
                color: #2d2d2d;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                margin-top: 10px;
                margin-bottom: 5px;
              "
            >
              ชื่อ
            </div>
            <v-row>
              <v-col>
                <input class="custom-input" placeholder="กรุณากรอกชื่อ" />
              </v-col>
            </v-row>
            <div
              style="
                color: #2d2d2d;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                margin-top: 10px;
                margin-bottom: 5px;
              "
            >
              นามสกุล
            </div>
            <v-row>
              <v-col>
                <input class="custom-input" placeholder="กรุณากรอกนามสกุล" />
              </v-col>
            </v-row>
            <div
              style="
                color: #2d2d2d;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                margin-top: 10px;
                margin-bottom: 5px;
              "
            >
              เบอร์โทรติดต่อ
            </div>
            <v-row>
              <v-col>
                <input
                  class="custom-input"
                  placeholder="กรุณากรอกเบอร์โทรติดต่อ"
                />
              </v-col>
            </v-row>

            <v-checkbox
              label="คุณได้ยอมรับข้อตกลงและเงื่อนไข และ นโยบายความคุ้มครองส่วนบุคคลของ RoofSaver "
            ></v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="elevated"
              block
              @click="
                dialog = false;
                sendDataToLine();
                dialog_submit = true;
              "
              style="padding: 25px"
              >สมัครเลย !</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- dialog submit -->

      <v-dialog v-model="dialog_submit" width="340">
        <v-card>
          <v-card-text>
            <v-row
              class="d-flex align-center justify-center"
              style="margin-top: 3px"
            >
              <v-col cols="auto">
                <img
                  alt=""
                  src="https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/submit.png"
                  width="240"
                  height="150"
                />
              </v-col>

              <div
                style="
                  color: #1369b0;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 700;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
              >
                ส่งข้อมูลให้ธนาคารเรียบร้อย
              </div>

              <div class="main-label" style="line-height: 30px">
                คุณจะได้รับการติดต่อกลับภายใน 1 วัน
              </div>
              <div class="main-label" style="line-height: 30px">
                เราจะส่งสถานะไปยัง SME ของคุณ
              </div>

              <div class="main-label" style="line-height: 30px">
                ---------------------------- หรือ ----------------------------
              </div>
              <div class="main-label" style="line-height: 30px">
                สามารถดูสถานะการสมัครของคุณได้ที่
              </div>
              <div class="second-label" style="line-height: 30px">
                LINE <span style="color: #1369b0">@homeequity</span>
              </div>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="outlined"
              block
              @click="
                returnToLine();
              "
              style="padding: 25px"
              >กลับสู่หน้าหลัก</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- dialog detail -->
      <v-dialog v-model="dialog_detail" width="340">
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
              @click="dialog_detail = false"
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
              @click="dialog_detail = false"
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
import axios from 'axios';
import liff from '@line/liff';
export default {
  data: () => ({
    dialog: false,
    dialog_submit: false,
    dialog_detail: false,
    loading: false,
    sprin: 50,
  }),
  created() {},
  methods: {
    required(v) {
      return !!v || 'Field is required';
    },
    async sendDataToLine() {
      const headers = {
        'Content-Type': 'application/json',
      };
      let req;

      req = {
        token:
          'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
        userId: localStorage.getItem('profileId'),
        data: {
          to: [localStorage.getItem('profileId')],
          messages: [
            {
              type: 'flex',
              altText: 'Summary',
              contents: {
                type: 'bubble',
                hero: {
                  type: 'image',
                  url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/tracking_1.png',
                  size: 'full',
                  aspectRatio: '18:19',
                  aspectMode: 'fit',
                  offsetTop: 'none',
                  offsetStart: 'none',
                },
                body: {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'message',
                        label: 'ติดต่อเจ้าหน้าที่',
                        text: 'ติดต่อพนักงานดูแลสินเชื่อ',
                      },
                      style: 'primary',
                      color: '#0384fc',
                      height: 'sm',
                    },
                  ],
                },
              },
            },
          ],
        },
      };

      await axios
        .post('https://d3uc9t7bjwxv55.cloudfront.net/api/sendLineMsg', req, {
          headers,
        })
        .then((response) => response.data);

    },
    async returnToLine() {
      this.dialog_submit = false;
      await liff.closeWindow();
      await liff.logout();
      await window.close();
      this.$router.push('');
    },
  },
};
</script>
<style lang="scss" scoped>
.v-responsive {
  max-height: 90% !important;
}

.v-card {
  border-width: 1px !important;
}

.v-divider {
  border-style: dashed;
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

.custom-input {
  width: 100%;
  border: solid #ababab 1px;
  border-radius: 5px;
  padding: 9px;
  margin-bottom: 15px;
}
:deep(.v-label) {
  margin-top: 20px !important;
  font-size: 12px !important;
}
</style>
