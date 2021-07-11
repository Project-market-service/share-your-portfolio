<template>
    <div class="chat-member-list">
        <div class="chat-member-list__header">
            <chat-member 
                :id="getUid"
                :username="getUsername"></chat-member>
        </div>
        <div class="chat-member-list__input">
            <input type="text" placeholder="Search">
        </div>
        <ul class="chat-member-list__list">
            <li v-for="(member, index) in members" :key="index">
                <chat-member 
                    :id="member.id"
                    :username="member.username"
                    class="pointer"></chat-member>
            </li>
        </ul>
    </div>
</template>

<script>
import ChatMember from '@/components/chat/ChatMember.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        ChatMember,
    },
    props: [
        'members'
    ],
    computed: {
        ...mapGetters([
            'getUid',
            'getUsername',
        ]),
    }
}
</script>

<style scoped>
.chat-member-list {
    box-sizing: border-box;
    padding: 30px 20px;
}
.chat-member-list__input {
    margin: 24px 0;
}
.chat-member-list__input input {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 6px 10px;
    font-family: inherit;
    font-weight: 400;
}
.chat-member-list__input input:focus {
    outline: 0;
}
.chat-member-list__list li {
    margin-bottom: 15px;
}
.chat-member-list__list li:last-child {
    margin-bottom: 0;
}
</style>