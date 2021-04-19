<template>
    <div>
        <v-expansion-panels class="box" v-model="Open" expandable>
            <v-expansion-panel @click="click" v-model="Open" expand>
            <v-expansion-panel-header class="title">
                <span >{{Cat}}</span>
            </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-virtual-scroll :bench="benched" :items="Videos" max-height="900" item-height="90">
                        <template v-slot:default="{ item }">
                            <v-list-item :key="item">
                                <v-list-item-action>
                                    <VideoPopup :Main="Main" :Cat="Cat" :Video="item" />
                                </v-list-item-action>
                            </v-list-item>
                        </template>
                    </v-virtual-scroll>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div> 
</template>

<script>
import VideoPopup from "/components/VideoPopup.vue"
export default {
    props: ["Cat", "Main"],

    components: {
        VideoPopup
    },

    data() {
        return {
            Videos: [],
            benched: 12,
            Open: null
        }
    },

    async created () {
        this.Videos = await this.axiosGet("videos/" + this.Main + "/" + this.Cat)
    },

    methods: {
        close: function() {
            this.Open = null;
        },
        click: function() {
            this.$emit("click");
        },
    }
}
</script>

<style scoped>

.v-expansion-panel::before {
   box-shadow: none !important;
}
.title {
    min-height: 132px;
    font-size: 56pt !important;
    font-weight: bold;
    line-height: 60pt;
    padding-left: 58px;
}
.box {
    margin: auto
}

</style>