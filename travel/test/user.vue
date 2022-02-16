<style scoped></style>

<template>
    <div class="page">
        User
        {{ $route.params.id }}
        <router-view></router-view>
    </div>
</template>

<script>
module.exports = {
    mounted() {
    },
};
</script>
