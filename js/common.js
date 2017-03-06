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
            
            //初始化APP设置
            this.appInit();
            
            //初始化侧滑返回
            this.swipeBack();
            
            //初始化返回按钮
            this.back();

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
            $(".href-index").on('tap', clicked );

            //跳转发布页面
            $(".href-release").on('tap', clicked );

            //跳转到 找活页面
            $(".href_lookingWork").on('tap', clicked );

            //跳转到 找师傅页面
            $(".href_lookingMaster").on('tap', clicked );

            //跳转到 个人中心
            $(".href_user").on('tap', clicked );

        },
        
        //初始化手机APP的一些设置
        appInit : function(){
        	    	
			//取消浏览器的所有事件，使得active的样式在手机上正常生效
			document.addEventListener('touchstart',function(){
			    return false;
			},true);
			
			// 禁止选择
			document.oncontextmenu=function(){
				return false;
			};
			
			// H5 plus事件处理
			
			function plusReady(){
				// 隐藏滚动条
				plus.webview.currentWebview().setStyle({scrollIndicator:'none'});
				// Android处理返回键
				/*plus.key.addEventListener('backbutton',function(){
					if(confirm('确认退出？')){
						plus.runtime.quit();
					}
				},false);*/
				compatibleAdjust();
			}
			if(window.plus){
				plusReady();
			}else{
				document.addEventListener('plusready',plusReady,false);
			}
        	
        	
        	// DOMContentLoaded事件处理
			var _domReady=false;
			document.addEventListener('DOMContentLoaded',function(){
				_domReady=true;
				compatibleAdjust();
			},false);
			// 兼容性样式调整
			var _adjust=false;
			function compatibleAdjust(){
				if(_adjust||!window.plus||!_domReady){
					return;
				}
				_adjust=true;
				// iOS平台特效
				if('iOS'==plus.os.name){
					document.getElementById('content').className='scontent';	// 使用div的滚动条
					if(navigator.userAgent.indexOf('StreamApp')>=0){	// 在流应用模式下显示返回按钮
						document.getElementById('back').style.visibility='visible';
					}
				}
				// 预创建二级窗口
			//preateWebviews();
				// 关闭启动界面
				setTimeout(function(){
					plus.navigator.closeSplashscreen();
					plus.navigator.setStatusBarBackground('#FFFFFF');
					if(plus.navigator.isImmersedStatusbar()){
						plus.navigator.setStatusBarStyle('UIStatusBarStyleBlackOpaque');
					}
				},500);
			}
						
       },
       
       //侧滑返回
       swipeBack : function(){
			mui.init({
				swipeBack:true 
			});		
       },
       
       //返回按钮
       back : function(){
       	
       		$(".head_back").on("tap" , function(){
       			
       			mui.back();
       			
       		})
       	
       }
        

    }
    //初始化执行
    common.init();

})(window);



var as='pop-in';// 默认窗口动画
// 处理点击事件
var _openw=null;
function clicked(a,s){
	
	var id = $(this).attr("data-href")
	if(_openw){return;}
	a||(a=as);
	_openw=preate[id];
	
	
	
	if(_openw){
		_openw.showded=true;
		_openw.show('pop-in',null,function(){
			_openw=null;//避免快速点击打开多个页面
		});
	}else{
//		var wa=plus.nativeUI.showWaiting();
		_openw=plus.webview.create(id,id,{scrollIndicator:'none',scalable:false,popGesture:'hide'},{preate:true});
		
		preate[id]=_openw;
		
		_openw.addEventListener('loaded',function(){//叶面加载完成后才显示
//		setTimeout(function(){//延后显示可避免低端机上动画时白屏
//			wa.close();
			_openw.showded=true;
			
			s||_openw.show('pop-in',null,function(){
				_openw=null;//避免快速点击打开多个页面
			});
			s&&(_openw=null);//避免s模式下变量无法重置
//		},10);
		},false);
		_openw.addEventListener('hide',function(){
			_openw&&(_openw.showded=true);
			_openw=null;
		},false);
		_openw.addEventListener('close',function(){//页面关闭后可再次打开
			_openw=null;
			preate[id]&&(preate[id]=null);//兼容窗口的关闭
		},false);
	}
}
// 预创建二级页面
var preate={};
