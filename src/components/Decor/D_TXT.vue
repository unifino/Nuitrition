<template>
    <div id="textBannerBox">{{ store.state.ort }}</div>
</template>

// -- =====================================================================================

<script setup lang="ts">

// -- =====================================================================================

import { useStore }                         from 'vuex'

const store = useStore()

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #textBannerBox{
        color: #3c3c3c;
        font-family: PoiretOne;
        font-size: 200px;
        margin: 200px 100px;
        padding: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }

</style>

// -- =====================================================================================