 
			new Swiper(".swiper-container",{
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
                  pagination: {
                        el: '.swiper-pagination',
                  },
                  loop : true,
                  autoplay:true
            })
			
		//瀑布流	
		 var content = document.querySelector(".waterfall-content");
            jsonp("../src/data/juanpi.json","callback")
            .then(function(res){
                  // console.log(res.result.wall.list);
                  render(res.result.wall.list)
            })

            function render(list){

                  var html = "";
                  list.forEach((item)=>{
                        console.log(item);
                        html += `
                                    <div class="waterfall-box">
                                    <div class="img-box">
                                          <img src="${item.show.img}" alt="">
                                    </div>
                                    <div class="title-box">
                                          <p>${item.title}</p>
                                    </div>
                                    <div class="detail-box">
                                          <div class="start">
                                                <span>${item.cfav}</span>
                                                ☆
                                          </div>
                                          <div class="price">
                                                <span class="orgin">${item.orgPrice}</span>
                                                <span>${item.price}</span>
                                          </div>
                                    </div>
                              </div>
                        `
                  })

                  content.innerHTML = html;
            }
      	
      	
   //搜索框   	
      		var search = document.getElementById("keywords");
            var list = document.getElementById("search-list");
            search.addEventListener("input",_throttle(handlerSearch,500));
            var showNum = 4;
            var timer = null;
            function handlerSearch(){
                  console.log("hahahaha");
                  var url = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${search.value}&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2`;
                  jsonp(url,"cb")
                  .then(function(res){
                        // console.log(res.s);
                        var html = "";
                        res.s.every((item,index)=>{

                              html += `<li>${item}</li>`
                              return index < showNum;
                        })
                        list.innerHTML = html;
                  })
            }
      	 function _throttle(callback,dealy){
                  var timer = null;
                  return function(){
                        clearTimeout(timer);
                        timer = setTimeout(function(){
                             callback(); 
                        },dealy)
                  }
            }
      	 search.onclick=function(){
      	 	search.value="";
      	 }
		list.onclick=function(e){
			var e=e||event;
			var target=e.target||e.srcElement;
			if(target.tagName=="LI"){
				search.value=target.innerHTML;
			 	list.style.display="none";
			}
			
		}
      	
     
   var _top = 300;
		var hasAnimate = false;
		var timer = null
		var target = 0;
		var speed = 3;
		window.addEventListener("scroll", toggle);

		function toggle() {
			var st = document.body.scrollTop || document.documentElement.scrollTop;
			if(st >= _top) {
				toggle = "active";
			} else {
				xiding.style.display="none";
				toggle = "normal";
			}
		}
		window.addEventListener("scroll", setClass);

		function setClass() {
			var hasActive = /active/.test(xiding.className);
			if(toggle !== "active" && hasActive) {
				xiding.className = xiding.className.replace(/\s+avtive/g, "");
				hasAnimate = false;
				clearInterval(timer);
				xiding.style.marginTop = 0;
				timer = null;

			} else {
				xiding.className += " active";
			}
		}
		window.addEventListener("scroll", animate);

		function animate() {
			if(toggle !== "active" || hasAnimate || timer !== null) return false;
			hasAnimate = true;
			xiding.style.marginTop = "-100px";
			xiding.style.display="block";
			timer = setInterval(function() {
				var mt = parseInt(xiding.style.marginTop);
				if(Math.abs(target - mt) <= Math.abs(speed)) {
					xiding.style.marginTop = target + "px";
					clearInterval(timer);
					timer = null;
					return false;
				}
				xiding.style.marginTop = mt + speed + "px";
			}, 50);
		}
      	
 var index = 1;//页码
	$.ajax({
		type:"get",
		url:"../../src/data/data.json",
		async:true,
		success : function(msg){
			//console.log( msg )
			getData(msg , index);
			//确定总也是
			var pageTotal = Math.ceil(msg.length / 4);
			//由于ajax是异步的  分页插件要操作服务器返回的数据  需要把分页插件的调用写到ajax请求数据的内部
			$(".M-box4").pagination({
				pageCount : pageTotal,
				keepShowPN : true,
				callback : function(api){
					var index = api.getCurrent();//获取当前页
					$.ajax({
						type:"get",
						url:"data.json",
						async:true,
						success :function(msg){
							getData(msg,index);
						}
					});
				}
			});
		}
	});
	
	//定义一个函数 功能 获取某页的数据
	function getData(msg,index){
		//显示第index页的数据
		var str = '';
		for( var i = (index-1)*4 ; i < index*4 ; i++  ){
			if( i < msg.length ){
				str += `<li>
							<img src="img/${msg[i].src}" alt="" />
							<p>${msg[i].name}</p>
							<p>${msg[i].price}</p>
							<button>购买</button>
						</li>`;
			}
		}
		$("#main").html( str );
	}
	     	
      	
      	
 