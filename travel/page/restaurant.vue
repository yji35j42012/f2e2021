<style scoped></style>

<template>
    <div class="container">
        <ul class="breadcrumbs">
            <li>首頁</li>
            <li>在地美食</li>
            <li>南投縣</li>
            <li>金都餐廳</li>
        </ul>
        <banner></banner>

        <div class="infoBox">
            <h3>金都餐廳</h3>
            <ul class="hash">
                <li># 中式美食</li>
            </ul>
            <div class="introduce">
                <p>餐廳介紹：</p>
                <span>
                    埔里金都餐廳於1994年創立於美麗的台灣中心埔里，1995年起創意取材埔里名酒研發推出紹興宴，揚名台北中華美食展，此後，不斷結合地方鄉土農特產，持續研發新健康美食與主題饗宴(日月潭邵族宴、水果宴、梅宴、茭白筍大餐、珍菇水筍宴、養生御膳、百花宴、香草宴、香米喜宴、原鄉風味餐、2003時尚蕃茄宴…等)，更榮耀承辦聖文森總理及五國元首國宴，成功的在台灣捲起金都美食風！精采展現台灣美食新風情，成為台灣中部旅遊線首選最佳的美食餐廳，並連續四年榮獲優經濟部選拔為質餐廳之殊榮。
                </span>
            </div>
        </div>
        <div class="map infoBox">
            <div class="map_txt">
                <table>
                    <tr>
                        <th>營業時間：</th>
                        <td>上午11:00~14:30下午17:00~21:00</td>
                    </tr>
                    <tr>
                        <th>聯絡電話：</th>
                        <td>886-49-2995096</td>
                    </tr>
                    <tr>
                        <th>餐廳地址：</th>
                        <td class="green">南投縣埔里鎮信義路236號</td>
                    </tr>
                    <tr>
                        <th>官方網站：</th>
                        <td class="green">http://www.jindu1994.com/</td>
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
        <div class="r1c4 infoBox">
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
            <ul class="r1c4_group">
                <li class="r1c4_item">
                    <div class="pic">
                        <img src="./images/RestaurantPicture1.jpg" alt="" />
                    </div>
                    <div class="txt">
                        <p class="txt_title">龜山島牛奶海</p>
                        <p class="txt_address">
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
                    <div class="txt">
                        <p class="txt_title">高美濕地(高美野生動物保護區)</p>
                        <p class="txt_address">
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
                    <div class="txt">
                        <p class="txt_title">溪頭自然教育園區</p>
                        <p class="txt_address">
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
                    <div class="txt">
                        <p class="txt_title">九份老街</p>
                        <p class="txt_address">
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
        }
    },
    components: {
        banner: httpVueLoader('../components/Banner.vue'),
    },
    mounted() {},
    computed: {},
    methods: {},
}
</script>
