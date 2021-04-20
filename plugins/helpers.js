import axios from 'axios';
import Vue from 'vue';

Vue.mixin({
    methods:{
        async axiosGet(ApiPath){
            let db = {};
            if(process.server) {
                db = await axios.get("http://localhost:3000/api/" + ApiPath);
            }
            else{
                var url = "http://" + window.location.host + "/api/" + ApiPath;
                console.log(url);
                db = await axios.get(url);
            }
            console.log("Got", db.data);
            return db.data;
        },
    }
});