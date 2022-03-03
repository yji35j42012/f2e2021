<style scoped></style>

<template>
    <div class="infoBox result">
        <h3>
            搜尋結果
            <span class="result_count"> 共有 {{ itemCount }} 筆 </span>
        </h3>
        <ul class="result_group" v-if="itemCount !== 0">
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
        <div class="nodata" v-else>
            <div class="nodata_pic"></div>
            <!-- <img src="../images/icon/nodata.svg" alt=""> -->
            <div class="nodata_txt">
                <p>目前查無資料</p>
                <p>請重新查詢</p>
            </div>
        </div>
        <page
            v-if="pageInfo.maxPage > 1"
            :maxpage="pageInfo.maxPage"
            :nowpage="pageInfo.nowPageNum"
            :showpage="pageInfo.show"
            @changepage="changePageHanlder"
        ></page>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            nowPage: "",
            searchInfo: {
                classType: "",
                city: "",
                info: "",
                date: "",
            },
            info: [],
            showContent: [],
            icon_all: icon_all,
            pageInfo: {
                show: [],
                maxPage: 0,
                nowPageNum: 1,
            },
        }
    },
    components: {
        page: httpVueLoader("../components/Page.vue"),
    },
    watch: {
        $route(to, from) {
            this.searchInfo.classType = this.$route.params.class
            this.searchInfo.city =
                this.$route.params.city == "全部縣市"
                    ? ""
                    : this.$route.params.city
            this.searchInfo.info =
                this.$route.params.search == "all"
                    ? ""
                    : this.$route.params.search
            this.searchInfo.date = this.$route.params.date
            this.getInfo()
        },
    },
    mounted() {
        console.log("SearchGroup")
        store.dispatch("SET_LOADING", true)
        this.nowPage = store.state.nowPage
        this.searchInfo.classType = this.$route.params.class
        this.searchInfo.city =
            this.$route.params.city == "全部縣市" ? "" : this.$route.params.city
        this.searchInfo.info =
            this.$route.params.search == "all" ? "" : this.$route.params.search
        this.searchInfo.date = this.$route.params.date
        this.getInfo()

        store.dispatch("CLEAR_BREADCRUMBS")
        store.dispatch("ADD_BREADCRUMBS", this.getPageName())
        if (this.searchInfo.classType !== "all") {
            store.dispatch("ADD_BREADCRUMBS", this.searchInfo.classType)
        } else {
            store.dispatch(
                "ADD_BREADCRUMBS",
                this.searchInfo.city == "" ? "全部縣市" : this.searchInfo.city
            )
        }
    },
    computed: {
        itemCount() {
            let showSearch = this.showContent
            return showSearch.length
        },
        itemContent() {
            console.log('itemContent');            
            this.itemPage()
            let showSearch = this.showContent
            let showList = []
            nowPageNum = this.pageInfo.nowPageNum
            maxPage = this.pageInfo.maxPage
            startItem = nowPageNum * 20 - 19
            endItem = nowPageNum * 20 + 1
            showList = []
            if (maxPage == 1) {
                showList = showSearch
            } else if (endItem > showSearch.length) {
                for (let i = startItem; i < showSearch.length; i++) {
                    showList.push(showSearch[i])
                }
            } else if (maxPage > 1) {
                for (let i = startItem; i < endItem; i++) {
                    showList.push(showSearch[i])
                }
            }
            store.dispatch("SET_LOADING", false)
            return showList
        },
    },
    methods: {
        itemPage() {
            let show = []
            let pageCount = Math.ceil(this.showContent.length / 20) //頁數
            console.log('pageCount',pageCount);
            
            this.pageInfo.maxPage = pageCount //最大頁數
            let halfPage = pageCount / 2

            let nowPageNum = this.pageInfo.nowPageNum
            let eveupPage = Math.ceil(halfPage)

            if (pageCount > 6) {
                if (nowPageNum == 1) {
                    // 第一頁顯示前三號碼＋...跟後二號碼，.on在第一個
                    show.push(nowPageNum)
                    show.push(nowPageNum + 1)
                    show.push(nowPageNum + 2)
                    show.push("more")
                    show.push(pageCount - 1)
                    show.push(pageCount)
                } else if (nowPageNum == pageCount) {
                    // 最後一頁顯示前二號碼＋...跟後三號碼，.on在最後一個
                    show.push(1)
                    show.push(2)
                    show.push("more")
                    show.push(pageCount - 2)
                    show.push(pageCount - 1)
                    show.push(pageCount)
                } else if (
                    halfPage == nowPageNum &&
                    nowPageNum + 4 == pageCount
                ) {
                    // 總頁數的一半等於現在的頁數而且現在的頁數加４等於總頁數
                    // 此判斷發生於總頁數＝８現在頁數＝４
                    // 如果沒有此判斷再第４頁的時候會變成 1,2,...,3,4,5
                    show.push(nowPageNum - 1)
                    show.push(nowPageNum)
                    show.push(nowPageNum + 1)
                    show.push(nowPageNum + 2)
                    show.push(nowPageNum + 3)
                    show.push(nowPageNum + 4)
                } else if (nowPageNum > 1 && nowPageNum < eveupPage) {
                    // 總頁數的一半大於現在的頁數，前面顯示三個頁碼，後面顯示兩個頁碼，
                    // .on在前面三個的中間
                    show.push(nowPageNum - 1)
                    show.push(nowPageNum)
                    show.push(nowPageNum + 1)
                    show.push("more")
                    show.push(pageCount - 1)
                    show.push(pageCount)
                } else if (
                    nowPageNum * 2 > pageCount &&
                    eveupPage == nowPageNum &&
                    nowPageNum + 3 == pageCount
                ) {
                    // 2被的現在頁數大於總頁數而且總頁數的一半等於現在的頁數而且現在頁數加三等於限在頁數
                    show.push(nowPageNum - 2)
                    show.push(nowPageNum - 1)
                    show.push(nowPageNum)
                    show.push(nowPageNum + 1)
                    show.push(nowPageNum + 2)
                    show.push(nowPageNum + 3)
                } else {
                    // 總頁數的一半大於現在的頁數，前面顯示兩個頁碼，後面顯示三個頁碼，
                    // .on在後面三個的中間
                    show.push(1)
                    show.push(2)
                    show.push("more")
                    show.push(nowPageNum - 1)
                    show.push(nowPageNum)
                    show.push(nowPageNum + 1)
                }
            } else {
                for (let i = 0; i < pageCount; i++) {
                    show.push(i + 1)
                }
            }
            this.pageInfo.show = show
        },
        getInfo() {
            searchInfo = this.searchInfo
            this.pageInfo.maxPage = 0
            this.info = []
            this.showContent = []
            let url
            if (this.nowPage == "attractions") {
                if (searchInfo.classType !== "all") {
                    url =
                        "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24filter=contains(Class1%2C'" +
                        searchInfo.classType +
                        "')%20&%24format=JSON"
                } else {
                    url =
                        "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24filter=contains(Address%2C'" +
                        searchInfo.city +
                        "')%20and%20contains(ScenicSpotName%2C'" +
                        searchInfo.info +
                        "')&%24format=JSON"
                }
                axios.get(url).then((res) => {
                    res.data.forEach((item) => {
                        this.showContent.push({
                            infoId: item.ScenicSpotID,
                            cityName: item.Address
                                ? item.Address.substr(0, 3)
                                : "",
                            detail: item.Description,
                            picture: item.Picture,
                            pictureUrl: item.Picture.PictureUrl1
                                ? item.Picture.PictureUrl1
                                : "../images/error.png",
                            infoName: item.ScenicSpotName,
                            type: item.Class1,
                        })
                    })

                    setTimeout(() => {
                        store.dispatch("SET_LOADING", false)
                    }, 1000)
                })
            } else if (this.nowPage == "activity") {
                if (searchInfo.classType !== "all") {
                    url =
                        "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?%24filter=contains(Class1%2C'" +
                        searchInfo.classType +
                        "')&%24format=JSON"
                } else {
                    url =
                        "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?%24filter=contains(Address%2C'" +
                        searchInfo.city +
                        "')%20and%20contains(ActivityName%2C'" +
                        searchInfo.info +
                        "')%20&%24format=JSON"
                }
                axios.get(url).then((res) => {
                    res.data.forEach((item) => {
                        this.showContent.push({
                            infoId: item.ActivityID,
                            cityName: item.Address
                                ? item.Address.substr(0, 3)
                                : "",
                            detail: item.Description,
                            picture: item.Picture,
                            pictureUrl: item.Picture.PictureUrl1
                                ? item.Picture.PictureUrl1
                                : "../images/error.png",
                            infoName: item.ActivityName,
                            type: item.Class1,
                        })
                    })

                    setTimeout(() => {
                        store.dispatch("SET_LOADING", false)
                    }, 1000)
                })
            } else if (this.nowPage == "restaurant") {
                if (searchInfo.classType !== "all") {
                    url =
                        "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24filter=contains(Class%2C'" +
                        searchInfo.classType +
                        "')&%24format=JSON"
                } else {
                    url =
                        "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24filter=contains(Address%2C'" +
                        searchInfo.city +
                        "')%20and%20contains(RestaurantName%2C'" +
                        searchInfo.info +
                        "')&%24format=JSON"
                }
                axios.get(url).then((res) => {
                    res.data.forEach((item) => {
                        this.showContent.push({
                            infoId: item.RestaurantID,
                            cityName: item.Address
                                ? item.Address.substr(0, 3)
                                : "",
                            detail: item.Description,
                            picture: item.Picture,
                            pictureUrl: item.Picture.PictureUrl1
                                ? item.Picture.PictureUrl1
                                : "../images/error.png",
                            infoName: item.RestaurantName,
                            type: item.Class1,
                        })
                    })

                    setTimeout(() => {
                        store.dispatch("SET_LOADING", false)
                    }, 1000)
                })
            }
        },
        searchHandler() {},
        itemHandler(id, str) {
            let nowPage = store.state.nowPage
            this.$router.push(this.$route.fullPath + "/" + id)
        },
        changePageHanlder(num) {
            store.dispatch("SET_LOADING", true)
            if (
                num == "++" &&
                this.pageInfo.nowPageNum !== this.pageInfo.maxPage
            ) {
                this.pageInfo.nowPageNum = this.pageInfo.nowPageNum + 1
            } else if (num == "--" && this.pageInfo.nowPageNum !== 1) {
                this.pageInfo.nowPageNum = this.pageInfo.nowPageNum - 1
            } else if (num !== "++" && num !== "--") {
                this.pageInfo.nowPageNum = num
            }
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
