<style scoped></style>

<template>
    <div class="container">
        <div class="about">
            <div class="about_txt">
                <h2>
                    探索<span class="under_line">台灣之美</span>
                    <br />
                    讓我們更親近這片土地
                </h2>
                <div class="about_address">
                    <p class="tw">台灣旅遊景點導覽</p>
                    <p class="en">Taiwan Travel Guide</p>
                </div>
            </div>
            <func></func>
        </div>
        <banner></banner>

        <div class="activity infoBox">
            <h3>
                近期活動
                <span class="hand" @click="pageHandler('activity')">
                    查看更多活動
                    <i class="icon_arrow">
                        <svg viewBox="0 0 16 16">
                            <path :d="icon_all.arrow" />
                        </svg>
                    </i>
                </span>
            </h3>
            <ul class="activity_group">
                <li class="activity_item">
                    <div class="pic">
                        <img src="./images/EventPhoto1.jpg" alt="" />
                    </div>
                    <div class="txt">
                        <p class="txt_date">2021/10/30 - 2021/11/13</p>
                        <p class="txt_title">2021 日月潭花火音樂嘉年華</p>
                        <p class="txt_address">
                            <i class="icon_add">
                                <svg viewBox="0 0 14 16">
                                    <path :d="icon_all.add" />
                                </svg>
                            </i>
                            南投縣
                        </p>
                        <p class="txt_detail hand">
                            詳細介紹
                            <i class="icon_arrow">
                                <svg viewBox="0 0 16 16">
                                    <path :d="icon_all.arrow" />
                                </svg>
                            </i>
                        </p>
                    </div>
                </li>
                <li class="activity_item">
                    <div class="pic">
                        <img src="./images/EventPhoto2.jpg" alt="" />
                    </div>
                    <div class="txt">
                        <p class="txt_date">2021/10/30 - 2022/02/08</p>
                        <p class="txt_title">
                            山城花語溫泉系列活動－寶來不老溫泉季
                        </p>
                        <p class="txt_address">
                            <i class="icon_add">
                                <svg viewBox="0 0 14 16">
                                    <path :d="icon_all.add" />
                                </svg> </i
                            >高雄市
                        </p>
                        <p class="txt_detail hand">
                            詳細介紹
                            <i class="icon_arrow">
                                <svg viewBox="0 0 16 16">
                                    <path :d="icon_all.arrow" />
                                </svg>
                            </i>
                        </p>
                    </div>
                </li>
                <li class="activity_item">
                    <div class="pic">
                        <img src="./images/EventPhoto3.jpg" alt="" />
                    </div>
                    <div class="txt">
                        <p class="txt_date">2021/11/21 - 2021/11/21</p>
                        <p class="txt_title">新北市萬金石馬拉松</p>
                        <p class="txt_address">
                            <i class="icon_add">
                                <svg viewBox="0 0 14 16">
                                    <path :d="icon_all.add" />
                                </svg>
                            </i>
                            新北市
                        </p>
                        <p class="txt_detail hand">
                            詳細介紹
                            <i class="icon_arrow">
                                <svg viewBox="0 0 16 16">
                                    <path :d="icon_all.arrow" />
                                </svg>
                            </i>
                        </p>
                    </div>
                </li>
                <li class="activity_item">
                    <div class="pic">
                        <img src="./images/EventPhoto4.jpg" alt="" />
                    </div>
                    <div class="txt">
                        <p class="txt_date">2021/11/27 - 2021/11/28</p>
                        <p class="txt_title">2021 金門坑道音樂節</p>
                        <p class="txt_address">
                            <i class="icon_add">
                                <svg viewBox="0 0 14 16">
                                    <path :d="icon_all.add" />
                                </svg>
                            </i>
                            金門縣
                        </p>
                        <p class="txt_detail hand">
                            詳細介紹
                            <i class="icon_arrow">
                                <svg viewBox="0 0 16 16">
                                    <path :d="icon_all.arrow" />
                                </svg>
                            </i>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="infoBox">
            <h3>
                熱門打卡景點
                <span class="hand" @click="pageHandler('attractions')">
                    查看更多活動
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
        <div class="infoBox">
            <h3>
                一再回訪美食
                <span class="hand" @click="pageHandler('restaurant')">
                    查看更多活動
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
                        <img src="./images/RestaurantPicture5.jpg" alt="" />
                    </div>
                    <div class="r1c4_txt">
                        <p class="r1c4_txt_title">金都餐廳</p>
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
                        <img src="./images/RestaurantPicture6.jpg" alt="" />
                    </div>
                    <div class="r1c4_txt">
                        <p class="r1c4_txt_title">一中8兩碳烤雞排</p>
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
                        <img src="./images/RestaurantPicture7.jpg" alt="" />
                    </div>
                    <div class="r1c4_txt">
                        <p class="r1c4_txt_title">名根烤肉食材宅配外送</p>
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
                <li class="r1c4_item">
                    <div class="pic">
                        <img src="./images/RestaurantPicture8.jpg" alt="" />
                    </div>
                    <div class="r1c4_txt">
                        <p class="r1c4_txt_title">石桌羊肉店</p>
                        <p class="r1c4_txt_address">
                            <i class="icon_add">
                                <svg viewBox="0 0 14 16">
                                    <path :d="icon_all.add" />
                                </svg>
                            </i>
                            嘉義縣
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
        }
    },
    components: {
        banner: httpVueLoader("../components/Banner.vue"),
        func: httpVueLoader("../components/Func.vue"),
    },
    mounted() {
        store.dispatch("CLEAR_BREADCRUMBS")
    },
    computed: {},
    methods: {
        pageHandler(str) {
            this.$router.push(str)
        },
    },
}
</script>
