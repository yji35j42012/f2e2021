<style scoped></style>

<template>
    <div class="container">
        <div class="inpBox">
            <h2>請選擇地點並輸入編號</h2>
            <div class="keyboard_box">
                <button class="keyboard_btn">雙北</button>
                <button class="keyboard_btn">桃園</button>
                <button class="keyboard_btn">台中</button>
                <button class="keyboard_btn">高雄</button>
                <button class="keyboard_btn">更多</button>
            </div>
            <input type="text" class="keyboard_inp" />
            <div class="keyboard_box">
                <button class="keyboard_btn">紅</button>
                <button class="keyboard_btn">黃</button>
                <button class="keyboard_btn _num">7</button>
                <button class="keyboard_btn _num">8</button>
                <button class="keyboard_btn _num">9</button>
                <button class="keyboard_btn">藍</button>
                <button class="keyboard_btn">棕</button>
                <button class="keyboard_btn _num">4</button>
                <button class="keyboard_btn _num">5</button>
                <button class="keyboard_btn _num">6</button>
                <button class="keyboard_btn">綠</button>
                <button class="keyboard_btn">橘</button>
                <button class="keyboard_btn _num">1</button>
                <button class="keyboard_btn _num">2</button>
                <button class="keyboard_btn _num">3</button>
                <button class="keyboard_btn _double">更多</button>
                <button class="keyboard_btn">重設</button>
                <button class="keyboard_btn _num">0</button>
                <button class="keyboard_btn">back</button>
            </div>
        </div>
        <ul class="list">
            <li class="list_item" v-for="item in 30" :key="item">
                <div class="list_item_txt">
                    <p class="list_item_num">30</p>
                    <p class="list_item_name">
                        中台新村-第一廣場-中台新村
                    </p>
                </div>
                <div class="list_item_star">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23">
                        <path :d="icon_all.star" />
                    </svg>
                </div>
            </li>
        </ul>
        <div class="map">
            <img src="../images/map.jpg" alt="" />
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        };
    },
    mounted() {},
    computed: {},
    methods: {},
};
</script>
