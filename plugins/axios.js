export default function(app) {
	const axios = app.$axios;

	console.log(axios);

	// 基本配置
	axios.defaults.timeout = 10000;
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

	function request(options) {
		// 处理参数
		const method = (options.method || "GET").toLocaleUpperCase();
		if (method === "GET") {
			if (options.data) {
				options.params = options.params || {};
				if (typeof options.params === 'object' || typeof options.data === 'object') {
					options.params = Object.assign(options.params, options.data);
				} else {
					options.params = options.data;
				}
			}
		}

		// 是否开启loading
		const isShowLoading = options.isShowLoading || false;
		if (isShowLoading) {
			UI.showLoading();
		}
		return axios(Object.assign({}, options)).then(function(res) {
			setTimeout(() => UI.hideLoading(), 100);
			if (res.data.code === 1) {
				if (options.isSuccessTips) UI.showToast({
					title: res.data.msg
				});
			} else {
				UI.showToast({
					title: res.data.msg
				});
				throw new Error(res.data.msg);
			}
			return res;
		}, function(err) {
			setTimeout(() => UI.hideLoading(), 100);
			UI.showToast({
				title: '网络失败，请稍后再试~'
			});
			return Promise.reject(err);
		});
	}

	window.request = request;
}
