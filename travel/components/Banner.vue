<style scoped></style>

<template>
    <div class="banner">
        <div class="banner_group">
            <div
                class="banner_item"
                style="background-image: url('../images/banner1.jpg')"
            ></div>
            <div
                class="banner_item"
                style="background-image: url('../images/banner2.jpg')"
            ></div>
        </div>
        <button class="banner_prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path :d="icon_all.arrow" />
            </svg>
        </button>
        <button class="banner_next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path :d="icon_all.arrow" />
            </svg>
        </button>
        <ul class="banner_dot">
            <li class="on"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        }
    },
    // computes: {
    //     icon() {
    //         return store.state.icon_all;
    //     },
    // },
}
</script>
