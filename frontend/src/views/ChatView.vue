<template>
    <div class="container">
        <chat-member-list 
            :members="members"
            @selectUser="selectUser"
            class="chat-member-list"></chat-member-list>
        <chat-box 
            :chatId="selectedUser.id"
            :chatUsername="selectedUser.username"
            :messages="messages"
            class="chat-box"></chat-box>
    </div>
</template>

<script>
import ChatMemberList from '@/components/chat/ChatMemberList.vue';
import ChatBox from '@/components/chat/ChatBox.vue';

export default {
    components: {
        ChatMemberList,
        ChatBox,
    },
    data: function() {
        return {
            members: [
                {
                    id: 4,
                    username: 'test04',
                },
                {
                    id: 2,
                    username: 'test02',
                },
            ],
            selectedUser: {
                id: 0,
                username: "",
            },
            messages: [
                {
                    senderId: 2,
                    content: "Hello!",
                    sendDate: new Date(),
                },
                {
                    senderId: 2,
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos obcaecati voluptatum inventore voluptate vel praesentium, dolore repellendus iure veritatis, culpa labore laudantium consequatur facere libero quo aperiam odit neque dolor!",
                    sendDate: new Date(),
                },
                {
                    senderId: 3,
                    content: "Hi!",
                    sendDate: new Date(),
                },
            ],

        };
    },
    methods: {
        selectUser({id, username}) {
            this.selectedUser = {id, username};
        }
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