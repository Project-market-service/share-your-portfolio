<template>
    <div class="chat-member">
        <user-image :id="id" class="chat-member__image"></user-image>
        <span class="chat-member__name">{{ username }}</span>
    </div>
</template>

<script>
import UserImage from '@/components/common/UserImage.vue';

export default {
    components: {
        UserImage,
    },
    props: [
        'id',
        'username',
    ]
}
</script>

<style scoped>
.chat-member {
    display: flex;
    align-items: center;
}
.chat-member__image {
    margin-right: 14px;
}
.chat-member__name {
    font-weight: 700;
    font-size: 18px;
}
</style>