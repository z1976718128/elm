<template>
    <div class="navgition">
        <div @click="goto('/home')" :class="{action:'/home' == $route.path}">
            <span class="item-icon">
				<i class="iconfont icon-U"></i><br />
			</span>
			<span>首页</span>
        </div>
        <div  @click="goto('/seach')" :class="{action:'/seach' == $route.path}">
            <span class="item-icon">
				<i class="iconfont icon-sousuo"></i><br />
			</span>
			<span>搜索</span>
        </div>
        <div  @click="goto('/order')" :class="{action:'/order' == $route.path}">
            <span class="item-icon">
				<i class="iconfont icon-icon-"></i><br />
			</span>
			<span>订单</span>
        </div>
        <div  @click="goto('/profile')" :class="{action:'/profile' == $route.path}">
            <span class="item-icon">
				<i class="iconfont icon-seeusero"></i><br />
			</span>
			<span>我的</span>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goto(path){
            this.$router.replace(path)
        }
    }
}
</script>

<style lang="less" scoped>
.navgition{
    width: 100%;
    height: 60px;
    border-top: 1px solid #eee;
    position: fixed;
    bottom: 0;
    text-align: center;
    display: flex;
    z-index: 1;
    background-color: #fff;
    div{
        flex: 1;
        padding-top: 12px;
        .iconfont{
            font-size: 20px;
        }
    }
}
.action{
    color: lightseagreen;
}
</style>

