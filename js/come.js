/**
 * Created by Administrator on 2017/2/21.
 */
//初始化页面对象
(function(window){

    var come = {

        //初始化
        init : function(){

            //初始化页面链接
            this._href();

        },

        //doc节点
        doc : {

        },

        //页面链接
        _href : function(){       

            //跳转注册页 - 我是师傅
            $(".href_register_worker1").on('tap', clicked );

            //跳转注册页 - 我是雇主
            $(".href_register_company1").on('tap', clicked);

        }

    }

    //页面对象初始化执行
    come.init();

})(window);

