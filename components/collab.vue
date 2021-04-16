<template>
    <div>
        <v-expansion-panels>
            <v-expansion-panel>
            <v-expansion-panel-header>
                <b class="title">{{Cat}}</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row v-for="item in Videos" :key="item">
                    <v-col>
                        <v-btn plain>- {{item}}</v-btn>
                    </v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>

    </div>
</template>

<script>
export default {
    props: ["Cat", "Main"],
    data() {
        return {
            Videos: []
        }
    },
    async created () {
        var videos = await this.axiosGet("videos/" + this.Main + "/" + this.Cat)
    }
}
</script>

<style scoped>

</style>