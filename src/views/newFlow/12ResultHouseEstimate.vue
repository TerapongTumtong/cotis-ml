<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center" style="margin-top: 3px">
        <v-col cols="auto">
          <span
            style="
              color: #1369b0;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
              width: 100%;
              margin-bottom: 5px;
            "
            >ราคาประเมินบ้าน</span
          >
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col>
          <img
            alt=""
            src="https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/map.png
            "
            width="357"
            height="184"
          />
        </v-col>
      </v-row>

      <v-card style="padding: 12px">
        <div
          style="
            color: #1369b0;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            text-align: center;
            width: 100%;
            margin-bottom: 15px;
          "
        >
          ราคาประเมินประเมินที่ดินย่าน<br />
          <span
            style="
              color: #1369b0;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
              width: 100%;
              margin-bottom: 10px;
            "
            >บรมราชชนี 101 กรุงเทพ ภาษีเจริญ กรุงเทพ 10170</span
          ><br />
          คือ
        </div>
        <div
          style="
            color: #1369b0;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            text-align: center;
            width: 100%;
            margin-bottom: 10px;
          "
        >
          ฿5,000,000 - ฿6,000,000
        </div>
        <div
          style="
            color: #12b0a8;
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            text-align: center;
            width: 100%;
            margin-bottom: 10px;
          "
        >
          ราคาเพิ่มขึ้น 300,000 บาท จาก 1 ปีที่แล้ว
        </div>
        <v-row style="margin-top: 10px">
          <v-col>
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-col>
            <img
              alt=""
              src="https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/chart.png
            "
              width="280"
              height="240"
            />
          </v-col>
        </v-row>
      </v-card>

      <v-card style="margin-top: 15px; padding: 12px">
        <div
          style="
            color: #1369b0;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            text-align: center;
            width: 100%;
            margin-bottom: 10px;
          "
        >
          ทราบราคาบ้านของคุณแล้ว <br />ต้องการสมัครสินเชื่อเลยหรือไม่ ?
        </div>
        <v-btn
          block
          variant="elevated"
          color="primary"
          style="margin-top: 30px; padding: 25px"
          v-on:click="gogo()"
        >
          สมัครสินเชื่อเลย !
        </v-btn>
        <v-btn
          block
          variant="outlined"
          color="primary"
          style="margin-top: 15px; padding: 25px"
          v-on:click="sendDataToLine()"
        >
          ส่งข้อมูลไปยังไลน์
        </v-btn>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
import axios from 'axios';
import liff from '@line/liff';
export default {
  data: () => ({
    dialog: false,
    loading: false,
    sprin: 50,
  }),

  methods: {
    gogo() {
      this.$router.push('/Result3');
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
                  url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/estimate_house1.png',
                  size: 'full',
                  aspectRatio: '20:22',
                  aspectMode: 'fit',
                  offsetTop: 'none',
                  offsetStart: 'none',
                },
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'สมัครสินเชื่อเลย !',
                        uri: 'https://liff.line.me/1661053996-85PKey2w',
                      },
                      style: 'primary',
                      color: '#0384fc',
                      height: 'sm',
                    },
                    {
                      type: 'button',
                      action: {
                        type: 'uri',
                        label: 'รายละเอียดเพิ่มเติม',
                        uri: 'https://liff.line.me/1661053996-G1BmJKOw',
                      },
                      height: 'sm',
                      style: 'primary',
                      color: '#0384fc',
                      offsetTop: 'md',
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

      await liff.closeWindow();
      await liff.logout();
      await window.close();
      this.$router.push('');
    },
    required(v) {
      return !!v || 'Field is required';
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
</style>
