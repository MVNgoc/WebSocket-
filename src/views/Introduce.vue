<template>  
    <div class="content">
        <section>
            <img src="../assets/img/stars.png" id="stars">
            <img src="../assets/img/moon.png" id="moon">
            <img src="../assets/img/mountains_behind.png" id="mountains_behind">
            <img src="../assets/img/CatmoonLogoBlack.png" id="moon_cat">
            <h2 id="text" :href="goChatroom()">Moon 
            <router-link :to="{name : 'chatroom'}" active-class="active" class="side-btn">
                <span style="color:white">Chat</span>
            </router-link>
            </h2>
            <button id="btn" @click="go">Let's start</button>
            <img src="../assets/img/mountains_front.png" id="mountains_front">
        </section>
    </div>
</template>

<script>
import anime from 'animejs';                      
    export default {
        name:'Introduce-view',
        methods: {
            go() {
                anime({                                      // <-- using imported
                    targets: '#btn',
                    top:'1500px',
                    duration:500,
                    easing:'easeInOutSine'
                });
                anime({                                      // <-- using imported
                    targets: '#stars',
                    top:'0px',
                    duration:1000,
                    easing:'easeInOutSine'
                });
                anime({                                      // <-- using imported
                    targets: '#mountains_behind',
                    bottom:'0px',
                    duration:1000,
                    easing:'easeInOutSine'
                });
                anime({                                      // <-- using imported
                    targets: '#moon',
                    top:'0px',
                    duration:1000,
                    easing:'easeInOutSine'
                });
                anime({                                      // <-- using imported
                    targets: '#moon_cat',
                    top:'11.8%',
                    duration:1000,
                    easing:'easeInOutSine'
                });
                anime({                                      // <-- using imported
                    targets: '#mountains_front',
                    bottom:'0px',
                    duration:1000,
                    easing:'easeInOutSine'
                });
                anime({                                      // <-- using imported
                    targets: '#text',
                    marginRight:'0px',
                    duration:1000,
                    easing:'easeInOutSine'
                });
            },
            goChatroom: function()
            {
                return 'http://localhost:8080/chatroom';
            }
        }
    };
</script>

<style scoped>
@import '../assets/style.css';
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
.content
{
    display: flex;
    font-family: 'Poppins',sans-serif;
    justify-content: center;
    display: flex;
    align-items: center;
    background: linear-gradient(#2b1055,#7597de);
}
section
{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
section img
{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    pointer-events: none;
}
section img#moon
{
    mix-blend-mode: screen;
    top:-100%;
}

section img#moon_cat
{
    width: 8%;
    position: absolute;
    left: 46%;
    top:-100%;
}

section img#stars
{
    top:-100%;
    object-fit: cover;
    height: 100%;
}
section img#mountains_behind
{
    bottom:-100%;
    top: initial;
}
section img#mountains_front
{
    bottom:-100%;
    top: initial;
    z-index: 1000;
}
#text
{
    position: absolute;
    color: #fff;
    font-size: 3vw;
    font-weight: 200;
    margin-right:-2000px;
    top: 250px;
}
#text span
{
    font-weight: 700;

}

#btn {
    align-items: center;
    appearance: none;
    background-image: linear-gradient(to bottom ,#7888f5,#7e8ffc,#cfd4fb);
    border-radius: 12px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395A;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono",monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;
}

#btn:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

#btn:hover {
    opacity: 0.8;
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
}

#btn:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
}

#btnStart
{
    position: absolute;
    bottom: -100%;
    transform: translate(-50%,-50%);
    text-decoration: none;
    display: inline-block;
    padding: 8px 50px;
    background: #fff;
    border-radius:40px ;
    font-size: 1em;
    margin-top:80px;
    color:#2b1055;
    z-index: 10000;
}
</style>