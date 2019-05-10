import Vue from 'vue'
import iView from 'iview'

//初始化UI
function initUI() {
	const UI = {};
	(function($) {
		let showLoadingCount = 0;

		// 显示加载框
		$.showLoading = function() {
			showLoadingCount++;
			console.log('show loading：', showLoadingCount);
		};

		// 隐藏加载框
		$.hideLoading = function() {
			showLoadingCount--;
			console.log('hide loading：', showLoadingCount);
		};
	})(UI);

	(function($) {
		$.showToast = function(options) {
			console.log('show toast', options.title);
		};
	})(UI);

	window.UI = UI;

	console.log('init UI .')
}

export default () => {
	Vue.use(iView, {});

	if (!process.server) {
		initUI();
	}
}
