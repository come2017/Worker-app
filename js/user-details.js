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

            $(".href_user-Modify").on("tap" , clicked )

        }

    }

    //初始化执行
    Udetails.init();


})(window)