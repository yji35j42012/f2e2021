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
				
				</table>
			</div>
            <div class="map_info"></div>
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
