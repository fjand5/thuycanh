<template>
  <div class="panel">
    <el-row>
      <span> Thời gian {{getSystemTime}}</span>
    </el-row>
    <el-row>
      <span> Ban ngày </span>
      <el-input-number
        name="'Bật'"
        v-model="OnTimeDay"
        @change="setOnTimeDay"
        :min="1"
        :max="30"
      ></el-input-number>
      <el-input-number
        name="'Tắt'"
        v-model="OffTimeDay"
        @change="setOffTimeDay"
        :min="1"
        :max="30"
      ></el-input-number>
    </el-row>
    <el-row>
      <span> Ban đêm </span>
      <el-input-number
        name="'Bật'"
        v-model="OnTimeNight"
        @change="setOnTimeNight"
        :min="1"
        :max="30"
      ></el-input-number>
      <el-input-number
        name="'Tắt'"
        v-model="OffTimeNight"
        @change="setOffTimeNight"
        :min="1"
        :max="30"
      ></el-input-number>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      OnTimeDay: 15,
      OffTimeDay: 15,
      OnTimeNight: 15,
      OffTimeNight: 15,
    };
  },
  computed: {
    ...mapGetters([
      "getOnTimeDay",
      "getOffTimeDay",
      "getOnTimeNight",
      "getOffTimeNight",
      "getSystemTime"
    ]),
  },
  watch: {
    getOnTimeDay: function (n) {
      this.OnTimeDay = n;
    },
    getOffTimeDay: function (n) {
      this.OffTimeDay = n;
    },
    getOnTimeNight: function (n) {
      this.OnTimeNight = n;
    },
    getOffTimeNight: function (n) {
      this.OffTimeNight = n;
    },
  },
  methods: {
    setOnTimeDay: function (time) {
      this.$store.dispatch("setOnTimeDay", time);
    },
    setOffTimeDay: function (time) {
      this.$store.dispatch("setOffTimeDay", time);
    },
    setOnTimeNight: function (time) {
      this.$store.dispatch("setOnTimeNight", time);
    },
    setOffTimeNight: function (time) {
      this.$store.dispatch("setOffTimeNight", time);
    },
  },
};
</script>

<style>
</style>