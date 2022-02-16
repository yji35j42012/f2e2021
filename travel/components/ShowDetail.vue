<style scoped></style>

<template>
    <div class="detail">
        <banner></banner>
        <div class="infoBox">
            <h3>
                {{ detail.name }}
            </h3>
            <ul class="hash">
                <li v-if="detail.class"># {{ detail.class }}</li>
            </ul>
            <div class="introduce">
                <p>景點介紹：</p>
                <span>
                    {{ detail.description }}
                </span>
            </div>
        </div>
        <div class="map infoBox">
            <div class="map_txt">
                <table>
                    <tr>
                        <th>營業時間：</th>
                        <td>{{ detail.opentime }}</td>
                    </tr>
                    <tr>
                        <th>聯絡電話：</th>
                        <td>{{ detail.phone }}</td>
                    </tr>
                    <tr>
                        <th>餐廳地址：</th>
                        <td class="green">
                            {{ detail.address }}
                        </td>
                    </tr>
                    <tr>
                        <th>官方網站：</th>
                        <td class="green word_break_all">
                            {{ detail.webAddress }}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="map_pic">
                <img src="../images/GoogleMap.jpg" alt="" />
            </div>
            <ul class="map_surrounding">
                <li>周邊資訊：</li>
                <li>
                    <i class="icon_mount"></i>
                    附近景點
                </li>
                <li>
                    <i class="icon_nearby"></i>
                    附近活動
                </li>
                <li>
                    <i class="icon_eat"></i>
                    附近美食
                </li>
            </ul>
        </div>
        <div class="infoBox">
            <h3>
                還有這些不能錯過的景點
                <span>
                    更多宜蘭縣景點
                    <i class="icon_arrow">
                        <svg viewBox="0 0 16 16">
                            <path :d="icon_all.arrow" />
                        </svg>
                    </i>
                </span>
            </h3>
            <ul class="r1c4">
                <li class="r1c4_item">
                    <div class="pic">
                        <img src="./images/RestaurantPicture1.jpg" alt="" />
                    </div>
                    <div class="r1c4_txt">
                        <p class="r1c4_txt_title">龜山島牛奶海</p>
                        <p class="r1c4_txt_address">
                            <i class="icon_add">
                                <svg viewBox="0 0 14 16">
                                    <path :d="icon_all.add" />
                                </svg>
                            </i>
                            宜蘭縣
                        </p>
                    </div>
                </li>
                <li class="r1c4_item">
                    <div class="pic">
                        <img src="./images/RestaurantPicture2.jpg" alt="" />
                    </div>
                    <div class="r1c4_txt">
                        <p class="r1c4_txt_title">
                            高美濕地(高美野生動物保護區)
                        </p>
                        <p class="r1c4_txt_address">
                            <i class="icon_add">
                                <svg viewBox="0 0 14 16">
                                    <path :d="icon_all.add" />
                                </svg>
                            </i>
                            臺中市
                        </p>
                    </div>
                </li>
                <li class="r1c4_item">
                    <div class="pic">
                        <img src="./images/RestaurantPicture3.jpg" alt="" />
                    </div>
                    <div class="r1c4_txt">
                        <p class="r1c4_txt_title">溪頭自然教育園區</p>
                        <p class="r1c4_txt_address">
                            <i class="icon_add">
                                <svg viewBox="0 0 14 16">
                                    <path :d="icon_all.add" />
                                </svg>
                            </i>
                            南投縣
                        </p>
                    </div>
                </li>
                <li class="r1c4_item">
                    <div class="pic">
                        <img src="./images/RestaurantPicture4.jpg" alt="" />
                    </div>
                    <div class="r1c4_txt">
                        <p class="r1c4_txt_title">九份老街</p>
                        <p class="r1c4_txt_address">
                            <i class="icon_add">
                                <svg viewBox="0 0 14 16">
                                    <path :d="icon_all.add" />
                                </svg>
                            </i>
                            新北市
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
            detail: [],
        }
    },
    components: {
        banner: httpVueLoader("../components/Banner.vue"),
    },
    mounted() {
        if (store.state.breadcrumbs.length !== 3) {
            this.$router.push("/")
        }
        var axiosUrl = ""
        let searchId = this.$route.params.id
        if (store.state.nowPage == "restaurant") {
            axiosUrl =
                "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24filter=contains(RestaurantID%2C'" +
                searchId +
                "')&%24top=1&%24format=JSON"
        } else if (store.state.nowPage == "activity") {
            axiosUrl =
                "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?%24filter=contains(ActivityID%2C'" +
                searchId +
                "')&%24top=1&%24format=JSON"
        } else if (store.state.nowPage == "attractions") {
            axiosUrl =
                "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24filter=contains(ScenicSpotID%2C'" +
                searchId +
                "')&%24top=1&%24format=JSON"
        }

        axios.get(axiosUrl).then((res) => {
            console.log("res", res.data)
            let item = res.data[0]
            let page = store.state.nowPage
            this.detail = {
                address: item.Address,
                description: item.Description,
                class: item.Class,
                opentime: item.OpenTime,
                phone: item.Phone,
                webAddress: item.WebsiteUrl,
            }
            if (page == "restaurant") {
                this.detail.name = item.RestaurantName
            } else if (page == "attractions") {
                this.detail.name = item.ScenicSpotName
            } else if (page == "activity") {
                this.detail.name = item.ActivityName
            }
        })
    },
    computed: {
        detailContent() {
            return this.detail
        },
    },
    methods: {},
}
</script>
