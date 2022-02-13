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
        };
    },
    components: {
        func: httpVueLoader("../components/Func.vue"),
        breadcrumbs: httpVueLoader("../components/Breadcrumbs.vue"),
    },
    mounted() {
        console.log("activity_outside");
        store.dispatch("READ_ACTIVITY_INFO");
        store.dispatch("CLEAR_BREADCRUMBS");
        store.dispatch("ADD_BREADCRUMBS", "節慶活動");
    },
    computed: {
        showFunc() {
            let breadcrumbCount = store.state.breadcrumbs.length;
            if (breadcrumbCount == 3) {
                return false;
            } else {
                return true;
            }
        },
    },
    methods: {},
};
</script>
