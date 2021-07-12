<template>
    <div class="chat-box">
        <header class="chat-box__header">
            <chat-member :id="chatId" :username="chatUsername"></chat-member>
        </header>
        <chat-box-history></chat-box-history>
        <chat-box-input></chat-box-input>
    </div>
</template>

<script>
import ChatMember from './ChatMember.vue';
import ChatBoxHistory from './ChatBoxHistory.vue';
import ChatBoxInput from './ChatBoxInput.vue';

export default {
    components: {
        ChatMember,
        ChatBoxHistory,
        ChatBoxInput,
    },
    props: [
        "chatId",
        "chatUsername"
    ],
}
</script>

<style scoped>
.chat-box {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
}
.chat-box__header {
    padding-bottom: 16px;
    border-bottom: 1px solid lightgray;
}
</style>