<template>
    <div>
        <v-row class="headerRow">
            <span class="header">{{$route.params.main}}</span>
            <Nuxt-Link to="/" class="homeBtn">
                <v-icon x-large>mdi-home</v-icon>
            </Nuxt-Link>
        </v-row>
        
        <v-row class="content" v-for="(row, i) in cats" :key="i">
            <v-col style="min-width: 10vw" v-for="(item, i) in row" :key="i">
                <collab :Cat="item" :Main="$route.params.main"/>
            </v-col>
            
        </v-row>
        <v-row class="footer">
            <techcollegeLogo class="TCLogo"></techcollegeLogo>
        </v-row>
    </div>
</template>

<script>
import collab from "/components/collab";
import techcollegeLogo from "/components/TechcollegeLogo.vue";

export default {
    components: {
        collab,
        techcollegeLogo
    },
    data(){
        return {
        cats: []
        }
    },
    
    async created() {
        var cats = await this.axiosGet("cat/" + this.$route.params.main);

        var work = []
        for (let i = 0; i < cats.length; i++) {
            if (i % 2 == 0) {
                this.cats.push(work);
                work = [];
            }
            const element = cats[i];
            work.push(element);

        }
        this.cats.push(work);
        console.log("cats", this.cats);
    },
}
</script>

<style>
.header {
    margin: auto;
    font-size: 3rem;
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

.content {
}

.footer {
    height: 10vh;
}
.TCLogo {
    margin: auto;
    width: 10vw;
    height: auto;
}
</style>