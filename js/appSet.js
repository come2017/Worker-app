/**
 * Created by Administrator on 2017/3/2.
 */
(function(){
    //创建页面级对象
    var appSet = {

        //初始化
        init : function(){

            this._href();

        },

        //链接
        _href : function(){

            //关于我们
            $(".href-about").on("tap" , function(){

                mui.openWindow({
                    url: 'about.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });

            })

        }

        //
    }

    //初始化
    appSet.init();

})(window)