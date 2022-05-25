<template>
    <div class="join-container" :style="{
		'background': 'linear-gradient(#2b1055,#7597de)'}">
		<div class="user-information">
			<form class="user-name-form" @submit.prevent="onConnection" v-if="!joined">
				<label class="username" for="input-username">Tên của bạn</label>
				<input type="text" v-model="userName" placeholder="Nhập tên của bạn..." required id="input-username" name="input-username" >
				<button type="submit" id="btn-create-chat-room">Kết Nối</button>
			</form>
			<div class="messenger" v-if="isChoose">
				<div class="messenger-text">
					<div class="user-mess-area">
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

		<div class="chat-rooms" v-if="joined">
			<div  v-for="user in users" :key="user.userId" class="chat-room">
				<div v-if="!user.self">			
					<header class="chat-room-header">
						<h3>{{user.userName}}</h3>
					</header>
					<main class="chat-room-main">
						<form @submit.prevent="onConnection">
							<button type="submit" class="chat-room-btn-join">Nhắn tin</button>
						</form>
					</main>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import socket from "@/plugins/socket"
import { onMounted , ref } from '@vue/runtime-core';
    export default 
	{
        name:'Chatroom-view',
		data() {
			return {
				userName: "",
				userRoom: "",
				joined: false,
				isChoose: false
			}
		},
		methods: {
			onConnection : function(){
				socket.auth = {
					userName : this.userName,
				}

				if(socket.auth.userName == "") {
					alert("Bạn chưa nhập tên!");
					return;
				}
				else
				{
					this.joined = true;
					socket.connect();
					//this.$router.push('/messenger');
				}
			},
		},	
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

<style scoped>
@import '../assets/style.css';
</style>``