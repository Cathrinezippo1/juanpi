;;
(function() {
// 我们要操作局部方法之前的jquerydom;	
// 插件封装想要复用必须使用this;
	// type 1
	jQuery.fn.ej = function() {
			this.children().mouseover(function() {  // 这里的this是事件的调用者，已经是jQueryDOM对象了，所以不用$(this)就行
				$(this).siblings("li").children("ul").hide();
				$(this).children("ul").toggle();
			});
		} // jQuery.fn是jQuery原型的简写
		

			/*// type 2 把参数对象合并到了 jQuery.fn 上;
			jQuery.fn.extend({
				ej: function() {}
			})*/
})();
// 1. 开篇要加两个分号;  
// 2. 所有的代码写在匿名函数里;
// 3. 插件是局部的方法；
// 4. 局部方法添加到jQuery的构造函数上还是添加到jQuery的原型上？
$(".navigation").ej();
