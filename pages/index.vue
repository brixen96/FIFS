<template>
  <v-row>
    <v-col>
      t<v-btn class="btn">SMED</v-btn>
    </v-col>
    {{test}}
    <v-col>
      <v-btn class="btn">TEK</v-btn>
    </v-col>
  </v-row>
</template>

<script>
//import fs from "fs";
import dirScan from '../middleware/fileScanner.js'

export default {
  data: () => ({
      test: [],
    }),

  created() {
    console.log(dirScan.getDirInDir('./TestFolder/'));
    console.log(dirScan.getDirInDir('./TestFolder/'));

  }
}
</script>

<style lang="css" scoped>
.btn {
  height: 10vh;
  width: 10vw;
  font-size: 18;
}
</style>
