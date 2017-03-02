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

            //跳转首页 - 我有账号
            document.querySelector(".href_index").addEventListener('tap', function() {
                //打开关于页面
                mui.openWindow({
                    url: 'www/index-index.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });
            });

            //跳转注册页 - 我是师傅
            document.querySelector(".href_register_worker1").addEventListener('tap', function() {
                //打开关于页面
                mui.openWindow({
                    url: 'www/register-worker1.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });
            });

            //跳转注册页 - 我是雇主
            document.querySelector(".href_register_company1").addEventListener('tap', function() {
                //打开关于页面
                mui.openWindow({
                    url: 'www/register-company1.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });
            });


        }

    }

    //页面对象初始化执行
    come.init();

})(window);

