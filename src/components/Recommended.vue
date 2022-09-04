<template>
    <div id="home-entry">
        <div class="image">
            <img :src="originalImagePath + popularOne.backdrop_path" alt="">
        </div>
    </div>
</template>


<script>
import filmService from "../services/Film/FilmService";

import { onMounted, ref } from "vue";

export default {

    setup(){
        const popularOne = ref({});
        const originalImagePath = filmService.originalImagePath;

        onMounted(() => {
            getPopular();
        })

        async function getPopular(){
            try{
                let response = await filmService.getPopular(1)
                
                let random = Math.floor(Math.random() *  response.data.results.length);
                popularOne.value = response.data.results[random];
                console.log("Get response => ", popularOne.value);
            }catch(e){
                console.log("catch : ", e)
            }
        }

        return {popularOne, originalImagePath}
    }
}
</script>


<style lang="scss"> 
    // @import "../assets/styles/variable.scss";
    #home-entry{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        display: flex;

        .image{
            overflow: hidden;
            img{
                width: 100vw;
            }
        }
    }
</style>