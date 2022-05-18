<template>
    <div class="join-container">
		<div class="user-information">
			<div class="user-name-form">
				<label class="username" for="input-username">Tên của bạn</label>
				<input type="text" placeholder="Nhập tên của bạn..." required id="input-username" name="input-username">
				<button id="btn-create-chat-room">Tạo phòng</button>
			</div>
		</div>

		<div class="chat-rooms"> 
			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 1</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">5</p>
					<button class="chat-room-btn-join">Tham gia</button>
				</main>
			</div>

			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 2</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">5</p>
					<button class="chat-room-btn-join">Tham gia</button>
				</main>
			</div>

			<div class="chat-room">
				<header class="chat-room-header">
					<h3>Phòng chat 3</h3>
				</header>
				<main class="chat-room-main">
					<p>Online</p>
					<p class="chat-room-online-user">5</p>
					<button class="chat-room-btn-join">Tham gia</button>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name:'Message-view'
    }
</script>

<style scoped>
@import '../assets/style.css'
</style>