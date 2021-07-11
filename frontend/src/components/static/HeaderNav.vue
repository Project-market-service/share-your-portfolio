<template>
    <div class="header-nav">
        <router-link to="/">
            <logo></logo>
        </router-link>
        <div class="header-nav__links">
            <div v-if="isLogined"  class="header-nav__link">
                <div class="header-nav__user-image"
                    :class="clickedIconStyle"
                    @click="changeDropboxState()">
                    <user-image 
                        :id="getUid"
                        :isLoading="isImageLoading"
                        class="header-nav__icon pointer"></user-image>
                </div>
                <ul v-if="showDropbox" class="header-nav__drop-box shadow">
                    <li class="pointer"><router-link to="/account">계정 관리</router-link></li>
                    <li class="pointer"><router-link to="/message">채팅</router-link></li>
                    <li class="pointer" @click="doLogout()">로그아웃</li>
                </ul>
            </div>
            <div v-else class="header-nav__link">
                <router-link to="/login" class="header-nav__icon-text pointer">로그인</router-link>
                <span class="header-nav__icon-text pointer">회원가입</span>
            </div>
        </div>        
    </div>
</template>

<script>
import Logo from '@/components/static/Logo.vue';
import UserImage from '@/components/common/UserImage.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'HeaderNav',
    components: {
        Logo,
        UserImage,
    },
    data: function() {
        return  {
            showDropbox: false,
        };
    },
    computed: {
        ...mapGetters([
            'isLogined', 
            'getUid',
            'isImageLoading',
        ]),
        clickedIconStyle() {
            return this.showDropbox ? 'header-nav__icon--clicked' : null;
        },
    },
    watch: {
        '$route' () {
            this.showDropbox = false;
        }
    },
    methods: {
        ...mapActions(['user', 'logout']),
        changeDropboxState() {
            this.showDropbox = !this.showDropbox;
        },
        doLogout() {
            this.logout();
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');

.header-nav {
    padding: 18px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
}
.header-nav__link {
    display: flex;
    align-items: center;
    position: relative;
}
.header-nav__icon-text:hover {
    color: gray;
}
.header-nav__icon {
    font-size: 42px;
}
.header-nav__icon--clicked {
    color: #f5f5f5;
    background-color: black;
    border-radius: 50%;
}
.header-nav__icon-text {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
    margin-left: 8px;
}
.header-nav__drop-box {
    position: absolute;
    top: 52px;
    right: 0;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 6px 0;
    width: 140px;
    text-align: center;
    background-color: white;
}
.header-nav__drop-box li {
    padding: 10px 0;
    border-bottom: 1px solid #dadada;
}
.header-nav__drop-box li:last-child {
    border-bottom: 0;
}
.header-nav__user-image {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-nav__user-image div {
    margin: 0;
}
</style>