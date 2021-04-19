<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <nuxt class="nuxt" />
        <v-row class="footer">
            <techcollegeLogo class="TCLogo"></techcollegeLogo>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Fifs'
    }
  }
}
</script>

<style scoped>
* {
    background-color: rgb(239,239,239);
}

html, body {
  height: 100%;
  padding: 0;
}

.container {
  height: 100%;
  padding: 0;
}

.nuxt {
  height: 91%;
  padding: 0;
}

.TCLogo {

  margin: auto;
  width: 10vw;
  height: auto;
}
</style>
