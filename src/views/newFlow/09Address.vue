<template>
  <v-form v-model="disabledValue" @submit.prevent="onSubmit">
    <v-container class="fill-height">
      <v-responsive class="d-flex align-center text-center fill-height">
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <!-- สวัสดีบ้านของคุณเป็นแบบไหน  -->
            <span
              style="
                color: #1369b0;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
              "
              >กรุณาระบุที่อยู่ของคุณ 🏠</span
            >

            <!-- สวัสดีบ้านของคุณเป็นแบบไหน  -->
          </v-col>
        </v-row>
        <v-row class="d-flex align-left justify-left">
          <v-col>
            <div
              style="
                color: #2d2d2d;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                margin-bottom: 5px;
                text-align: left;
              "
            >
              ถนน
            </div>
            <v-row>
              <v-col style="text-align: left">
                <v-text-field
                  v-if="!isSubmit"
                  style="width: 100%"
                  v-model="street"
                  placeholder="กรอกที่อยู่ถนน"
                  variant="outlined"
                  :rules="[required]"
                ></v-text-field>
                <span
                  v-if="isSubmit"
                  style="
                    color: #1369b0;
                    font-size: 19px;
                    font-style: normal;
                    font-weight: 700;
                    padding-left: 15px;
                  "
                  >{{ street }}</span
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="d-flex align-left justify-left">
          <v-col>
            <div
              style="
                color: #2d2d2d;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                margin-bottom: 5px;
                text-align: left;
              "
            >
              จังหวัด
            </div>
            <v-row>
              <v-col style="text-align: left">
                <v-autocomplete
                  v-if="!isSubmit"
                  placeholder="เลือกจังหวัด"
                  v-model="province"
                  :items="[
                    'กรุงเทพ',
                    'นครปฐม',
                    'ชลบุรี',
                    'กาญจนบุรี',
                    'ระยอง',
                    'นนทบุรี',
                  ]"
                  variant="outlined"
                  :rules="[required]"
                ></v-autocomplete>
                <span
                  v-if="isSubmit"
                  style="
                    color: #1369b0;
                    font-size: 19px;
                    font-style: normal;
                    font-weight: 700;
                    padding-left: 15px;
                  "
                  >{{ province }}</span
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="d-flex align-left justify-left">
          <v-col>
            <div
              style="
                color: #2d2d2d;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                margin-bottom: 5px;
                text-align: left;
              "
            >
              เขต/อำเภอ
            </div>
            <v-row>
              <v-col style="text-align: left">
                <v-text-field
                  v-if="!isSubmit"
                  style="width: 100%"
                  v-model="district"
                  placeholder="กรอกเขต/อำเภอ"
                  variant="outlined"
                  :rules="[required]"
                ></v-text-field>
                <span
                  v-if="isSubmit"
                  style="
                    color: #1369b0;
                    font-size: 19px;
                    font-style: normal;
                    font-weight: 700;
                    padding-left: 15px;
                  "
                  >{{ district }}</span
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="d-flex align-left justify-left">
          <v-col style="text-align: left">
            <div
              style="
                color: #2d2d2d;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                margin-bottom: 5px;
                text-align: left;
              "
            >
              แขวง/ตำบล
            </div>
            <v-row>
              <v-col>
                <v-text-field
                  v-if="!isSubmit"
                  style="width: 100%"
                  v-model="parish"
                  placeholder="กรอกแขวง/ตำบล"
                  variant="outlined"
                  :rules="[required]"
                ></v-text-field>
                <span
                  v-if="isSubmit"
                  style="
                    color: #1369b0;
                    font-size: 19px;
                    font-style: normal;
                    font-weight: 700;
                    padding-left: 15px;
                  "
                  >{{ parish }}</span
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="d-flex align-left justify-left">
          <v-col>
            <div
              style="
                color: #2d2d2d;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                margin-bottom: 5px;
                text-align: left;
              "
            >
              รหัสไปรษณีย์
            </div>
            <v-row>
              <v-col style="text-align: left">
                <v-text-field
                  v-if="!isSubmit"
                  style="width: 100%"
                  v-model="postcode"
                  placeholder="กรอกรหัสไปรษณีย์"
                  variant="outlined"
                  :rules="[required]"
                ></v-text-field>
                <span
                  v-if="isSubmit"
                  style="
                    color: #1369b0;
                    font-size: 19px;
                    font-style: normal;
                    font-weight: 700;
                    padding-left: 15px;
                  "
                  >{{ postcode }}</span
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-col>
            <!-- btn select -->
            <v-btn
              v-if="!isSubmit"
              block
              style="margin-top: 22px; padding: 23px"
              variant="elevated"
              :color="isDisabled ? '' : 'primary'"
              :disabled="isDisabled"
              v-on:click="submit()"
            >
              ถัดไป
            </v-btn>

            <v-btn
              v-if="isSubmit"
              block
              style="margin-top: 22px; padding: 23px"
              variant="elevated"
              color="primary"
              v-on:click="gogo()"
            >
              ยืนยัน
            </v-btn>
            <v-btn
              v-if="isSubmit"
              block
              style="margin-top: 22px; padding: 23px"
              variant="outlined"
              color="primary"
              v-on:click="edit()"
            >
              แก้ไขข้อมูล
            </v-btn>
            <!-- btn select -->
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    disabledValue: false,
    isSubmit: false,
    mobile: null,
    surname: null,
    name: null,
    loading: false,
    street: null,
    province: null,
    district: null,
    parish: null,
    postcode: null,
  }),
  computed: {
    isDisabled() {
      if (
        this.street !== null &&
        this.street !== '' &&
        this.province !== null &&
        this.province !== '' &&
        this.district !== null &&
        this.district !== '' &&
        this.parish !== null &&
        this.parish !== '' &&
        this.postcode !== null &&
        this.postcode !== ''
      ) {
        return false
      }
      return true
    },
  },
  methods: {
    onSubmit() {
      if (!this.form) return;

      //this.loading = true

      this.loading = false;
    },
    submit() {
      this.isSubmit = true;
    },
    edit() {
      this.isSubmit = false;
    },

    gogo(){
       this.$router.push('/SizeHome');
    },
    required(v) {
      return !!v || 'Field is required';
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(.v-input__details) {
  display: none;
}
:deep(.v-field__input) {
  padding-top: 2px;
  padding-bottom: 2px;
  min-height: 42px;
}
:deep(.v-field__append-inner) {
  padding-top: 8px;
}
:deep(.v-autocomplete .v-field input) {
  padding-top: 7px;
}
:deep(.v-autocomplete__selection) {
  padding-top: 7px;
}
:deep(.v-field__clearable) {
  padding-top: 9px;
}
</style>
