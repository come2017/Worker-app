/**
 * Created by Administrator on 2017/2/23.
 */
(function(){

    //创建页面级对象
    var user = {

        init : function(){

            //初始化链接
            this._href();

            //初始化退出功能
            this.out();

        },

        //链接
        _href : function(){


            $(".href_personalData").on("tap" , function(){

                //打开个人资料页面
                mui.openWindow({
                    url: 'personalData.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });

            });

            //打开用户详情页
            $(".href_user-details").on("tap" , function(){

                mui.openWindow({
                    url: 'user-details.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });

            })

            //找师傅
            $(".href-zShiFu1").on("tap" , function(){
                mui.openWindow({
                    url: 'zShiFu-1.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });
            });

            //找工作
            $(".href-zJob1").on("tap" , function(){

                mui.openWindow({
                    url: 'zJob-1.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });

            })

            //我的收藏
            $(".href-collection").on("tap" , function(){

                mui.openWindow({
                    url: 'collection.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });

            })

            //应用设置
            $(".href-appSet").on("tap" , function(){

                mui.openWindow({
                    url: 'appSet.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });

            })

        },

        //退出功能
        out : function(){

            $("#out").on('tap', function() {
                var btnArray = ['是', '否'];
                mui.confirm('是否退出账号？', 'Hello 张师傅', btnArray, function(e) {
                    if (e.index == 0) {
                        alert("已退出")
                    } else {
                        alert("取消操作")
                    }
                })
            });

        }

    }

    user.init();

})(window);
