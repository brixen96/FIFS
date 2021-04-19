<template>
    <div>
        <v-row class="headerRow">
            <span class="header">{{$route.params.main}}</span>
            <Nuxt-Link to="/" class="homeBtn">
                <v-icon x-large class="home">mdi-home</v-icon>
            </Nuxt-Link>
        </v-row>
        
        <v-row class="content" v-for="(row, i) in cats" :key="i">
            <v-col style="min-width: 10vw" v-for="(item, i) in row" :key="i">
                <collab :Cat="item" :Main="$route.params.main" @click="callabClick" ref="collabs"/>
            </v-col>
            
        </v-row>
    </div>
</template>

<script>
import idleTimeout from "idle-Timeout";
import collab from "/components/collab";
import techcollegeLogo from "/components/TechcollegeLogo.vue";

export default {
    components: {
        collab,
        techcollegeLogo
    },
    data(){
        return {
            cats: [],
            maxRows: 3,
            idleTime: 0
        }
    },
    
    async created() {
        var cats = await this.axiosGet("cat/" + this.$route.params.main);

        var work = []
        for (let i = 0; i < cats.length; i++) {
            if (i % this.maxRows == 0) {
                this.cats.push(work);
                work = [];
            }
            const element = cats[i];
            work.push(element);

        }
        this.cats.push(work);
        console.log("cats", this.cats);


        const instance = idleTimeout(
            () => {
                console.log("Nothing is happening");
                this.$router.push("/");
            },
            {
                element: document,
                timeout: 1000 * 60 * 60,
                loop: false
            });
    },

    methods: {
        callabClick: function() {
            this.$refs.collabs.forEach(element => {
                element.close();
            });
        }
    }
}
</script>

<style>
.header {
    margin: auto;
    font-size: 56pt;
    font-weight: bold;
    
}
.headerRow {
    height: 10vh; 
    border-bottom-style: solid;
    border-bottom-color: white;
}

.homeBtn {
    background-color: transparent;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1vw;
}

.footer {
    height: 10vh;
}

.home {
    margin-right: 1vw;
}
</style>