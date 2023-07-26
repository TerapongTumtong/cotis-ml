<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <img
            alt=""
            src="src/assets/images/Logos-Tisco.png
                    "
            width="218"
            height="90"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!-- ค้นหาสินเชื่อที่เหมาะกับคุณ -->
          <span
            style="
              color: #2d2d2d;
              font-size: 26px;
              font-style: normal;
              font-weight: 700;
            "
            >ค้นหาสินเชื่อบ้านแลกเงิน <br />
            ที่เหมาะกับคุณ​</span
          >
          <!-- ค้นหาสินเชื่อที่เหมาะกับคุณ -->
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!-- พร้อมประเมิน ยื่นง่าย ได้เงินชัวร์ -->
         <span
            style="
              color: #737373;
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
            "
            >พร้อมประเมิน ยื่นง่าย ได้เงินชัวร์​</span
          >
          <!-- พร้อมประเมิน ยื่นง่าย ได้เงินชัวร์ -->
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!-- ปุ่ม ค้นหาเลย  -->
           <v-btn
            variant="elevated"
            color="primary"
            style="margin-top: 30px;width:236px;height:54px"
            v-on:click="btn()"
          >
            ค้นหาเลย
          </v-btn>
          
          <!-- ปุ่ม ค้นหาเลย  -->
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import liff from '@line/liff';
export default {
  data() {
    return {};
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
