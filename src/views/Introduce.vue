<template>  
    <div class="content">
        <section>
        <img src="../assets/img/stars.png" id="stars">
        <img src="../assets/img/moon.png" id="moon">
        <img src="../assets/img/mountains_behind.png" id="mountains_behind">
        <h2 id="text">Online<span>chat</span></h2>
        <a href="#" id="btn">Start Chat</a>
        <a href="#" id="btn" @click="go">Let's start</a>
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
            }
        }
    };
</script>

<style scoped>
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
}
#text span
{
    font-weight: 700;

}
#btn
{
    position: absolute;
    top: 50%;
    left: 50%;
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