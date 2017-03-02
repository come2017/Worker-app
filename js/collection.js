/**
 * Created by Administrator on 2017/3/2.
 */
(function(window){

    //创建页面级对象
    var collection = {

        //初始化
        init : function(){

            //初始化滚动条
            this._scroll();

        },

        //创建滚动条
        _scroll : function(){
            mui('.mui-scroll-wrapper').scroll({
                indicators : false
            });
        }

    }

    collection.init();

})(window)