<template>

            <v-expansion-panel>
            <v-expansion-panel-header class="title">
                <span >{{Subcat}}</span>
            </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-virtual-scroll :bench="benched" :items="Videos" max-height="700" item-height="100">
                        <template v-slot:default="{ item }">
                            <v-list-item :key="item">
                                <v-list-item-action>
                                    <VideoPopup :Main="Main" :Cat="Cat" :Video="item" :Subcat="Subcat"/>
                                </v-list-item-action>
                            </v-list-item>
                        </template>
                    </v-virtual-scroll>
                </v-expansion-panel-content>
            </v-expansion-panel>
</template>

<script>
export default {
props: ["Cat", "Main", "Subcat"],

    data() {
        return {
            Videos: [],
            benched: 12,
            Open: null
        }
    },

    async created() {
        this.Videos = await this.axiosGet("videos/" + this.Main + "/" + this.Cat + "/" + this.Subcat);
        console.log("SubCat", this.Videos);
    },

    methods: {

    },
}
</script>

<style scoped>

.v-expansion-panel::before {
   box-shadow: none !important;
}
.title {
    min-height: 132px;
    font-size: 50pt !important;
    font-weight: bold;
    line-height: 60pt;
    padding-left: 58px;
}
.box {
    margin: auto;
    width: 800px
}

.subcat {
    font-size: 33pt;

}

</style>