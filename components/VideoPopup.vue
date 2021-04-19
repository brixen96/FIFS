<template>
    <div>
        <span class="btn" @click="dialog = true">{{'- ' + VideoName}}</span>

        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" >
            <v-card dark class="card">
                <v-toolbar dark color="darken" height="140px">
                    <v-btn class="videoBtn" icon @click="dialog = false">
                        <v-icon x-large color="white">mdi-close-circle-outline</v-icon>
                    </v-btn>
                    <v-toolbar-title style="font-size: 24pt">{{VideoName}}</v-toolbar-title>
                </v-toolbar>

                <video width="100%" height="1200" ref="mainvideo" controls autoplay>
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
    }
}
</script>

<style scoped>
.card {
    background-color: black !important;
}

.btn {
    font-size: 33pt !important;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 100%;
    margin-left: 56px;
}

</style>