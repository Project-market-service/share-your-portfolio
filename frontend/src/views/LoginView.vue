<template>
    <div class="wrapper">
        <div class="container">
            <router-link to="/" class="header pointer">
                <logo></logo>
            </router-link>
            <form class="login-form" @submit.prevent>
                <div class="login-form__input-box">
                    <label for="username">아이디</label>
                    <input type="text" id="username" v-model="username" autocomplete="off">
                    <span class="error-message">{{ errorMessage.username }}</span>
                </div>
                <div class="login-form__input-box">
                    <label for="password">패스워드</label>
                    <input type="password" id="password" v-model="password" autocomplete="new-password" @keyup.enter="submitLoginForm()">
                    <span class="error-message">{{ errorMessage.password }}</span>
                    <span class="error-message">{{ errorMessage.login }}</span>
                </div>
                <div class="login-form__btn pointer" @click="submitLoginForm()">로그인</div>
            </form>
            <div class="social-login">
                <div class="social-login__icon pointer">
                    <img src="@/assets/image/naver-icon.png" alt="">
                </div>
                <div class="social-login__icon pointer">
                    <img src="@/assets/image/kakaotalk-icon.png" alt="">
                </div>
                <div class="social-login__icon social-login__icon--small pointer">
                    <img src="@/assets/image/google-icon.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/static/Logo.vue';
import { mapActions } from 'vuex';
import router from '@/router';

export default {
    components: {
        Logo,
    },
    data: function() {
        return {
            username: '',
            password: '',
            errorMessage: {
                username: '',
                password: '',
                login: '',
            },
            canLogin: true,
        };
    },
    methods: {
        ...mapActions(['user', 'login']),
        submitLoginForm() {
            if (this.canLogin) {
                this.clearErrorMessage();

                const isValidUsername = this.checkUsername();
                const isValidPassword = this.checkPassword();

                if (isValidUsername && isValidPassword) {
                    this.canLogin = false;

                    const username = this.username;
                    const password = this.password;

                    this.login({username, password})
                        .then(() => {
                            this.username = '';
                            router.push('/');
                        }).catch(() => {
                            this.errorMessage.login = '가입하지 않은 아이디이거나, 잘못된 비밀번호 입니다.';
                        }).finally(() => {
                            this.password = '';
                            this.canLogin = true;
                        });
                }
            }
        },
        checkUsername() {
            if (this.username.length == 0) {
                this.errorMessage.username = '아이디를 입력해주세요';
                return false;
            }
            return true;
        },
        checkPassword() {
            if (this.password.length == 0) {
                this.errorMessage.password = '비밀번호를 입력해주세요';
                return false;
            }
            return true;
        },
        clearErrorMessage() {
            this.errorMessage.username = '';
            this.errorMessage.password = '';
            this.errorMessage.login = '';
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');

.wrapper {
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header {
    margin: 10px 0 20px;
    display: flex;
    justify-content: center;
}
.login-form__input-box {
    margin-bottom: 16px;
}
.login-form__input-box label {
    display: block;
    margin-bottom: 6px;
}
.login-form__input-box input {
    display: block;
    width: 260px;
    padding: 6px;
    border: 0;
    border-bottom: 1px solid #dbdbdb;
    font-family: 'Noto Sans KR', sans-serif;;
}
.login-form__input-box input:focus {
    outline: 0;
    border-bottom-color: red;
}
.login-form__btn {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background-color: lightgray;
    margin-top: 6px;
}
.social-login {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.social-login__icon {
    display: inline-block;
    width: 36px;
    text-align: center;
}
.social-login__icon img {
    width: 100%;
    object-fit: contain;
}
.social-login__icon--small img {
    width: 80%;
}
.error-message {
    color: red;
    font-size: 12px;
}
</style>