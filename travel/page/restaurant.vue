<style scoped></style>

<template>
    <div class="container">
        <breadcrumbs @clearsearch="clearSearchHandler"></breadcrumbs>
        <Func @search="resultHandler"></Func>
        <div class="infoBox" v-if="!resultShow">
            <h3>熱門主題</h3>
            <ul class="r2c4">
                <li
                    class="r2c4_item"
                    v-for="(item, index) in restaurant_sort.class_sort"
                    :key="index"
                    :data-txt="item"
                    :style="{
                        backgroundImage:
                            'url(' +
                            restaurant_sort.class_map[item].picUrl[0] +
                            ')',
                    }"
                    @click="typeSearch(item)"
                ></li>
            </ul>
        </div>

        <searchgroup
            v-if="resultShow"
            :itemcount="result.count"
            :itemobj="restaurant_info"
        ></searchgroup>
        <page
            v-if="resultShow"
            :maxpage="result.infoMaxPage"
            :nowpage="result.infoNowPage"
            @changepage="changePageHanlder"
        ></page>
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
        store.dispatch("READ_RESTAURANT_INFO");
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
    },
    methods: {
        changePageHanlder(num) {
            console.log(num);
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
        typeSearch(str) {
            this.resultShow = true;
            let info = store.state.restaurant.info;
            this.result.info = [];
            this.result.count = 0;

            info.forEach((item) => {
                if (item.type) {
                    item.type.indexOf(str) !== -1
                        ? this.result.info.push(item)
                        : "";
                }
            });
            this.result.count = this.result.info.length;
            store.dispatch("ADD_BREADCRUMBS", str);
        },
        resultHandler(val) {
            this.resultShow = true;
            let info = store.state.restaurant.info;
            this.result.info = [];
            this.result.count = 0;

            if (val.city == "all" && val.info == "") {
                this.result.info = info;
            } else if (val.city !== "all" && val.info == "") {
                info.forEach((item) => {
                    item.cityName.indexOf(val.cityName) !== -1
                        ? this.result.info.push(item)
                        : "";
                });
            } else if (val.city == "all" && val.info !== "") {
                info.forEach((item) => {
                    item.detail.indexOf(val.info) !== -1 ||
                    item.restaurantName.indexOf(val.info) !== -1
                        ? this.result.info.push(item)
                        : "";
                });
            } else if (val.city !== "all" && val.info !== "") {
                info.forEach((item) => {
                    if (item.cityName.indexOf(val.cityName) !== -1) {
                        item.detail.indexOf(val.info) !== -1 ||
                        item.restaurantName.indexOf(val.info) !== -1
                            ? this.result.info.push(item)
                            : "";
                    }
                });
            }
            this.result.count = this.result.info.length;
        },
    },
};
</script>
