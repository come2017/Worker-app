/**
 * Created by Administrator on 2017/2/21.
 */
(function(window){

    //创建页面级对象
    var index = {

        //初始化
        init : function(){

            //初始化滚动条
            this._scroll();

        },

        //DOC节点
        doc : {

        },

        //页面链接
        _href : function(){

        },

        //主体内容部分创建滚动条
        _scroll : function(){
            mui('.mui-scroll-wrapper').scroll({
                indicators : false
            });
        }

    }

    //页面初始化执行
    index.init();
})(window);