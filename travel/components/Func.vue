<style scoped></style>

<template>
    <div class="func">
        <label
            class="normal_sel _area open"
            v-if="page == 'home'"
            @click="selectHandler"
        >
            <span>{{ nowSearch }}</span>
            <i class="icon_arrow">
                <svg viewBox="0 0 16 16">
                    <path :d="icon_all.arrow" />
                </svg>
            </i>
            <ul :class="['normal_sel_group', selectShow ? 'open' : '']">
                <li
                    v-for="(item, index) in searchList"
                    :key="index"
                    @click="searchChangeHandler(item)"
                >
                    {{ item }}
                </li>
            </ul>
        </label>
        <label class="normal_sel _city open" v-else @click="selectHandler">
            <span>{{ choseCity }}</span>
            <i class="icon_arrow">
                <svg viewBox="0 0 16 16">
                    <path :d="icon_all.arrow" />
                </svg>
            </i>
            <ul :class="['normal_sel_group', selectShow ? 'open' : '']">
                <li @click="changeCity('全部縣市', 'all')">全部縣市</li>
                <li
                    v-for="(item, index) in city"
                    :key="index"
                    @click="changeCity(item.CityName, item.City)"
                >
                    {{ item.CityName }}
                </li>
            </ul>
        </label>
        <label class="normal_date" v-if="page == 'activity'">
            選擇日期
            <i class="icon_calendar">
                <svg viewBox="0 0 12 14">
                    <path :d="icon_all.calendar" />
                </svg>
            </i>
        </label>
        <label class="normal_inp">
            <input
                type="text"
                v-if="page == 'attractions' || page == 'home'"
                placeholder="你想去哪裡？請輸入關鍵字"
                v-model="searchInfo"
            />
            <input
                type="text"
                v-if="page == 'activity'"
                placeholder="想找有趣的？請輸入關鍵字"
                v-model="searchInfo"
            />
            <input
                type="text"
                v-if="page == 'restaurant'"
                placeholder="你想吃什麼？請輸入關鍵字"
                v-model="searchInfo"
            />
        </label>
        <button class="normal_btn _search" @click="searchHandler">
            <i class="icon_search">
                <svg viewBox="0 0 19 16">
                    <path :d="icon_all.search" />
                </svg>
            </i>
            搜 尋
        </button>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
            selectShow: false,
            nowSearch: "探索景點",
            searchList: ["探索景點", "節慶活動", "品嘗美食"],
            choseCity: "全部縣市",
            searchCity: "all",
            searchInfo: "",
            searchDate: "all",
        }
    },

    computed: {
        page() {
            return store.state.nowPage
        },
        city() {
            return store.state.city
        },
    },
    methods: {
        selectHandler() {
            this.selectShow = !this.selectShow
        },
        searchHandler() {
            let nowPage = store.state.nowPage
            let city = this.searchCity == "all" ? "全部縣市" : his.searchCity
            let info = this.searchInfo == "" ? "all" : this.searchInfo
            let date = this.searchDate
            let nowSearch = this.nowSearch

            if (nowPage == "attractions" || nowSearch == "探索景點") {
                this.$router.push("/attractions/" + city + "/" + info)
            } else if (nowPage == "activity" || nowSearch == "節慶活動") {
                this.$router.push("/activity/" + city + "/" + date + "/" + info)
            } else if (nowPage == "restaurant" || nowSearch == "品嘗美食") {
                this.$router.push("/restaurant/" + city + "/" + info)
            }

            // else if (nowPage == "home") {
            //     console.log("restaurant", "/restaurant/" + city + "/" + info)
            // }

            // let nowPage = store.state.nowPage
            // let info = ""
            // let list = []

            // if (nowPage == "restaurant" || this.nowSearch == "品嘗美食") {
            //     info = store.state.restaurant.info
            // } else if (nowPage == "activity" || this.nowSearch == "節慶活動") {
            //     info = store.state.activity.info
            // } else if (
            //     nowPage == "attractions" ||
            //     this.nowSearch == "探索景點"
            // ) {
            //     info = store.state.attractions.info
            // }

            // if (nowPage == "home") {
            //     if (this.nowSearch == "探索景點") {
            //         if (this.searchInfo == "") {
            //             this.$router.push("/attractions")
            //             store.dispatch("ADD_BREADCRUMBS", this.nowSearch)
            //         } else {
            //             info.forEach((item) => {
            //                 item.detail.indexOf(this.searchInfo) !== -1 ||
            //                 item.infoName.indexOf(this.searchInfo) !== -1
            //                     ? list.push(item)
            //                     : ""
            //             })
            //             store.dispatch("ADD_BREADCRUMBS", this.nowSearch)
            //             store.dispatch("ADD_BREADCRUMBS", "全部縣市")
            //             this.$router.push("/attractions/全部縣市")
            //         }
            //     } else if (this.nowSearch == "節慶活動") {
            //         if (this.searchInfo == "") {
            //             this.$router.push("/activity")
            //             store.dispatch("ADD_BREADCRUMBS", this.nowSearch)
            //         } else {
            //             info.forEach((item) => {
            //                 item.detail.indexOf(this.searchInfo) !== -1 ||
            //                 item.infoName.indexOf(this.searchInfo) !== -1
            //                     ? list.push(item)
            //                     : ""
            //             })
            //             store.dispatch("ADD_BREADCRUMBS", this.nowSearch)
            //             store.dispatch("ADD_BREADCRUMBS", "全部縣市")
            //             this.$router.push("/activity/全部縣市")
            //         }
            //     } else if (this.nowSearch == "品嘗美食") {
            //         if (this.searchInfo == "") {
            //             store.dispatch("ADD_BREADCRUMBS", this.nowSearch)
            //             this.$router.push("/restaurant/")
            //         } else {
            //             info.forEach((item) => {
            //                 item.detail.indexOf(this.searchInfo) !== -1 ||
            //                 item.infoName.indexOf(this.searchInfo) !== -1
            //                     ? list.push(item)
            //                     : ""
            //             })
            //             store.dispatch("CLEAR_BREADCRUMBS")
            //             store.dispatch("ADD_BREADCRUMBS", this.nowSearch)
            //             store.dispatch("ADD_BREADCRUMBS", "全部縣市")
            //             this.$router.push("/restaurant/全部縣市")
            //         }
            //     }
            // } else {
            //     store.dispatch("SET_SEARCHITEM", {
            //         type: "func",
            //         funcSearch_city: this.searchCity,
            //         funcSearch_cityName: this.choseCity,
            //         funcSearch_info: this.searchInfo,
            //     })
            //     if (store.state.breadcrumbs.length > 1) {
            //         store.dispatch("DEL_BREADCRUMBS")
            //         store.dispatch("ADD_BREADCRUMBS", this.choseCity)
            //     } else {
            //         store.dispatch("ADD_BREADCRUMBS", this.choseCity)
            //     }
            //     this.$router.push("/" + nowPage + "/" + this.choseCity)

            //     if (this.searchCity == "all" && this.searchInfo == "") {
            //         list = info
            //     } else if (this.searchCity !== "all" && this.searchInfo == "") {
            //         info.forEach((item) => {
            //             item.cityName.indexOf(this.choseCity) !== -1
            //                 ? list.push(item)
            //                 : ""
            //         })
            //     } else if (this.searchCity == "all" && this.searchInfo !== "") {
            //         info.forEach((item) => {
            //             item.detail.indexOf(this.searchInfo) !== -1 ||
            //             item.infoName.indexOf(this.searchInfo) !== -1
            //                 ? list.push(item)
            //                 : ""
            //         })
            //     } else if (
            //         this.searchCity !== "all" &&
            //         this.searchInfo !== ""
            //     ) {
            //         info.forEach((item) => {
            //             if (item.cityName.indexOf(this.choseCity) !== -1) {
            //                 item.detail.indexOf(this.searchInfo) !== -1 ||
            //                 item.infoName.indexOf(this.searchInfo) !== -1
            //                     ? list.push(item)
            //                     : ""
            //             }
            //         })
            //     }
            // }
            // store.dispatch("SET_SHOWSEARCH", list)
        },
        getInfo() {
            store.dispatch("READ_ATTRACTIONS_INFO")
        },
        goPage() {
            let city = this.searchCity == "all" ? "全部縣市" : his.searchCity
            let info = this.searchInfo == "" ? "all" : this.searchInfo
            this.$router.push("/attractions/" + city + "/" + info)
        },
        searchChangeHandler(str) {
            this.nowSearch = str
        },
        changeCity(str, str1) {
            this.choseCity = str
            this.searchCity = str1
        },
    },
}
</script>
