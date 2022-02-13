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
        };
    },
    components: {
        func: httpVueLoader("../components/Func.vue"),
        breadcrumbs: httpVueLoader("../components/Breadcrumbs.vue"),
        searchgroup: httpVueLoader("../components/SearchGroup.vue"),
        page: httpVueLoader("../components/Page.vue"),
        // searchgroup: httpVueLoader("../components/SearchGroup.vue"),
    },
    mounted() {
        console.log("restaurant_outside");
        store.dispatch("READ_RESTAURANT_INFO");
        store.dispatch("CLEAR_BREADCRUMBS");
        store.dispatch("ADD_BREADCRUMBS", "品嚐美食");
    },
    computed: {
        restaurant_sort() {
            return store.state.restaurant.class;
        },
        restaurant_info() {
            let showList = [];
            let info = this.result;
            let mathPage = Math.ceil(info.info.length / 20); //頁數
            info.infoMaxPage = mathPage;
            startItem =
                (parseInt(info.infoNowPage) - 1) * parseInt(info.infoMaxShow);
            endItem = parseInt(info.infoNowPage) * parseInt(info.infoMaxShow);

            if (mathPage == 1) {
                showList = info.info;
            } else if (endItem > info.count) {
                for (let i = startItem; i < info.count; i++) {
                    showList.push(info.info[i]);
                }
            } else {
                for (let i = startItem; i < endItem; i++) {
                    showList.push(info.info[i]);
                }
            }
            return showList;
        },
        showFunc() {
            let breadcrumbCount = store.state.breadcrumbs.length;
            if (breadcrumbCount == 3) {
                return false;
            } else {
                return true;
            }
        },
    },
    methods: {
        changePageHanlder(num) {
            if (
                num == "++" &&
                this.result.infoNowPage !== this.result.infoMaxPage
            ) {
                this.result.infoNowPage = this.result.infoNowPage + 1;
            } else if (num == "--" && this.result.infoNowPage !== 1) {
                this.result.infoNowPage = this.result.infoNowPage - 1;
            } else if (num !== "++" && num !== "--") {
                this.result.infoNowPage = num;
            }
        },
        clearSearchHandler() {
            this.resultShow = false;
        },
        returnIdHandler(id) {
            this.resultShow = false;
            let nowPage = store.state.nowPage;
            if (nowPage == "restaurant") {
                this.$router.push("/restaurant/" + id);
            }
        },
    },
};
</script>
