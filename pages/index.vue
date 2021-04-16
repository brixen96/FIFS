<template>
  <div>
    <v-row class="row">
      <div v-for="index in mains.length" :key="index">
        <Nuxt-Link :to="'/main/' + mains[index - 1]">
          <v-btn v-if="index % 2 == 1" class="btn_top">{{mains[index - 1]}}</v-btn>
        </Nuxt-Link>
      </div>
    </v-row>
    <v-row class="row">
        <div class="center-screen">
          <h1 style="font-size: 10rem">F I F S</h1>
          <p>Faglig Information & Forklarings System</p>
        </div>
    </v-row>
    <v-row class="row">
      <div v-for="index in mains.length" :key="index">
        <Nuxt-Link :to="'/main/' + mains[index - 1]">
          <v-btn v-if="index % 2 == 0" class="btn_bottom">{{mains[index - 1]}}</v-btn>
        </Nuxt-Link>
      </div>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  /*
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {},
  */

  data(){
    return {
      mains: []
    }
  },
  
  async created() {
    this.mains = await this.axiosGet("maincat");
  },
  
}
</script>

<style lang="css" scoped>
.btn_top {
  height: 22vh !important;
  width: 20vw !important;
  font-size: 2rem;
  margin-top: 1.5vh;
  background-color: #FFFFFF;
  text-transform: none;
  margin-right: 1vw;
}
.btn_bottom {
  height: 22vh !important;
  width: 20vw !important;
  font-size: 2rem;
  bottom: -30%;
  background-color: #FFFFFF;
  text-transform: none;
  margin-right: 1vw;
}
.center-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50vw;
  margin: auto;
  font-size: 1.5rem
}
.row {
  height: 33.3vh !important;
  justify-content: center;
}


</style>
