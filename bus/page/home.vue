<style scoped></style>

<template>
    <div class="container">
        <div class="home_serach">
            <h1>
                歡迎來到公車總站 <br />
                今天要搭<span class="line" data-txt="哪班車"></span>呢？
            </h1>
            <button class="normal_btn _search">
                路線搜尋
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                    <path :d="icon_all.search" />
                </svg>
            </button>
        </div>
        <div class="home_pic">
            <img src="../images/bus.jpg" alt="" />
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
    mounted() {},
    methods: {},
};
</script>
