export function getList(data = {}, options = {}) {
	return request(Object.assign(options, {
		url: '/api/article/get',
		data: data
	}));
}

export function getDetail(data = {}, options = {}) {
	return request(Object.assign(options, {
		url: '/api/article/detail',
		data: data
	}));
}
