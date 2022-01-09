<style scoped></style>

<template>
    <div class="header">
        <div class="container">
            <h1 class="logo">
                <router-link to="/">
                    <img src="./images/logo.png" alt="" />
                    <!-- <img src="./images/logo-mobile.png" alt="" /> -->
                </router-link>
            </h1>

            <button class="menu_btn">
                <span></span>
            </button>
            <ul class="menu_group">
                <li>
                    <router-link to="/">探索景點</router-link>
                </li>
                <li>
                    <router-link to="/">節慶活動</router-link>
                </li>
                <li>
                    <router-link to="/">品嚐美食</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {};
    },
    computes: {
        
    },
};
</script>
