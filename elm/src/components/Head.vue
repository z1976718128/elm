<template>
    <div class="head">
        <slot name="left"></slot>
        <slot name="city"></slot>
        <span>{{coordinates}}</span>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
   props:["coordinates"]
}
</script>

<style lang="less" scoped>
.head{
    width: 100%;
    line-height: 50px;
    height: 50px;
    position: fixed;
    top: 0;
    z-index:999;
    background-color:#3190e8; 
    color: #fff;
    text-align: center;
    a{
        color: #fff;
    }
}
</style>
