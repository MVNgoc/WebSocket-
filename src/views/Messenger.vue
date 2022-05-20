<template>
    <div class="mess-container" :style="{
        'background-image': `url(${require('@/img/introduce_background.png')})`, 'background-repeat': 'no-repeat', 'background-size': 'cover'}">
        <div class="messenger">
            <div class="messenger-text">
                <div class="user-mess-area">
                    <div class="messTop">
                        <img src="../img/dog.png" alt="" class="messImg">
    
                        <div class="mess-text">
                            Hí, chào cậu
                        </div>
                    </div>
                    <div class="messBottom">
                        9:50
                    </div>
                </div>
    
                <div class="user-mess-area">
                    <div class="messTop">
                        <img src="../img/dog.png" alt="" class="messImg">
    
                        <div class="mess-text">
                            Cậu tên gì vậy?
                        </div>
                    </div>
                    <div class="messBottom">
                        9:51
                    </div>
                </div>
    
                <div class="user-mess-area">
                    <div class="messTop">
                        <img src="../img/dog.png" alt="" class="messImg">
    
                        <div class="mess-text">
                            Mình tên Ngọc   
                        </div>
                    </div>
                    <div class="messBottom">
                        9:51
                    </div>
                </div>
    
                <div class="others-mess-area">
                    <div class="messTop">
                        <img src="../img/lion.png" alt="" class="messImg">       
                        <div class="mess-text">
                            Chào bạn   
                        </div>
                    </div>
    
    
                    <div class="messBottom">
                        9:51
                    </div>
                </div>
    
                <div class="others-mess-area">
                    <div class="messTop">
                        <img src="../img/lion.png" alt="" class="messImg">       
                        <div class="mess-text">
                            Mình tên Florentino :)   
                        </div>
                    </div>
    
    
                    <div class="messBottom">
                        9:51
                    </div>
                </div>
            </div>
            
            <form class="text-area">
                <div class="text-mess">
                    <textarea maxlength="10000" class="text-input" placeholder="Nhập tin nhắn...." required></textarea>
                </div>
                <div class="text-btn">
                    <button class="text-send">Gửi</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Messenger-view'
}
</script>

<style>
@import '../assets/style.css'
</style>