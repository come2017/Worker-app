(function(window){

    //创建对象
    var common = {

        //初始化
        init : function(){

            //执行公告链接
            this._href();

            //底部跳转
            this._click.footA();

            //定位地址
            this._click.target();

        },

        //click事件
        _click : {

            //底部 点击跳转
            footA : function(){

                mui(".foot").on("tap" , "a" , function( index ){
                    $(this).addClass("active").siblings("a").removeClass("active")
                })

            },

            //定位地址
            target : function(){

                $(".head_target").on("click" , function(){

                    var picker = new mui.PopPicker();

                    picker.setData(
                        [
                            {value:'zz',text:'北京'},
                            {value:'zz',text:'河北'},
                            {value:'zz',text:'河南'},
                            {value:'zz',text:'内蒙古'},
                            {value:'zz',text:'新疆'},
                            {value:'zz',text:'上海'},
                            {value:'zz',text:'广东'},
                            {value:'zz',text:'广西'},
                            {value:'zz',text:'海南'}
                        ]
                    );

                    picker.show(function (selectItems) {

                        $(".head_text").html( selectItems[0].text );

                    })

                });

            }


        },

        //公告链接
        _href : function(){
            var _this = this;

            //跳转首页
            $(".href_index").on('tap', function() {
                //打开关于页面
                mui.openWindow({
                    url: 'index-index.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });
            });

            //跳转到 找活页面

            $(".href_lookingWork").on('tap', function() {
                //打开关于页面
                mui.openWindow({
                    url: 'lookingWork.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });
            });

            //跳转到 找师傅页面

            $(".href_lookingMaster").on('tap', function() {
                //打开关于页面
                mui.openWindow({
                    url: 'lookingMaster.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });
            });

            //跳转到 个人中心
            $(".href_user").on('tap', function() {
                //打开关于页面
                mui.openWindow({
                    url: 'user.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });
            });

        }

    }
    //初始化执行
    common.init();

})(window);