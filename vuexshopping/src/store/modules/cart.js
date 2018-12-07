// 初始化数据，里面是商品列表
const state={
    //商品列表
    shoplist:[
        {id:1,name:'韭菜炒鸡蛋',price:10.00},
        {id:2,name:'水煮鱼片',price:30.00},
        {id:3,name:'青椒肉丝',price:15.00}
    ],
    // 添加购物车数据存储
    added:[]
} 
// 向外输出数据的方法
const getters={
    // 购物车列表
    shoplist:state=>state.shoplist,
    // 添加购物车计算属性
    cartProduct:state=>{
        return state.added.map(({id,num})=>{
            let _n=state.shoplist.find(n=>n.id===id)
            return {
                ..._n,
                num
            }
        })
    },
    // 总数量
    todonum(state,getters){
        let num=0
        getters.cartProduct.forEach((item)=>{
            num+=item.num
        })
        return num
    },
    // 总价格
    todoprice(state,getters){
        let price=0
        getters.cartProduct.forEach((item)=>{
            price+=item.price
        })
        return price
    }
    
} 
// 异步数据操作
const actions={
    // 添加到购物车
    addToCart({commit},n){
        //触发add事件
        commit('add',{
            id:n.id
        })
    },
    // 清空购物车
    AllClear({commit}){
        commit('clearAll')
    },
    // 删除商品
    addDetele({commit},items){
        commit('detele',{id:items.id})
    }
} 

// mutations
//通过mutations方法，对数据做出改变
const mutations={
    // 添加到购物车
    add(state,{id}){
        // console.log(state,{id})
        //遍历added数组，find方法找出点击的id和added中的id是相等的情况下，这项数据让变量items接收
        let items=state.added.find(n=>n.id==id)
        if(!items){
            //如果么有找到这项数据items，那么就添加到added数组中
            state.added.push({id,num:1})
        }else{
            //如果added数组中已经存在添加的数据了，那么就让数量加加
            items.num++
        }
    },
    // 清空购物车
    clearAll(state){
        state.added=[]
    },
    // 删除商品
    detele(state,{id}){
        state.added=state.added.filter(item=>{
            return item.id!=id
        })
    }
} 

// 导出
export default {
    state,
	getters,
	actions,
	mutations
}