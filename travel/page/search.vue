<style scoped></style>

<template>
    <div class="container">
        <ul class="breadcrumbs">
            <li>首頁</li>
            <li>探索景點</li>
        </ul>
        <Func></Func>
        <div class="infoBox">
            <h3>熱門主題</h3>
            <ul class="r2c4">
                <li
                    class="r2c4_item"
                    style="background-image:url('../images/search1.jpg')"
                >
                    自然風景類
                </li>
                <li
                    class="r2c4_item"
                    style="background-image:url('../images/search1.jpg')"
                >
                    觀光工廠類
                </li>
                <li
                    class="r2c4_item"
                    style="background-image:url('../images/search1.jpg')"
                >
                    觀光工廠類
                </li>
                <li
                    class="r2c4_item"
                    style="background-image:url('../images/search1.jpg')"
                >
                    觀光工廠類
                </li>
                <li
                    class="r2c4_item"
                    style="background-image:url('../images/search1.jpg')"
                >
                    觀光工廠類
                </li>
                <li
                    class="r2c4_item"
                    style="background-image:url('../images/search1.jpg')"
                >
                    觀光工廠類
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        }
    },
    components: {
        func: httpVueLoader('../components/Func.vue'),
    },
    mounted() {},
    computed: {},
    methods: {},
}
</script>
