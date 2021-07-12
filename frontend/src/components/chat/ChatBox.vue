<template>
    <div class="chat-box">
        <chat-box-header></chat-box-header>
        <chat-box-history></chat-box-history>
        <chat-box-input></chat-box-input>
    </div>
</template>

<script>
import ChatBoxHeader from './ChatBoxHeader.vue';
import ChatBoxHistory from './ChatBoxHistory.vue';
import ChatBoxInput from './ChatBoxInput.vue';

export default {
    components: {
        ChatBoxHeader,
        ChatBoxHistory,
        ChatBoxInput,
    },
}
</script>

<style scoped>
.chat-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>