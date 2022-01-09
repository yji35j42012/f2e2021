<style scoped></style>

<template>
    <div class="banner">
        <div class="container">
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path :d="icon_all.prev" />
                </svg>
            </button>
            <button class="banner_next">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path :d="icon_all.next" />
                </svg>
            </button>
            <ul class="banner_btn"></ul>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        };
    },
    // computes: {
    //     icon() {
    //         return store.state.icon_all;
    //     },
    // },
};
</script>
