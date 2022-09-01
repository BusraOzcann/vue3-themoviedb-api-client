<template >
    <nav class="header">
        <div class="header-icon">
            <img src="../../assets/images/netflix_logo_icon.png" alt="logo">
            
        </div>
        <ul>
            <li>Ana Sayfa</li>
            <li>Diziler</li>
            <li>Filmler</li>
            <li>Yeni ve Popüler</li>
            <li>Listem</li>
            <li>Dile Göre Göz At</li>
        </ul>
        <div class="header-left-container">
            <div class="avatar">
                <img src="../../assets/images/avatars/avatar_geisha_japanese_woman_icon.png" alt="avatar">
                <fa icon="sort-up" />
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    name: "Header"
}
</script>
<style lang="scss">
    
</style>

<style lang="scss">
    @import "../../assets/styles/variables.scss";

    .header{
        background-color: $primary-color;
        height: 70px;
        width: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding-left: 40px;
        padding-right: 40px;
        font-size: 14px;
        transition: 0.3s ease-out;

        .header-icon{
            position: relative;
            display: flex;
            align-items: center;
            height: 100%;
            width: 150px;
            
            img{
                height: 120px !important;
                position: absolute;
                cursor: pointer;
            }
        }
        ul{
            list-style-type: none;
            height: 100%;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            
            li{
                display: inline;
                margin-right: 24px;
                cursor: pointer;
                transition: 0.2s ease;
                color: $text-color;
            }
            li:hover{
                color: $text-color-hovered;
                transition: 0.4s ease-out;
            }
        }

        .header-left-container{
            display: flex;
            align-items: center;
            justify-content: end;
            padding-right: 5px;
            margin-left: auto;
            height: 100%;
            width: 500px;
            color: $text-color;
        }

        .avatar{

            img{
                height: 40px;
            }
        }
    }
</style>