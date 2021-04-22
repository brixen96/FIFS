<template>
    <div>
        <span class="btn" @click="open">{{'- ' + VideoName}}</span>

        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" >
            <v-card dark class="card">
                <v-toolbar dark color="darken" height="140px">
                    <v-btn class="videoBtn" icon @click="close">
                        <v-icon x-large color="white">mdi-close-circle-outline</v-icon>
                    </v-btn>
                    <v-toolbar-title style="font-size: 24pt">{{VideoName}}</v-toolbar-title>
                </v-toolbar>

                <video width="100%" height="1200" :ref="'mainvideo_' + VideoLink" :src="VideoLink" controls autoplay></video>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ["Cat", "Main", "Video", "Subcat"],

    data() {
        return {
            dialog: false,
            VideoName: "",
            VideoLink: ""
        }
    },

    created() {
        if(this.Subcat) {
            this.VideoLink = "/Media/" + this.Main + "/" + this.Cat + "/" + this.Subcat + "/" + this.Video;
        }
        else {

            this.VideoLink = "/Media/" + this.Main + "/" + this.Cat + "/" + this.Video;
        }
        this.VideoName = this.Video.split(".")[0];

        //this.$refs['mainvideo_' + this.VideoLink].play();
    },

    methods: {
        close: function() {
            this.dialog = false;
            console.log("Stopping video");
            this.$refs['mainvideo_' + this.VideoLink].pause();
        },
        open: function() {
            this.dialog = true;
            if (this.$refs['mainvideo_' + this.VideoLink]) {
                this.$refs['mainvideo_' + this.VideoLink].currentTime = 0;
                this.$refs['mainvideo_' + this.VideoLink].load();
                this.$refs['mainvideo_' + this.VideoLink].play();
                console.log("Restart video");
            }
        }
    },
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