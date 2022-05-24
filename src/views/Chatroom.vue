<template>
    <form action="#" class="join-container" :style="{
        'background-image': `url(${require('../assets/img/introduce_background.png')})`, 'background-repeat': 'no-repeat', 'background-size': 'cover'}">
		<div class="user-information">
			<div class="user-name-form">
				<label class="username" for="input-username">Tên của bạn</label>
				<input type="text" placeholder="Nhập tên của bạn..." required id="input-username" name="input-username">
				<button type="submit" id="btn-create-chat-room">Tạo phòng</button>
			</div>
		</div>

		<div class="chat-rooms"> 
			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 1</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">0</p>
					<router-link :to="{name : 'messenger'}">
						<button class="chat-room-btn-join">Tham gia</button>
					</router-link>
				</main>
			</div>

			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 2</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">0</p>
					<router-link :to="{name : 'messenger'}">
						<button class="chat-room-btn-join">Tham gia</button>
					</router-link>
				</main>
			</div>

			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 3</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">0</p>
					<router-link :to="{name : 'messenger'}">
						<button class="chat-room-btn-join">Tham gia</button>
					</router-link>
				</main>
			</div>

			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 4</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">0</p>
					<router-link :to="{name : 'messenger'}">
						<button class="chat-room-btn-join">Tham gia</button>
					</router-link>
				</main>
			</div>
		</div>
	</form>
</template>

<script>
    export default {
        name:'Chatroom-view'
    }
</script>

<style scoped>
@import '../assets/style.css'
</style>