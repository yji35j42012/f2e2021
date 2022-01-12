<style scoped></style>

<template>
    <div class="header">
        <h1 class="logo">
            <router-link to="/">
                <img src="./images/logo.png" alt="" />
                <!-- <img src="./images/logo-mobile.png" alt="" /> -->
            </router-link>
        </h1>

        <button
            :class="['menu_btn', menuShow ? 'open' : false]"
            @click="btnHandler"
        >
            <span></span>
        </button>
        <ul class="menu_group">
            <li>
                <router-link to="/search">探索景點</router-link>
            </li>
            <li>
                <router-link to="/attractions">景點內頁</router-link>
            </li>
            <li>
                <router-link to="/activity">節慶活動</router-link>
            </li>
            <li>
                <router-link to="/restaurant">品嚐美食</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
            menuShow: false,
        }
    },
    computes: {},
    methods: {
        btnHandler() {
            this.menuShow = !this.menuShow
        },
    },
}
</script>
