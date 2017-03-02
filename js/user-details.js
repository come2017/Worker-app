/**
 * Created by Administrator on 2017/2/28.
 */
(function(){

    //创建页面级对象
    var Udetails = {

        init : function(){

            this._href();

        },

        //链接
        _href : function(){

            $(".href_user-Modify").on("tap" , function(){

                //打开修改手机页面
                mui.openWindow({
                    url: 'user-Modify.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });

            })

        }

    }

    //初始化执行
    Udetails.init();


})(window)