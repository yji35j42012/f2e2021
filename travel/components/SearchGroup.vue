<style scoped></style>

<template>
    <div class="infoBox result">
        <h3>
            搜尋結果
            <span class="result_count"> 共有 {{ itemcount }} 筆 </span>
        </h3>
        <ul class="result_group">
            <li
                class="result_item"
                v-for="(item, index) in itemobj"
                :key="index"
            >
                <div
                    class="result_pic"
                    :style="{
                        backgroundImage: 'url(' + item.pictureUrl + ')',
                    }"
                ></div>
                <div class="result_txt">
                    <p class="result_txt_title">
                        {{ item.restaurantName }}
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
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        };
    },
    props: ["itemcount", "itemobj"],
    computed: {
        page() {
            return store.state.nowPage;
        },
    },
    methods: {},
};
</script>
