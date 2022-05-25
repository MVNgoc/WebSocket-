<template>
    <div class="join-container" :style="{
		'background': 'linear-gradient(#2b1055,#7597de)'}">
		<div class="user-information">
			<form class="user-name-form" @submit.prevent="onConnection">
				<label class="username" for="input-username">Tên của bạn</label>
				<input type="text" v-model="userName" placeholder="Nhập tên của bạn..." required id="input-username" name="input-username" >
				<button type="submit" id="btn-create-chat-room">Tạo phòng</button>
			</form>
		</div>

		<div class="chat-rooms"> 
			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 1</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">0</p>
					<form @submit.prevent="onConnection">
						<button type="submit" class="chat-room-btn-join">Tham gia</button>
					</form>
				</main>
			</div>
			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 2</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">0</p>
					<form @submit.prevent="onConnection">
						<button type="submit"  class="chat-room-btn-join">Tham gia</button>
					</form>
				</main>
			</div>

			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 3</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">0</p>
					<form @submit.prevent="onConnection">
						<button type="submit"  class="chat-room-btn-join">Tham gia</button>
					</form>
				</main>
			</div>

			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 4</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">0</p>
					<form @submit.prevent="onConnection">
						<button type="submit"  class="chat-room-btn-join">Tham gia</button>
					</form>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
import socket from "@/plugins/socket"
import { onMounted,ref } from '@vue/runtime-core';
    export default {
        name:'Chatroom-view',
		data() {
			return {
				userName: "",
				joined: false,
			}
		},
		methods: {
			join() {
				if(this.currentUser == "") {
					alert("Bạn chưa nhập tên!");
					return;
				}
				else{
					this.joined = true;
				}
				console.log(this.currentUser);
			},
			onConnection : function(){
				socket.auth = {
					userName : this.userName
				}

				if(socket.auth.userName == "") {
					alert("Bạn chưa nhập tên!");
					return;
				}
				else
				{
					this.joined = true;
					socket.connect();
				}
			}
		},
    
		setup(){
			const users = ref ([])
			onMounted(() => {
				socket.on("getUsers",(data) => {
					data.forEach( user => {
						user.self = user.useId === socket.id					
					});
					
					users.value = data.sort((a,b) => {
						if (a.self) return -1;
						if (b.self) return 1;
						if (a.userName < b.userName) return -1;
						return a.userName > b.userName ? 1 : 0;
					})
				})
				console.log('users:',users.value)
			})	
		}	
	}
</script>

<style scoped>
@import '../assets/style.css';
</style>``