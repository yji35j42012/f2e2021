<style scoped></style>

<template>
    <div class="func">
        <label class="normal_sel">
            <span>探索景點</span>
            <i class="icon_arrow">
                <svg viewBox="0 0 16 16">
                    <path :d="icon_all.arrow" />
                </svg>
            </i>
            <ul class="normal_sel_group">
                <li>台北市</li>
            </ul>
        </label>
        <label class="normal_inp">
            <input type="text" placeholder="你想去哪裡？請輸入關鍵字" />
        </label>
        <button class="normal_btn _search">
            <i class="icon_search">
                <svg viewBox="0 0 19 16">
                    <path :d="icon_all.search" />
                </svg>
            </i>
            搜 尋
        </button>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        }
    },
    computes: {},
}
</script>
