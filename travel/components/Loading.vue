<style scoped>
.loading {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 3;
}
.loading_container {
    position: relative;
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 100%;
}
.loading_box {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 2px solid transparent;
    border-color: transparent #6e7d60 transparent #6e7d60;
    -moz-animation: rotate-loading 1.5s linear 0s infinite normal;
    -moz-transform-origin: 50% 50%;
    -o-animation: rotate-loading 1.5s linear 0s infinite normal;
    -o-transform-origin: 50% 50%;
    -webkit-animation: rota©te-loading 1.5s linear 0s infinite normal;
    -webkit-transform-origin: 50% 50%;
    animation: rotate-loading 1.5s linear 0s infinite normal;
    transform-origin: 50% 50%;
}
.loading_text {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: auto;
    color: #6e7d60;
    font-size: 18px;
    opacity: 1;
    transform: translate(-50% , -50%);
    animation: loading-text-opacity 2s linear 0s infinite normal;
}
@keyframes rotate-loading {
    0% {
        transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
    }
}

@keyframes loading-text-opacity {
    0% {
        opacity: 1;
    }
    20% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>

<template>
    <div class="loading">
        <div class="loading_container">
            <div class="loading_box"></div>
            <div class="loading_text">loading</div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {}
    },
    computes: {},
    methods: {},
}
</script>
