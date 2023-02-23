<template>
    <div class="home">
        <Recommended />

        <div id="slider-area">
            <Slider></Slider>
        </div>
    </div>
</template>

<script>
import Recommended from "../components/Recommended.vue"
import Slider from "../components/Slider.vue"

export default {
    components: { Recommended, Slider }
}
</script>


<style lang="scss">
    @import "../assets/styles/variables.scss";
    
    .home{
        width: 100%;
        padding: 0;
        margin: 0;
        
        #slider-area{
            background: rgba(20,20,20,0);
            background: -moz-linear-gradient(top, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 8%, rgba(20,20,20,1) 100%);
            background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(20,20,20,0)), color-stop(8%, rgba(20,20,20,1)), color-stop(100%, rgba(20,20,20,1)));
            background: -webkit-linear-gradient(top, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 8%, rgba(20,20,20,1) 100%);
            background: -o-linear-gradient(top, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 8%, rgba(20,20,20,1) 100%);
            background: -ms-linear-gradient(top, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 8%, rgba(20,20,20,1) 100%);
            background: linear-gradient(to bottom, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 8%, rgba(20,20,20,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#141414', endColorstr='#141414', GradientType=0 );
            position: relative;
            z-index: 2;
            width: 100%;
            height: 3000px;
            top: -400px;
            display: flex;
        }
    }
</style>