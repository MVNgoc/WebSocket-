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
    export default 
	{
        name:'Chatroom-view',
		data() {
			return {
				userName: "",
				joined: false,
			}
		},
		methods: {
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
					this.$router.push('/messenger');
				}
			},
		},	
	}
</script>

<style scoped>
@import '../assets/style.css';
</style>``