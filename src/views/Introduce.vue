<template>  
    <div class="introduce" :style="{
        'background-image': `url(${require('@/img/introduce_background.png')})`, 'background-repeat': 'no-repeat', 'background-size': 'cover'}">
        <h1>Introduce</h1>
    </div>
</template>

<script>
    export default {
        name:'Introduce-view'
    }
</script>

<style scoped>
.introduce {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>