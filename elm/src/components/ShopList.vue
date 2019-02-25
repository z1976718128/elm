<template>
    <div class="shopList">
        <h2><i class="iconfont icon-xuanxiang"></i>附近商家</h2>
        <div class="shop_item" v-for="(shoplist,index) in sData.shopList" :key="index">
            <div class="images">
                <img :src="shoplist.imgs" alt="">
            </div>
            <section>
                <p>
                    <span>品牌</span>
                    <span class="ellipsis">{{shoplist.title}}</span>
                    <span><i @click.stop.prevent="color(index)" :class="{'icon-aixin':index === show}" class="iconfont icon-guanzhu"></i></span>
                </p>
                <p>
                    <span>{{shoplist.ys}}</span>
                    <span>好评率{{shoplist.pf}}%</span>
                    <span>{{shoplist.fn}}</span>
                </p>
                <p>
                    <span>{{shoplist.qs}}</span>
                    <span>{{shoplist.ps}}</span>
                </p>
            </section>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            show:''
        }
    },
    created(){
        this.$store.dispatch("getsData")
    },
    computed:{
        ...mapState(['sData'])
    },
    methods:{
        color(index){
            this.show =index
        },
        hide(){
            this.show = "";
            console.log(11)
        }
    }
}
</script>

<style lang="less" scoped>
.shopList{
    width: 100%;
    height: 870px;
    margin-top: 30px; 
    background: #fff;
    .shop_item{
        width: 100%;
        margin: 15px 0;
        position: relative;
        .images{
            display: inline-block;
            padding-left: 20px;
            img{
                width: 80px;
                height: 80px;
            }
        }
        section{
            display: inline-block;
            position: absolute;
            top: 0;
            margin: 0 15px;
            .ellipsis{
                display: inline-block;
                width:156px;
                padding-left: 15px;
            }
            .icon-aixin{
                color: orange;
            }
        }
    }
    .red{
        color: red !important;
    }
}
</style>

