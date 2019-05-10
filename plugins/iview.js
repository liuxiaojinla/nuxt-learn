import Vue from 'vue'
import iView from 'iview'

export default () => {
	Vue.use(iView, {});

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
	})();

	window.UI = UI;
}
