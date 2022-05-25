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
                <p class="chat-room-online-user">{{users.length}}</p>
            </div>
    
            <div class="users-online">
                <div v-for="user in users" :key="user.userId" class="user-online">
                    <img src="../assets/img/dog.png" alt="" class="messImg">
                    <div class="user-name">{{user.userName}}</div>
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
                </div>
    
                <div class="others-mess-area">
                    <div class="messTop">
                        <img src="../assets/img/lion.png" alt="" class="messImg">       
                        <div class="mess-text">
                            Chào bạn   
                        </div>
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
            const users = ref([]);
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
            return { users };
		}
}
</script>

<style>
@import '../assets/style.css'
</style>