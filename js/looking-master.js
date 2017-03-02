/**
 * Created by Administrator on 2017/2/23.
 */
(function(window){

    //创建页面级对象
    var looking = {

        init : function(){

            //初始化创建一个mask遮罩层
            var mask = mui.createMask(function(){
                $(".pop_phone").hide();
            });

            //初始化滚动条
            this._scroll();

            //点击电话
            this._click.phone( mask );

            //点击弹出的关闭按钮
            this._click.close( mask );

        },

        //创建滚动条
        _scroll : function(){

            mui('.mui-scroll-wrapper').scroll({
                indicators : false
            });

        },

        //click 事件
        _click : {

            //点击电话
            phone : function( mask ){

                $(".list_phone").on("tap" , function(){
                    mask.show();
                    $(".pop_phone").show();
                })
            },

            //点击弹出电话的关闭按钮
            close : function( mask ){

                $(".pop_qx").on("tap" , function(){
                    mask.close();
                    $(".pop_phone").hide();

                })
            }

        }

    }

    //初始化页面对象
    looking.init();

})(window);