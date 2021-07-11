<template>
    <div class="container">
        <chat-member-list class="chat-member-list"></chat-member-list>
        <chat-box class="chat-box"></chat-box>
    </div>
</template>

<script>
import ChatMemberList from '@/components/chat/ChatMemberList.vue';
import ChatBox from '@/components/chat/ChatBox.vue';

export default {
    components: {
        ChatMemberList,
        ChatBox,
    }
}
</script>

<style scoped>
.container {
    box-sizing: border-box;
    margin: 60px auto;
    max-width: 950px;
    min-width: 768px;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: row;
}
.chat-member-list {
    width: 240px;
}
.chat-box {
    width: calc(100% - 240px);
}
</style>