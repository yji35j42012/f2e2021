<style scoped></style>

<template>
    <div class="infoBox result">
        <h3>{{ title }}</h3>
        <ul class="r2c4">
            <li
                class="r2c4_item"
                v-for="(item, index) in typeItem.class_sort"
                :key="index"
                :style="{
                    backgroundImage:
                        'url(' + typeItem.class_map[item].picUrl[0] + ')',
                }"
                :data-txt="item"
                @click="typeSearch(item)"
            ></li>
            <!-- <li
                class="r2c4_item"
                v-for="(item, index) in restaurant_sort.class_sort"
                :key="index"
                :data-txt="item"
                :style="{
                    backgroundImage:
                        'url(' +
                        restaurant_sort.class_map[item].picUrl[0] +
                        ')',
                }"
                @click="typeSearch(item)"
            ></li> -->
        </ul>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {};
    },

    computed: {
        title() {
            let title = "熱門主題";
            if (store.state.nowPage == "restaurant") {
                title = "熱門分類";
            }
            return title;
        },
        typeItem() {
            if (store.state.nowPage == "restaurant") {
                return store.state.restaurant.class;
            } else if (store.state.nowPage == "attractions") {
                return store.state.attractions.class;
            } else if (store.state.nowPage == "activity") {
                return store.state.activity.class;
            }
        },
    },
    methods: {
        typeSearch(str) {
            // let info;
            // if (store.state.nowPage == "restaurant") {
            //     info = store.state.restaurant.info;
            // } else if (store.state.nowPage == "attractions") {
            //     info = store.state.attractions.info;
            // } else if (store.state.nowPage == "activity") {
            //     info = store.state.activity.info;
            // }
            // let list = [];
            // info.forEach((item) => {
            //     if (item.type) {
            //         item.type.indexOf(str) !== -1 ? list.push(item) : "";
            //     }
            // });
            // store.dispatch("ADD_BREADCRUMBS", str);
            // store.dispatch("SET_SEARCHITEM", {
            //     type: "class",
            //     typeSearch: str,
            // });
            // store.dispatch("SET_SHOWSEARCH", list);
            this.$router.push(this.$route.fullPath + "/" + str);
        },
    },
};
</script>
