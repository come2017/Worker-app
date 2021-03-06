/**
 * Created by Administrator on 2017/3/2.
 */
(function(){

    //创建页面级对象
    var zShiFu = {

        //初始化
        init : function(){
            this._href();

            this.target();

        },

        //页面链接
        _href : function(){

            //发布页
            $(".href-zShifu-1").on("tap" , clicked)

            $(".href-zShifu-2").on("tap" , clicked)

            $(".href-zShifu-3").on("tap" , clicked)

            $(".href-zShifu-4").on("tap" , clicked)

            //验证成功
            $(".href-zShifu-5").on("tap" , clicked);

            //找工作
            $(".href-zJob-2").on("tap", clicked);

            //找工作
            $(".href-zJob-3").on("tap", clicked);

            //找工作
            $(".href-zJob-4").on("tap", clicked);

            //找工作
            $(".href-zJob-5").on("tap", clicked);

            //
            $(".href-zJob-1").on("tap", clicked);


        },

        //地址
        target : function(){

            $(".zShiFu-target").on("tap" , function(){

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

    //初始化
    zShiFu.init();

})(window);