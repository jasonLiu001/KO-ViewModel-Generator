KnockoutJS-ViewModel-Generator
========================
A tool can create viewmodel in knockout.js automatically.
------------------------

# 用途
* 根据用户配置自动生成knockout对应的viewmodel对象

# 配置
1. 安装npm到本地
2. 下载源码到本地，并切换到源码根目录，打开cmd命令行，依次输入命令npm install ==> npm link

# 使用
1. 自定义model文件夹下对应的model对象，该对象是生成viewmodel对象的json描述文件，定义如下:
<pre><code>
	var dataModel = {
		//key值为viewmodel对象的名称
		"mainViewModel": {
	   		title: '',
	    		summary: '',
	    		detailList: [],
	    		getData: new Function()//viewmodel中需要生成的方法		
		},
		"detailViewModel": {
	    		detailTitle: '',
	    		detailSummary: ''
		}
	};
</code></pre>
2. 上面的mainViewModel或detailViewModel就是需要生成的viewmodel名称，getData为对应viewmodel对象下的方法
