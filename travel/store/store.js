// const timeHandler = {
//     getDate() {
//         let year = new Date().getFullYear();
//         let mounth = new Date().getMonth() + 1;
//         if (mounth < 9) {
//             mounth = "0" + mounth;
//         }
//         let date = new Date().getDate();
//         if (date < 9) {
//             date = "0" + date;
//         }
//         return year + "-" + mounth + "-" + date;
//     },
// };

const store = new Vuex.Store({
    state: {
        nowPage: "",
        city: [],
        restaurant: {
            class: [],
            info: [],
        },
        breadcrumbs: [],
    },
    getters: {},
    mutations: {
        SET_PAGE(state, str) {
            state.nowPage = str;
        },
        SET_CITY(state, str) {
            state.city = str;
        },
        SET_RESTAURANT(state, str) {
            state.restaurant.class = str.class_obj;
            state.restaurant.info = str.info_obj;
        },
        SET_BREADCRUMBS(state, str) {
            state.breadcrumbs.push(str);
        },
        CLEAR_BREADCRUMBS(state) {
            state.breadcrumbs = [];
        },
    },
    actions: {
        PAGE({ commit }, str) {
            commit("SET_PAGE", str);
        },
        READ_CITY({ commit }) {
            axios
                .get("https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City")
                .then((res) => {
                    commit("SET_CITY", res.data);
                });
        },
        READ_RESTAURANT_INFO({ commit }) {
            axios
                .get(
                    // "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24select=Class%2CPicture%2CRestaurantName%2CRestaurantID%2CDescription%2CAddress&%24format=JSON"
                    "../aaa.json"
                )
                .then((res) => {
                    let class_obj = {
                        class_sort: [],
                        class_map: {},
                    };
                    let info_obj = [];
                    res.data.forEach((item) => {
                        if (!class_obj.class_map[item.Class] && item.Class) {
                            class_obj.class_sort.push(item.Class);
                            class_obj.class_map[item.Class] = {
                                picUrl: [],
                            };
                        }
                        if (item.Class) {
                            class_obj.class_map[item.Class].picUrl.push(
                                item.Picture.PictureUrl1
                            );
                        }
                        info_obj.push({
                            restaurantID: item.RestaurantID,
                            cityName: item.Address
                                ? item.Address.substr(0, 3)
                                : "",
                            detail: item.Description,
                            picture: item.Picture,
                            pictureUrl: item.Picture.PictureUrl1
                                ? item.Picture.PictureUrl1
                                : "../images/error.png",
                            restaurantName: item.RestaurantName,
                            type: item.Class,
                        });
                    });
                    commit("SET_RESTAURANT", { class_obj, info_obj });
                });
        },
        ADD_BREADCRUMBS({ commit }, str) {
            commit("SET_BREADCRUMBS", str);
        },
        CLEAR_BREADCRUMBS({ commit }) {
            commit("CLEAR_BREADCRUMBS");
        },
    },
});
