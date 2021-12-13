<template>
    <div>
        <v-expansion-panels class="box" v-model="Open" expandable>
            <v-expansion-panel @click="click" expand>
            <v-expansion-panel-header class="title">
                <span >{{Cat}}</span>
            </v-expansion-panel-header>
                <v-expansion-panel-content>

                <v-expansion-panels>
                    <subcat  v-for="item in Categorys" :key="item" :Main="Main" :Cat="Cat" :Subcat="item" />
                </v-expansion-panels>

                    <v-virtual-scroll :bench="benched" :items="Videos" :item-height="itemHeight">
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
import subcat from '/components/subcat.vue'
export default {
    props: ["Cat", "Main"],

    components: {
        VideoPopup,
        subcat
    },

    data() {
        return {
            Videos: [],
            Categorys: [],
            Comps: [],
            itemHeight: 90,
            benched: 12,
            Open: null
        }
    },

    async created () {
        this.Videos = await this.axiosGet("videos/" + this.Main + "/" + this.Cat);
        this.Categorys = await this.axiosGet("cat/" + this.Main + "/" + this.Cat);
    },

    methods: {
        close: function() {
            this.Open = null;
        },
        click: async function() {
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
    margin: auto;
    max-width: 840px
}

.subcat {
    font-size: 33pt;

}

</style>