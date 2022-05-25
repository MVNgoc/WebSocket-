<template>
    <div class="mess-container" :style="{
        'background': 'linear-gradient(#2b1055,#7597de)'}">
        
        <div class="info-room-container">
            <router-link :to="{name : 'chatroom'}">
				<img src="../assets/img/back-icon.png" alt="Exit" class="back-icon">
			</router-link>
    
            <div class="info-room">
                <h3 class="chat-room-name">Phòng chat 1</h3> 
                <p >Online</p>
                <p class="chat-room-online-user">5</p>
            </div>
            
            <div class="users-online">
                <div class="user-online">
                    <img src="../assets/img/dog.png" alt="" class="messImg">
                    <div class="user-name">Trần Văn A</div>
                </div>
            </div>
        </div>

        <div class="messenger">
            <div class="messenger-text">
                <div class="user-mess-area">
                    <div class="mes-name">
                        Nguyễn Văn A
                    </div>
                    <div class="messTop">
                        <img src="../assets/img/dog.png" alt="" class="messImg">
    
                        <div class="mess-text">
                            Hí, chào cậu
                        </div>
                    </div>
                    <div class="messBottom">
                        9:50
                    </div>
                </div>
    
                <div class="user-mess-area">
                    <div class="mes-name">
                        Nguyễn Văn A
                    </div>
                    <div class="messTop">
                        <img src="../assets/img/dog.png" alt="" class="messImg">
    
                        <div class="mess-text">
                            Cậu tên gì vậy?
                        </div>
                    </div>
                    <div class="messBottom">
                        9:51
                    </div>
                </div>
    
                <div class="user-mess-area">
                    <div class="mes-name">
                        Nguyễn Văn A
                    </div>
                    <div class="messTop">
                        <img src="../assets/img/dog.png" alt="" class="messImg">
    
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
                        <img src="../assets/img/lion.png" alt="" class="messImg">       
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
                        <img src="../assets/img/lion.png" alt="" class="messImg">       
                        <div class="mess-text">
                            Mình tên Florentino :)   
                        </div>
                    </div>
    
    
                    <div class="messBottom">
                        9:51
                    </div>
                </div>

                <div class="others-mess-area">
                    <div class="messTop">
                        <img src="../assets/img/lion.png" alt="" class="messImg">       
                        <div class="mess-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis 
                            hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. 
                        </div>
                    </div>
    
    
                    <div class="messBottom">
                        9:51
                    </div>
                </div>

                <div class="user-mess-area">
                    <div class="mes-name">
                        Nguyễn Văn A
                    </div>
                    <div class="messTop">
                        <img src="../assets/img/dog.png" alt="" class="messImg">
    
                        <div class="mess-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis 
                            hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.    
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
import socket from "@/plugins/socket"
import { onMounted , ref } from '@vue/runtime-core';
export default {
    name: 'Messenger-view',
    setup(){
			const users = ref ([]);
			onMounted(() => {
				socket.on("getUsers",(data) => {
					data.forEach( user => {
						user.self = user.userId === socket.id					
					})
					
					// sort
					users.value = data.sort((a,b) => {
						if (a.self) return -1;
						if (b.self) return 1;
						if (a.userName < b.userName) return -1;
						return a.userName > b.userName ? 1 : 0;
					})
                    
				console.log('users:',users.value)
			})	
				socket.on("userJustConnected",(data) =>{
					users.value.push(data)
					console.log("user just connected:", users.value)
				})
			})
		}
}
</script>

<style>
@import '../assets/style.css'
</style>