const goodsArr = [
    {
        title:'上装',
        typeList:['全部','针织衫','毛呢外套','T恤','羽绒服','棉衣','卫衣','风衣'],
        id:1
    },
    {
        title:'裤装',
        typeList:['全部','牛仔裤','小脚裤','休闲裤','打底裤','哈伦裤'],
        id:2
    },
    {
        title:'裙装',
        typeList:['全部','连衣裙','半身裙','长袖连衣裙','中长款连衣裙'],
        id:3
    }
];

const vm = new Vue ({
    el:"#app",
    data:{
        showFilterGoods:false, //用来判断是否已选
        filterObj:{}, // 用来存储已经选择的
        goodsList:goodsArr,        
    },
    methods:{
        // 选择条件的函数
        addFilterHandle(typeIndex,goods,type,goodsIndex){

            this.showFilterGoods = true;

            // 点击当前的type，就设置点击选中属性
            goods.index = typeIndex;

            // 选中一个商品条件就把它放在filterObj里面
            vm.$set(this.filterObj,goodsIndex,type);
        },
        delFilterGoods(goods_key){
            //先把filterObj里面的该商品条件删除
            vm.$delete(this.filterObj,goods_key);
            //把原本这一个商品对象的index值设为0
            // goods_key其实就是goodsList里面的数组下标
            this.goodsList[goods_key].index = 0;
            //判断filterObj里面还有没有的内容，
            // JSON.stringify(this.filterObj) 是把filterObj转成字符串
            // 然后判断这个字符串是不是"{}",如果是，就证明filterObj已经空了
            // 就可以把this.showFilterGoods => false
            this.showFilterGoods = JSON.stringify(this.filterObj) !== '{}';
        }
    }
});

// 在每一个商品对象里面的设置一个index，初始值为0
vm.goodsList.forEach(item => vm.$set(item,'index',0));