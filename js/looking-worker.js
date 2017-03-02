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


            //初始化执行链接
            this._href();

            //点击电话
            this._click.phone( mask );

            //点击弹出的关闭按钮
            this._click.close( mask );

            //选择城市
            this._click.city();

            //初始化排序，类别
            this._click.category()

        },

        //创建滚动条
        _scroll : function(){

            mui('.mui-scroll-wrapper').scroll({
                indicators : false
            });

        },

        //链接
        _href : function(){

            //找工作详情页
            $(".look_job").on("tap" , function(){

                //打开找工作详情页面
                mui.openWindow({
                    url: 'details_job.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });

            })

            //找师傅详情页
            $(".look_worker").on("tap" , function(){

                //打开找工作详情页面
                mui.openWindow({
                    url: 'details_worker.html',
                    id:'come',
                    show:{
                        aniShow:"slide-in-left"//页面显示动画，默认为”slide-in-right“；
                    }
                });

            })

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
            },

            //功能区 - 选着地区
            city : function(){

                $(".fun_l").on("tap" , function(){

                    var picker = new mui.PopPicker({
                        layer: 3
                    });
                    picker.setData( cityData3 )
                    picker.pickers[0].setSelectedIndex(1);
                    picker.pickers[1].setSelectedIndex(1);
                    picker.show(function(SelectedItem) {

                        $(".register_maxCity").html( SelectedItem[0].text )
                        $(".register_minCity").html( SelectedItem[1].text )

                    })

                })

            },

            //功能区 - 类别
            category : function(){

                $(".fun_c").on("tap" , function(){

                    var off = arguments.callee.off = !arguments.callee.off;

                    if( $(".list_class").is(":hidden") ){
                        $(".list_class").show();
                    }else{
                        $(".list_class").hide();
                    }

                })
                $(".fun_r").on("tap" , function(){

                    var off = arguments.callee.off = !arguments.callee.off;

                    if( $(".list_sort").is(":hidden") ){
                        $(".list_sort").show();
                    }else{
                        $(".list_sort").hide();
                    }

                })
                $(".list_category").on("tap" , function(){
                    $(this).hide();
                })

            }



        }

    }

    //初始化页面对象
    looking.init();

})(window);