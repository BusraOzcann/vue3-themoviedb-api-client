<template >
    <nav class="header">
        <div class="header-icon">
            <img src="@/assets/images/netflix_logo_icon.png" alt="logo">
            
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

            <div class="header-arama">
                <input type="text" placeholder="İçerik, kişi, tür">
                <button>
                    <fa icon="search" />
                </button>
            </div>


            <div class="hesap-tur">Çocuk</div>

            <div class="alarm">
                <fa icon="bell" />
                <div class="alarm-badge">10+</div>
            </div>

            <div class="avatar">
                <img src="@/assets/images/avatars/avatar_geisha_japanese_woman_icon.png" alt="avatar">
                <span class="avatar-icon"></span>
            </div>
        </div>
    </nav>

</template>

<script>
import { onMounted } from 'vue'
// import Jquery from "jquery"

// const $ = Jquery;

export default {
    name: "Header",
    setup(){
        onMounted(() => {
            document.documentElement.dataset.scroll = 0;
            const storeScroll = () => {
                document.documentElement.dataset.scroll = window.scrollY;
            }
            document.addEventListener('scroll', storeScroll);
        })
    }

    
}
</script>
<style lang="scss">
    
</style>

<style lang="scss">
    @import "../assets/styles/variables.scss";

    .header{
        background-color: rgba(20, 20, 20, 0.1) !important;
        height: 70px;
        width: 100%;
        position: fixed;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding-left: 40px;
        padding-right: 40px;
        font-size: 14px;
        transition: 0.5s ease-out;
        z-index: 10000;

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

            .avatar{
                display: flex;
                justify-content: center;
                align-content: center;
                img{
                    height: 35px;
                }

                .avatar-icon{
                    position : relative;
                    background-color: $text-color;
                    width: 10px;
                    height: 5px;
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                    transform : rotate(-180deg);
                    transition: 0.25s ease;
                    margin: auto 5px;
                    -webkit-box-shadow: 0px 5px 32px -7px rgba(0,0,0,0.75);
                    -moz-box-shadow: 0px 5px 32px -7px rgba(0,0,0,0.75);
                    box-shadow: 0px 5px 32px -7px rgba(0,0,0,0.75);
                }

                &:hover{
                    .avatar-icon{
                        transform: rotate(-0deg);
                    }
                }
            }
            .alarm{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 25px;
                position: relative;

                .alarm-badge{
                    position : absolute;
                    background: red;
                    color: $text-color;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    top: -10px;
                    right: -12px;
                    font-size: 10px;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10;
                }

                svg{
                    height: 22px;
                }
            }

            .hesap-tur{
                margin-left: 25px;
            }

            .header-arama{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                border: 1px solid rgba(45, 45, 45, 0);
                transition: 0.5s ease;
                width: 30px;
                height: 30px;
                
                input{
                    background: transparent;
                    position: absolute;
                    z-index: 1;
                    width: 0;
                    transition: 0.01s ease; 
                    border: 0;
                    padding: 0;
                }

                input:focus{
                    border: 0;
                    outline: none;
                    caret-color: white;
                }

                button{
                    position: absolute;
                    z-index: 2;
                    background: transparent;
                    border: 0;
                    color: $text-color;
                    transition: 0.5s ease-in;
                    display: flex;
                    align-self: center;

                    svg{
                        height: 17px;
                    }
                }
            }
            .header-arama:hover{
                width: 200px;
                height: 30px;
                border: 1px solid $text-color;
                background: transparent;
                button{
                    left: 0;
                }
                input{
                    width: 170px;
                    right: 0;
                    transition: 0.5s ease-in; 
                }
            }

        }
    }

    html:not([data-scroll='0']) {
        .header{
            background-color: rgba(20, 20,20, 1) !important;
        }
    }
    
</style>