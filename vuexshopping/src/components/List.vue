<template>
    <div class="list">
        <h1>{{msg}}</h1>
        <table>
            <tr>
                <th>id</th>
                <th>名称</th>
                <th>价格</th>
                <th>数量</th>
                <th>操作</th>
            </tr>
            <tr v-for='item in cartProduct' :key='item.id'>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.num}}</td>
                <td> 
                    <div @click='addDetele(item)'>删除</div> 
                </td>
            </tr> 
        </table>
        
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name:'product',
    data(){
        return{
            msg:'已添加的商品'
        }
    },
    computed:{
        // 添加购物车
        ...mapGetters(['cartProduct'])
    },
    methods:{
        // 删除事件
        ...mapActions(['addDetele'])
    }

}
</script>
<style>
table{
    width: 100%;
}
td{
    width: 20%;
    text-align: center;
}
h1{
    text-align: center;
    line-height:40px;
    font-size:32px;
    margin:20px 0;

}
</style>


