/**
 * Created by Administrator on 2017/3/3.
 */
(function(window){

    //创建页面级对象
    var release = {

        //初始化
        init : function(){

            //链接
            this._href();

        },

        //链接
        _href : function(){

            //找师傅
            $(".href-zShiFu1").on("tap" , clicked);

            //找工作
            $(".href-zJob1").on("tap" , clicked)

        }

    }

    //初始化执行
    release.init();

})(window)