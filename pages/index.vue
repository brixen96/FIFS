<template>
  <div>
    <v-row>
      <v-col>
        <div class="BTNContainer">
          <v-row v-for="index in mains.length" :key="index">
            <Nuxt-Link :to="'/main/' + mains[index - 1]" v-if="index % 2 == 1">
              <v-btn  class="btn">{{mains[index - 1]}}</v-btn>
            </Nuxt-Link>
          </v-row>
        </div>
      </v-col>
      <v-col>
        <div class="center-screen">
          <span class="fifsHeader">F I F S</span>
          <span class="fifsSubtext">Faglig Information & Forklarings System</span>
        </div>
      </v-col>
      <v-col>
        <div class="BTNContainer btn_right">
          <v-row v-for="index in mains.length" :key="index">
            <Nuxt-Link :to="'/main/' + mains[index - 1]" v-if="index % 2 == 0">
              <v-btn  class="btn">{{mains[index - 1]}}</v-btn>
            </Nuxt-Link>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
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

<style scoped>
.btn {
  height: 22vh !important;
  width: 24vw !important;
  font-size: 56pt !important;
  background-color: #FFFFFF;
  text-transform: none;
  font-weight: bold;
  letter-spacing: 0.5px;
  box-shadow: none !important;
}
.btn_right {
  float: right;
}

.BTNContainer {
  margin-top: 35vh;
}

.center-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50vw;
  margin: auto;
  margin-top: 32vh;
}

.fifsHeader {
  font-size: 220pt;
  font-weight: bold;
  line-height: 1;
}

.fifsSubtext {
  font-size: 30pt
}

</style>
