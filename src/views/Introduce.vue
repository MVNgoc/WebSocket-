<template>  
    <div class="content">
        <div class="textBox">
            <h2>It's not just Coffee<br>It's <span>Starbucks</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">Learn more</a>
        </div>
        <div class ='imgBox'>
            <img src="../assets/img/img1.png" class="starbucks">
        </div>
    </div>
    <ul class="thumbs">
        <li><img src="../assets/img/thumb1.png"></li>
        <li><img src="../assets/img/thumb2.png"></li>
        <li><img src="../assets/img/thumb3.png"></li>
    </ul>
    <ul class= "sci">
        <li><a href="#"><img src="../assets/img/facebook.png"></a></li>
        <li><a href="#"><img src="../assets/img/instagram.png"></a></li>
         <li><a href="#"><img src="../assets/img/twitter.png"></a></li>
    </ul>
</template>

<script>
    export default {
        name:'Introduce-view'
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
.content{
    position: relative;
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    box-sizing: border-box;
}
.content .textBox
{
    position: relative;
    max-width: 600px;  
    text-align: left;
}
.content .textBox h2 span
{
    color: #017143;
    font-size: 1.2em;
    font-weight: 900;
}
.content .textBox p
{
    color:#333;
}
.content .textBox a
{
    display: inline-block;
    margin-top: 20px;
    padding: 8px 20px;
    background: #017143;
    color : #fff;
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;

}
.content .imgBox
{
    width: 600px;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px ;
    margin-top: 50px;
}
.content.imgBox img
{
    max-width: 340px;
}
.thumbs {
    position: relative;
    left:50%;
    bottom:5px;
    transform: translateX(-50%);
    display: flex;
    padding-left:35% ;
}
.thumbs li
{
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
    transition: 0.5s;
}
.thumbs li:hover
{
    transform: translateY(-15px);
}
.thumbs li img{
    max-width: 60px;
}
.sci
{
    position: absolute;
    top:50%;
    right:5px;
    transform: translateY(-50%);
    display: block;
    justify-content: center;
    margin:5px ;
    align-items: center;
    flex-direction: column;
}
.sci li
{
    list-style: none;
}
.sci li a
{
    display: inline-block;
    margin: 5px 0;
    transform: scale(0.6);
}
</style>