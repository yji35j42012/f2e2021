<style scoped></style>

<template>
    <div class="container">
        <breadcrumbs></breadcrumbs>
        <Func v-if="showFunc"></Func>
        <router-view></router-view>
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
        func: httpVueLoader("../components/Func.vue"),
        breadcrumbs: httpVueLoader("../components/Breadcrumbs.vue"),
    },
    mounted() {
        console.log('adf');
        store.dispatch("READ_ATTRACTIONS_INFO")
    },
    computed: {
        showFunc() {
            let breadcrumbCount = store.state.breadcrumbs.length
            if (breadcrumbCount == 3) {
                return false
            } else {
                return true
            }
        },
    },
    methods: {        
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
