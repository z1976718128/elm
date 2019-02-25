<template>
    <div class="home">
        <Head>
            <router-link to="/seach" slot="left">
                <span class="left"><i class="iconfont icon-sousuo"></i></span>
            </router-link>
            <router-link to="/" slot="city">
                <Bmaps/>
            </router-link>    
            <router-link to="/login" slot="right">
                <span class="right">登录</span>
            </router-link>
        </Head>
        <Banner/>
        <ShopList/>
    </div>
</template>

<script>
import Head from "@/components/Head"
import Banner from "@/components/Banner"
import ShopList from "@/components/ShopList"
import Bmaps from "@/components/Bmaps"

export default {
    components:{
        Head,
        Banner,
        ShopList,
        Bmaps
    }
}
</script>

<style lang="less" scoped>
.left{
    float: left;
    padding-left: 15px;
}
.right{
    float: right;
    padding-right: 15px;
}
</style>
