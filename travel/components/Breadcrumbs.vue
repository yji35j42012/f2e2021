<template>
    <ul class="breadcrumbs">
        <li>
            <router-link to="/">首頁</router-link>
        </li>
        <li
            v-for="(item, index) in breadcrumbsItem"
            :key="index"
            @click="breadHandler(item, index)"
        >
            {{ item }}
        </li>
    </ul>
</template>

<script>
module.exports = {
    data() {
        return {}
    },
    mounted() {
    },
    computed: {
        breadcrumbsItem() {
            return store.state.breadcrumbs
        },
        nowPage() {
            return store.state.nowPage
        },
    },
    watch: {
        $route(to, from) {
            // let nowPage = store.state.nowPage
            // let city =
            //     this.$route.params.city == "全部縣市"
            //         ? ""
            //         : this.$route.params.city

            // let classType = this.$route.params.class

            // let searchInfo =
            //     this.$route.params.search == "all"
            //         ? ""
            //         : this.$route.params.search
            // console.log('Bread nowPage',nowPage)
            // console.log('Bread city',city)
            // console.log('Bread classType',classType)
            // console.log('Bread searchInfo',searchInfo)
            // console.log("bread", this.getPageName())
        },
    },
    methods: {
        breadHandler(str, index) {
            let breadCount = store.state.breadcrumbs.length
            if (str == "品嚐美食" || str == "節慶活動" || str == "探索景點") {
                if (breadCount == 1) return
                this.$router.push("/" + store.state.nowPage)
                this.$emit("clearsearch")
            } else if (index == 1 && breadCount == 3) {
                store.dispatch("DEL_BREADCRUMBS")
                this.$router.go(-1)
            }
        },
        getPageName() {
            if (this.nowPage == "attractions") {
                return "探索景點"
            } else if (this.nowPage == "activity") {
                return "節慶活動"
            } else if (this.nowPage == "restaurant") {
                return "品嘗美食"
            }
        },
    },
}
</script>
