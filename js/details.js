/**
 * Created by Administrator on 2017/2/24.
 */
(function( window ){

    //创建页面级对象
    var details = {

        //初始化
        init : function(){

            //初始化滚动条
            this._scroll();

        },

        //滚动条
        _scroll : function(){

			mui('.mui-scroll-wrapper').scroll({
                indicators : false
            });
        }

    }

    details.init();

})(window);