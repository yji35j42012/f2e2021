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
        }
    },
    components: {
        func: httpVueLoader("../components/Func.vue"),
        breadcrumbs: httpVueLoader("../components/Breadcrumbs.vue"),
    },
    mounted() {
        store.dispatch("READ_ACTIVITY_INFO")
    },
    computed: {
        showFunc() {
            let breadcrumbCount = store.state.breadcrumbs.length
            if (breadcrumbCount == 3) {
                return false
            } else {
                return true
            }
        },
    },
}
</script>
