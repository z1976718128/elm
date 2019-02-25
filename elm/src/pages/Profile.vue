<template>
    <div class="profile">
        <Head coordinates="我的"/>
        <section class="profile-num">
            <section>
                <span class="user"><i class="iconfont icon-seeusero"></i></span>
                <div>
                    <p>13413141269</p>
                    <p>暂无绑定号码</p>
                </div>
                <div><span><i class="iconfont icon-you"></i></span></div>
            </section>
            <section>
                <div>
                    <p :class="{orange:true}">0.00元</p>
                    <p>我的余额</p>
                </div>
                <div>
                    <p :class="{youhui:true}">3个</p>
                    <p>我的优惠</p>
                </div>
                <div>
                    <p :class="{jifen:true}">0分</p>
                    <p>我的积分</p>
                </div>
            </section>
            <section class="section_item">
                <div>
                    <img src="../assets/xiazaieliaomaapp.png" alt="">
                    <p>
                        <span>我的订单</span>
                        <span><i class="iconfont icon-you"></i></span>
                    </p>
                </div>
                <div>
                    <img src="../assets/shangcheng.png" alt="">
                    <p>
                        <span>积分商城</span>
                        <span><i class="iconfont icon-you"></i></span>
                    </p>
                </div>
                <div>
                    <img src="../assets/liwu.png" alt="">
                    <p>
                        <span>饿了吗会员卡</span>
                        <span><i class="iconfont icon-you"></i></span>

                    </p>
                </div>
            </section>
            <section class="section_item">
                <div>
                    <img src="../assets/kefu.png" alt="">
                    <p>
                        <span>服务中心</span>
                        <span><i class="iconfont icon-you"></i></span>
                    </p>
                </div>
                <div>
                    <img src="../assets/xiazaieliaomaapp.png" alt="">
                    <p>
                        <span>下载饿了吗app</span>
                        <span><i class="iconfont icon-you"></i></span>
                    </p>
                    
                </div>
            </section>
        </section>
    </div>
</template>

<script>
import Head from "@/components/Head"
export default {
    components:{
        Head
    }
}
</script>

<style lang="less" scoped>
.profile-num{
    margin-top:50px;
    section:first-child{
        background-color: #3190e8;
        display: flex;
        text-align: center;
        align-content: center;
        align-items: center;
        .user{
            display: inline-block;
            width: 80px;
            height: 80px;
            border-radius:50%;
            text-align: center;
            background:orange; 
            i{
                font-size: 70px;
            }
        }
        div{
            flex: 1;
            color:#fff;
        }
        div:nth-child(2){
            p{
                margin: 10px 0;
            }
        }
        div:last-child{
            position: relative;
            right: -50px;
        }
    } 
    section:nth-child(2){
        display: flex;
        align-content: center;
        align-items: center;
        text-align: center;
        div{
            flex: 1;
            background: #fff;
            p:first-child{
                font-size: 25px;
                margin:10px 0; 
            }
            p:last-child{
                margin:10px 0; 
            }
        }
        div:nth-child(2){
            border-left:1px solid #eee; 
            border-right:1px solid #eee; 
        }
    }
    .section_item{
        display: flex;
        flex-direction: column;
        background: #fff;
        margin-top: 10px;
        div{
            margin: 15px 0;
            display: flex;
            p{
                width: 100%;
                display: flex;
                justify-content: space-between;
                border-bottom:1px solid #eee; 
            }
            span,.icon-you{
                color: #999;
                margin-right: 5px;
            }
            img{
                width: 20px;
                height: 20px;
                margin: 0 15px;
            }
        }
    }
}
.orange{
    color: orange;
}
.youhui{
    color: #ff5f3e;
}
.jifen{
    color: #6ac20b;
}
</style>
