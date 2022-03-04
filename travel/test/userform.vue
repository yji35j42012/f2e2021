<style scoped></style>

<template>
    <form id="user-form" @submit.prevent="$emit('submit')">
        <user-profile :name="name"></user-profile>
        <!-- <account :account="account"></account> -->
    </form>
</template>

<script>
module.exports = {
    prop: {
        name: {
            type: "String",
            required: true,
        },
        account: {
            type: "String",
            required: true,
        },
    },
    mounted() {},
};
</script>
