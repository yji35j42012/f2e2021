<template>
    <ul class="breadcrumbs">
        <li>
            <router-link to="/">首頁</router-link>
        </li>
        <li
            v-for="(item, index) in breadcrumbsItem"
            :key="index"
            @click="breadHandler(item)"
        >
            {{ item }}
        </li>
    </ul>
</template>

<script>
module.exports = {
    data() {
        return {};
    },

    computed: {
        breadcrumbsItem() {
            return store.state.breadcrumbs;
        },
        nowPage() {
            return store.state.nowPage;
        },
    },
    methods: {
        breadHandler(str) {
            if (str == "品嚐美食" || str == "節慶活動" || str == "節慶活動") {
                store.dispatch("CLEAR_BREADCRUMBS");
                store.dispatch("ADD_BREADCRUMBS", str);
                this.$router.push("/" + store.state.nowPage);
                this.$emit("clearsearch");
            } else if (store.state.breadcrumbs.length == 3) {
                store.dispatch("DEL_BREADCRUMBS");
                this.$router.go(-1);
            }
        },
    },
};
</script>
