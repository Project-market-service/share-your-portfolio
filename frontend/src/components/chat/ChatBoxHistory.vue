<template>
    <div class="chat-box-history">
        <ul class="chat-box-history__list">
            <li 
                v-for="(message, index) in messages" :key="index" 
                class="chat-box-history__message"
                :class="{ 'chat-box-history__message--login': getUid === message.senderId }">
                <user-image 
                    :id="message.senderId"
                    class="chat-box-history__user-image"></user-image>
                <span>{{ message.content }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import UserImage from '@/components/common/UserImage.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        UserImage,
    },
    props: [
        'messages',
    ],
    computed: {
        ...mapGetters([
            'getUid',
        ])
    },
}
</script>

<style scoped>
.chat-box-history__list {
    height: 420px;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;
}
.chat-box-history__message {
    display: flex;
    align-items: flex-start;
    margin-top: 8px;
    margin-bottom: 8px;
}
.chat-box-history__message span {
    padding: 10px;
    background-color: #dbdbdb;
    border-radius: 10px;
    max-width: 320px;
}
.chat-box-history__message--login {
    flex-direction: row-reverse;
}
.chat-box-history__message--login span {
    margin-right: 6px;
    background-color: #0275d8;
    color: white;
}
.chat-box-history__user-image {
    width: 36px;
    height: 36px;
}
</style>