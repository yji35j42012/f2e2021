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
            result: {
                infoMaxShow: 20,
                infoNowPage: 1,
                infoMaxPage: 0,
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
        let nowPage = store.state.nowPage
        let classType = this.$route.params.class
        let city =
            this.$route.params.city == "全部縣市"
                ? "all"
                : this.$route.params.city
        let info = this.$route.params.search
        let date = this.$route.params.date

        if (nowPage == "attractions") {
            if (store.state.attractions.info.length == 0) {
                store.dispatch("READ_ATTRACTIONS_INFO")
                this.info = store.state.attractions.info
            } else {
                this.info = store.state.attractions.info
            }
        } else if (nowPage == "activity") {
            if (store.state.activity.info.length == 0) {
                store.dispatch("READ_ACTIVITY_INFO")
                this.info = store.state.attractions.info
            } else {
                this.info = store.state.attractions.info
            }
        } else if (nowPage == "restaurant") {
            if (store.state.restaurant.info.length == 0) {
                store.dispatch("READ_RESTAURANT_INFO")
                this.info = store.state.attractions.info
            } else {
                this.info = store.state.attractions.info
            }
        }

        console.log("classType", classType)
        console.log("city", city)
        console.log("info", info)
        console.log("date", date)

        if (classType) {
            this.classFiliter(classType)
        }

        // let class = this.$route.params.class;

        // if (nowPage == "attractions") {
        //     var content = store.state.attractions.info
        //     console.log("content", content.length)
        //     if (city == "all" && info == "all") {
        //         list = content
        //     }
        // } else if (nowPage == "activity") {
        //     let content = store.state.activity.info
        //     console.log("content", content)
        //     if (city == "all" && info == "all") {
        //         list = content
        //     }
        // } else if (nowPage == "restaurant") {
        //     let content = store.state.restaurant.info
        //     console.log("content", content)
        //     if (city == "all" && info == "all") {
        //         list = content
        //     }
        // }
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
