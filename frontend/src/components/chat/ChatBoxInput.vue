<template>
    <div class="chat-input">
        <input type="text" v-model="message" value="message" @keyup.enter="sendMessage">
        <button @click="sendMessage">Send</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            message: '',
        };
    },
    methods: {
        sendMessage() {
            this.$emit('send', this.message);
            this.message = '';
        }
    }
}
</script>

<style scoped>
.chat-input {
    box-sizing: border-box;
    padding: 20px 10px 0;
    border-top: 1px solid lightgray;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
.chat-input input {
    width: 80%;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 6px 8px;
}
.chat-input input:focus {
    outline: 0;
}
.chat-input button {
    padding: 4px 16px;
}
</style>