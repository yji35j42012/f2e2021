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
            resultShow: false,
            filterCity: "",
            filterCityName: "",
            filterInfo: "",
            result: {
                count: 0,
                info: [],
                infoMaxShow: 20,
                infoNowPage: 1,
                infoMaxPage: 0,
            },
        }
    },
    components: {
        func: httpVueLoader("../components/Func.vue"),
        breadcrumbs: httpVueLoader("../components/Breadcrumbs.vue"),
        searchgroup: httpVueLoader("../components/SearchGroup.vue"),
        page: httpVueLoader("../components/Page.vue"),
    },
    mounted() {
        store.dispatch("READ_RESTAURANT_INFO")
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
    },
}
</script>
