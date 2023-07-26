<template>
  <v-container class="fill-height">
    <span
      style="
        color: #1369b0;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        text-align: center;
        width: 100%;
      "
      >ระบบกำลังค้นหา <br />
      โปรโมชั่นที่เหมาะกับคุณ</span
    >
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row>
        <v-col>
          <!-- ค้นหาสินเชื่อที่เหมาะกับคุณ -->
          <v-progress-circular
            indeterminate
            color="primary"
            v-model="sprin"
            style="width: 20px; height: 20px"
          ></v-progress-circular>

          <span
            style="
              color: #2d2d2d;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              margin-left: 16px;
            "
            >ระบบกำลังค้นหาสินเชื่อที่เหมาะกับคุณมากที่สุด !</span
          >
          <!-- ค้นหาสินเชื่อที่เหมาะกับคุณ -->
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!-- พร้อมประเมิน ยื่นง่าย ได้เงินชัวร์ -->
          <v-progress-linear
            v-model="sprin"
            color="primary"
          ></v-progress-linear>

          <!-- พร้อมประเมิน ยื่นง่าย ได้เงินชัวร์ -->
        </v-col>
      </v-row>
      <v-row>
        <v-col> 
           <span
            style="
              color: #2d2d2d;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              margin-left: 16px;
            "
            >ระบบกำลังค้นหาสินเชื่อที่เหมาะกับคุณมากที่สุด !</span
          >
        </v-col>
      </v-row>
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
  created() {
    setInterval(()=>{
      if(this.sprin < 100){

        this.sprin += 30
      }else{
         this.$router.push('/Result3');
      }
    }, 1500)
    // setTimeout(() => {
    //   this.sprin = 100;
    //   setTimeout(() => 1000);
    // }, 1500);
  },
  methods: {
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
</style>
