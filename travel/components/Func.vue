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
            nowSearch: "",
            searchList: ["探索景點", "節慶活動", "品嘗美食"],
            choseCity: "全部縣市",
            searchCity: "all",
            searchInfo: "",
            searchDate: "all",
        }
    },
    mounted() {
        if (store.state.nowPage == "home") {
            this.nowSearch = "探索景點"
        } else {
            this.nowSearch = ""
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
            console.log("func")
            store.dispatch("SET_LOADING", true)
            console.log("func1")

            let nowPage = store.state.nowPage
            let city = this.searchCity == "all" ? "全部縣市" : this.choseCity
            let info = this.searchInfo == "" ? "all" : this.searchInfo
            let date = this.searchDate
            let nowSearch = this.nowSearch

            this.changeBreadcrumbs(nowSearch, city)
            if (nowPage == "attractions" || nowSearch == "探索景點") {
                this.$router.push(
                    "/attractions/" + city + "/" + "all" + "/" + info
                )
            } else if (nowPage == "activity" || nowSearch == "節慶活動") {
                this.$router.push(
                    "/activity/" + city + "/" + "all" + "/" + info
                )
            } else if (nowPage == "restaurant" || nowSearch == "品嘗美食") {
                this.$router.push(
                    "/restaurant/" + city + "/" + "all" + "/" + info
                )
            }
        },
        getInfo() {
            store.dispatch("READ_ATTRACTIONS_INFO")
        },
        searchChangeHandler(str) {
            this.nowSearch = str
        },
        changeCity(str, str1) {
            this.choseCity = str
            this.searchCity = str1
        },
        changeBreadcrumbs(add, city) {
            console.log("add", add)
            console.log("city", city)

            if (store.state.breadcrumbs.length == 2) {
                store.dispatch("CLEAR_BREADCRUMBS")
                store.dispatch("ADD_BREADCRUMBS", this.getPageName())
                store.dispatch("ADD_BREADCRUMBS", city)
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
