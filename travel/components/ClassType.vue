<style scoped></style>

<template>
    <div class="infoBox result">
        <h3>{{ title }}</h3>
        <ul class="r2c4">
            <li
                class="r2c4_item"
                v-for="(item, index) in typeItem.class_sort"
                :key="index"
                :style="{
                    backgroundImage:
                        'url(' + typeItem.class_map[item].picUrl[0] + ')',
                }"
                :data-txt="item"
                @click="typeSearch(item)"
            ></li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {}
    },
    mounted() {
        console.log("ClassType")
        store.dispatch("CLEAR_BREADCRUMBS")
        store.dispatch("ADD_BREADCRUMBS", this.getPageName())
    },
    computed: {
        title() {
            let title = "熱門主題"
            if (store.state.nowPage == "restaurant") {
                title = "熱門分類"
            }
            return title
        },
        typeItem() {
            if (store.state.nowPage == "restaurant") {
                return store.state.restaurant.class
            } else if (store.state.nowPage == "attractions") {
                return store.state.attractions.class
            } else if (store.state.nowPage == "activity") {
                return store.state.activity.class
            }
        },
    },
    methods: {
        typeSearch(str) {
            this.$router.push(
                this.$route.fullPath + "/全部縣市/" + str + "/all"
            )
        },
        getPageName() {
            if (store.state.nowPage == "attractions") {
                return "探索景點"
            } else if (store.state.nowPage == "activity") {
                return "節慶活動"
            } else if (store.state.nowPage == "restaurant") {
                return "品嘗美食"
            }
        },
    },
}
</script>
