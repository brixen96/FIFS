<template>
    <div>
        <span class="btn" @click="btnClick">{{'- ' + VideoName}}</span>

        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" >
            <v-card class="card">
                <v-toolbar dark color="primary" height="140px">
                    <v-btn class="videoBtn" icon dark @click="dialog = false">
                        <v-icon x-large>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title style="font-size: 24pt">{{VideoName}}</v-toolbar-title>
                </v-toolbar>

                <video width="100%" height="1200" ref="mainvideo" autoplay>
                    <source :src="VideoLink" type="video/mp4">
                </video>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ["Cat", "Main", "Video"],

    data() {
        return {
            dialog: false,
            VideoName: "",
            VideoLink: "/Media/" + this.Main + "/" + this.Cat + "/" + this.Video
        }
    },

    created() {
        this.VideoName = this.Video.split(".")[0];
        console.log(this.VideoLink);
    },

    methods: {
        btnClick: function() {
            this.dialog = true;
            console.log("Mounting time");
            //this.$refs.mainvideo.play()
        }
    }

}
</script>

<style scoped>
.card {
    background-color: black;
}

.btn {
    font-size: 33pt !important;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 100%;
    margin-left: 56px;
}

</style>