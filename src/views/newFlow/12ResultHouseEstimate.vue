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
            src="src/assets/images/map.png
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
              src="src/assets/images/chart.png
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
        >
          ส่งข้อมูลไปยังไลน์
        </v-btn>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    loading: false,
    sprin: 50,
  }),

  methods: {
    gogo() {
      this.$router.push('/Home2');
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
