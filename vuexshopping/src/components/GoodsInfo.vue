<template>
    <div class="goods">
        <div class="fl">总数:{{todonum}}</div>
        <div class="fl">总份:{{todoprice}}</div>
        <div class="fl" @click='AllClear'>清空购物车</div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name:'product',
    data(){
        return{
           
        }
    },
    computed:{
        ...mapGetters(['todonum','todoprice'])
    },
    methods:{
        ...mapActions(['AllClear'])
    }

}
</script>
<style>
.fl{
    float: left;
    line-height: 40px;
    background-color: bisque;
    width:33%;
}
.goods{
    width: 100%;
    position: fixed;
    bottom: 10px;
}
</style>


