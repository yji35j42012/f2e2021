<style scoped></style>

<template>
    <div class="infoBox result">
        <h3>
            搜尋結果
            <span class="result_count"> 共有 {{ itemCount }} 筆 </span>
        </h3>
        <ul class="result_group">
            <li
                class="result_item"
                v-for="(item, index) in itemContent"
                :key="index"
                @click="itemHandler(item.infoId, item.infoName)"
            >
                <div
                    class="result_pic"
                    :style="{
                        backgroundImage: 'url(' + item.pictureUrl + ')',
                    }"
                ></div>
                <div class="result_txt">
                    <p class="result_txt_title">
                        {{ item.infoName }}
                    </p>
                    <p class="result_txt_address">
                        <i class="icon_add">
                            <svg viewBox="0 0 14 16">
                                <path :d="icon_all.add" />
                            </svg>
                        </i>
                        {{ item.cityName }}
                    </p>
                </div>
            </li>
        </ul>

        <page
            v-if="result.infoMaxPage > 1"
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
            nowPage: "",
            result: {
                infoMaxShow: 20,
                infoNowPage: 1,
                infoMaxPage: 0,
            },
            searchInfo: {
                classType: "",
                city: "",
                info: "",
                date: "",
            },
            info: [],
            showContent: [],
            icon_all: icon_all,
        }
    },
    components: {
        page: httpVueLoader("../components/Page.vue"),
    },
    mounted() {
        this.nowPage = store.state.nowPage
        this.searchInfo.classType = this.$route.params.class
        this.searchInfo.city =
            this.$route.params.city == "全部縣市"
                ? "all"
                : this.$route.params.city
        this.searchInfo.info = this.$route.params.search
        this.searchInfo.date = this.$route.params.date

        this.serials([this.getInfo], this.searchFilter)
    },
    computed: {
        itemCount() {
            let showSearch = store.state.showSearch
            return showSearch.length
        },
        itemContent() {
            let resultData = this.result
            let showSearch = this.showContent
            let showList = []
            let mathPage = Math.ceil(showSearch.length / 20) //頁數
            resultData.infoMaxPage = mathPage
            let startItem =
                (parseInt(resultData.infoNowPage) - 1) *
                parseInt(resultData.infoMaxShow)
            let endItem =
                parseInt(resultData.infoNowPage) *
                parseInt(resultData.infoMaxShow)
            if (mathPage == 1) {
                showList = showSearch
            } else if (endItem > showSearch.length) {
                for (let i = startItem; i < showSearch.length; i++) {
                    showList.push(showSearch[i])
                }
            } else {
                for (let i = startItem; i < endItem; i++) {
                    showList.push(showSearch[i])
                }
            }
            return showList
        },
    },
    methods: {
        serials(tasks, callback) {
            var step = tasks.length
            var result = []
            // // 檢查的邏輯寫在這裡
            function check(r) {
                result.push(r)
                if (result.length === step) {
                    callback()
                }
            }
            tasks.forEach(function(f) {
                f(check)
            })
        },
        getInfo(check) {
            console.log("getInfo")
            this.info = []
            if (this.nowPage == "attractions") {
                store.dispatch("READ_ATTRACTIONS_INFO")
                if (store.state.attractions.info.length == 0) {
                    let time = setTimeout(() => {
                        if (store.state.attractions.info.length == 0) {
                            tiem
                        } else {
                            this.info = store.state.attractions.info
                            check("ok")
                        }
                    }, 1000)
                } else {
                    this.info = store.state.attractions.info
                    check("ok")
                }
            } else if (this.nowPage == "activity") {
                store.dispatch("READ_ACTIVITY_INFO")
                if (store.state.activity.info.length == 0) {
                    let time = setTimeout(() => {
                        if (store.state.activity.info.length == 0) {
                            tiem
                        } else {
                            this.info = store.state.activity.info
                            check("ok")
                        }
                    }, 1000)
                } else {
                    this.info = store.state.activity.info
                    check("ok")
                }
            } else if (this.nowPage == "restaurant") {
                store.dispatch("READ_RESTAURANT_INFO")
                if (store.state.restaurant.info.length == 0) {
                    let time = setTimeout(() => {
                        if (store.state.restaurant.info.length == 0) {
                            tiem
                        } else {
                            this.info = store.state.restaurant.info
                            check("ok")
                        }
                    }, 1000)
                } else {
                    this.info = store.state.restaurant.info
                    check("ok")
                }
            }
        },
        searchFilter() {
            console.log("searchFilter", store.state.attractions.info)
            searchInfo = this.searchInfo
            if (searchInfo.classType) {
                this.info.forEach((item) => {
                    if (item.type) {
                        item.type.indexOf(searchInfo.classType) !== -1
                            ? this.showContent.push(item)
                            : ""
                    }
                })
            }
        },

        classFiliter(str) {
            console.log(str)
        },
        // getInfo(check) {
        //     store.dispatch("READ_ATTRACTIONS_INFO")
        //     console.log("getInfo", store.state.attractions.info.length)
        //     let time = setTimeout(() => {
        //         if (store.state.attractions.info.length == 0) {
        //             time
        //         } else {
        //             console.log("d")

        //             check("B")
        //         }
        //     }, 1000)
        // },
        // filter() {
        //     console.log("filter", store.state.attractions.info)
        //     this.showContent = store.state.attractions.info
        // },

        searchHandler() {},
        itemHandler(id, str) {
            let nowPage = store.state.nowPage
            store.dispatch("ADD_BREADCRUMBS", str ? str : "noname")
            this.$router.push(
                "/" + nowPage + "/" + this.$route.params.search + "/" + id
            )
        },
        changePageHanlder(num) {
            if (
                num == "++" &&
                this.result.infoNowPage !== this.result.infoMaxPage
            ) {
                this.result.infoNowPage = this.result.infoNowPage + 1
            } else if (num == "--" && this.result.infoNowPage !== 1) {
                this.result.infoNowPage = this.result.infoNowPage - 1
            } else if (num !== "++" && num !== "--") {
                this.result.infoNowPage = num
            }
        },
    },
}
</script>
