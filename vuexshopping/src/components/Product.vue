<template>
    <div class="product">
        <h1>{{msg}}</h1>
        <table>
            <tr>
                <th>id</th>
                <th>名称</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
            <tr v-for='item in shoplist' :key='item.id'>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td> 
                    <div @click='addToCart(item)'>添加</div> 
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
            msg:'vuex购物车'
        }
    },
    computed:{
        ...mapGetters(['shoplist'])
    },
    methods:{
        ...mapActions(['addToCart'])
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
.go{
    width: 100px;
    line-height: 40px;
    text-align: center;
    background-color: yellowgreen;
}
</style>


