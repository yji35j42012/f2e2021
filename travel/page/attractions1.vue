<style scoped></style>

<template>
    <div class="container">
        <ul class="breadcrumbs">
            <li>首頁</li>
            <li>探索景點</li>
            <li>宜蘭縣</li>
            <li>羅東林業文化園區</li>
        </ul>
        <banner></banner>

        <div class="infoBox">
            <h3>羅東林業文化園區</h3>
            <ul class="hash">
                <li># 自然風景類</li>
                <li># 林場類</li>
            </ul>
            <div class="introduce">
                <p>景點介紹：</p>
                <span>
                    日治時期台灣有三大林場，分別是：八仙山林場、阿里山林場以及太平山林場。從太平山林場所砍伐的檜木、扁柏等木材，都會運送到羅東出張所和貯木池進行存放，而羅東出張所經過規劃後，成為現今的羅東林業文化園區。羅東林業文化區坐落於羅東市區附近，交通十分方便，園內規劃有貯木池、森林鐵路、竹林車站、蒸汽火車頭、綠林和步道等，從這些設備、建築物中發現當年的林業發展多麼蓬勃，又是多麼地熱鬧，同時也讓人不禁感慨，許多珍貴的檜木消逝在太平山中。隨著林業發展的轉型，可以看見昔日風華的貯木池，零散放著當時砍伐的檜木，如今，貯木池不再具有貯木的功能，而是成為水鳥和魚兒們的天堂。在園區中散步，彷彿進入一座秘密花園，園內種植滿滿茂密的樹木，不時聽見鳥兒的叫聲，空氣中帶有芬多精與淡淡的檜木香，舒服的環境，令人不禁停下腳步，感受內心的寧靜。
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
                        <p class="r1c4_txt_title">高美濕地(高美野生動物保護區)</p>
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
