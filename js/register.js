/**
 * Created by Administrator on 2017/2/22.
 */
(function(){

    //创建页面级对象
    var register = {

        //初始化
        init : function(){

            //初始化链接
            this._href();

            //九宫格点击事件执行
            this._click.gridLi();

            //点击修改地区
            this._click.changeTarget();

        },

        //链接条状
        _href : function(){

            //打开页面register-worker2.html
            $(".register_sub").on("tap" , clicked)

            //打开页面register-worker3.html
            $(".register_sub2").on("tap" , clicked)

            //打开页面register-company2.html
            $(".register_sub3").on("tap" , clicked);

            //打开页面register-company3.html
            $(".register_sub4").on("tap" , clicked)

            //立即登陆 - 打开登陆页面
            $(".href_login").on("tap" , clicked)

            //login页面 - 立即注册
            $(".href_register_worker1").on("tap" , clicked)
        },

        //点击事件
        _click : {

            //就宫格点击选择
            gridLi : function(){

                $(".register_grid>li").on("tap" , function(){
                    var off = this.off = !this.off;

                    if( off ){
                        $(this).addClass("active")
                    }else{
                        $(this).removeClass("active")
                    }


                })

            },

            //点击修改修改地区
            changeTarget : function(){
                $(".register_service_btn").on("tap" , function(){

                    var picker = new mui.PopPicker({
                        layer: 2
                    });
                    picker.setData([{
                        value: '110000',
                        text: '北京市',
                        children: [
                            {
                                value: "110101",
                                text: "东城区"
                            },
                            {
                                value: "110101",
                                text: "西城区"
                            },
                            {
                                value: "110101",
                                text: "海淀区"
                            },
                            {
                                value: "110101",
                                text: "朝阳区"
                            }
                        ]
                    }, {
                        value: '120000',
                        text: '天津市',
                        children: [{
                            value: "120101",
                            text: "和平区"
                        }, {
                            value: "120102",
                            text: "河东区"
                        }, {
                            value: "120104",
                            text: "南开区"
                        }
                        ]
                    }])
                    picker.pickers[0].setSelectedIndex(1);
                    picker.pickers[1].setSelectedIndex(1);
                    picker.show(function(SelectedItem) {

                        $(".register_maxCity").html( SelectedItem[0].text )
                        $(".register_minCity").html( SelectedItem[1].text )

                    })

                })
            }

        }



    }

    //初始化执行
    register.init();

})(window)
